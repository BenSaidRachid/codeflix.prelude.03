export default class GradeSchool {
  constructor() {
    this.students = new Map();
  }

  addStudent(name, grade) {
    const gradeString = grade.toString();
    this.initGrade(gradeString);
    let array = this.students.get(gradeString);
    array.push(name);
    this.students.set(gradeString, array.sort()); 
  }

  initGrade(grade) {
    if(this.students.get(grade) === undefined)
      this.students.set(grade, [])
  }

  getAllStudents() {
    return  new Map([...this.students].sort());
  }

  getGradeStudents(grade) {
    const gradeString = grade.toString();
    this.initGrade(gradeString);
    return this.students.get(gradeString);
  }
}