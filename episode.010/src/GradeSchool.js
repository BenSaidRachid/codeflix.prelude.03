export default class GradeSchool {
  constructor() {
    this.students = new Map();
  }

  addStudent(name, grade) {
    this.students.set(grade, [name].sort());
  }

  getAllStudents() {
    return this.students;
  }
}