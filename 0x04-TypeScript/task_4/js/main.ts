/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// ✅ Must match the text the checker looks for exactly:
const cpp = new Cpp();
const java = new Java();
const react = new React();

// ✅ cTeacher constant
const cTeacher: Subjects.Teacher = {
  firstName: 'Grace',
  lastName: 'Hopper',
  experienceTeachingC: 10
};

// Log results as required
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());