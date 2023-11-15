import api from "../../store/api";

const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => `/students`,
      providesTags: ["Student"],
    }),
    getStudent: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ["Student"],
    }),
    createStudent: builder.mutation({
      query: (student) => ({
        url: "/students",
        method: "POST",
        body: student, // use entire student object in body
      }),
      invalidatesTags: ["Student"],
    }),
    editStudent: builder.mutation({
      query: (student) => ({
        url: `/students/${student.id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentQuery,
  useCreateStudentMutation,
  useEditStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
