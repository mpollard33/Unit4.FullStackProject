// seed.js

const prisma = require("../prisma");

const seed = async () => {
  // Seed students to database
  await prisma.student.createMany({
    data: [
      { firstName: "Ted", lastName: "Williams", email: "ted.williams@gmail.com", gpa: 3.5 },
      { firstName: "Alice", lastName: "Johnson", email: "alice.johnson@gmail.com", gpa: 3.2 },
      { firstName: "Bob", lastName: "Smith", email: "bob.smith@gmail.com", gpa: 3.7 },
    ],
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
