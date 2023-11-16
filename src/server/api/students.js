const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access students. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

/** Sends all students */
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

/** Creates new student and sends it */
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    if (!firstName || !lastName || !email) {
      throw new ServerError(
        400,
        "First name, last name, and email are required."
      );
    }

    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl: imageUrl || "defaultImg",
        gpa: gpa || 0.0,
        user: { connect: { id: res.locals.user.id } },
      },
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** Checks if student exists and belongs to the given user */
const validateStudent = (user, student) => {
  if (!student) {
    throw new ServerError(404, "Student not found.");
  }

  if (student.userId !== user.id) {
    throw new ServerError(403, "Permission denied.");
  }
};

/** Sends a single student by id */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const student = await prisma.student.findUnique({ where: { id } });
    validateStudent(res.locals.user, student);

    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** Updates a single student by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    const student = await prisma.student.findUnique({ where: { id } });
    validateStudent(res.locals.user, student);

    const updatedStudent = await prisma.student.update({
      where: { id },
      data: { firstName, lastName, email, imageUrl, gpa },
    });
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

/** Deletes a single student by id */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const student = await prisma.student.findUnique({ where: { id } });
    validateStudent(res.locals.user, student);

    await prisma.student.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
