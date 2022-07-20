const jsf = require('json-schema-faker'); 
const StudentSchemaAsObject = require('./Student.json');
const TeacherSchemaAsObject = require('./Teacher.json');
const InstituteSchemaAsObject = require('./Institute.json');
const StudentObj = jsf.generate(StudentSchemaAsObject);
const TeacherObj = jsf.generate(TeacherSchemaAsObject);
const InstituteObj = jsf.generate(InstituteSchemaAsObject);
// console.log(obj);
export const dummy_array = [];
// const dummy_array = [];
const printPaths = (obj, parentPath) => {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    const layerKeys = Object.keys(obj);
    for (const ky of layerKeys) {
      const newKey = parentPath ? `${parentPath}.${ky}` : ky;
      printPaths(obj[ky], newKey);
    }
  } else if (parentPath) {
    // dummy_array.push(parentPath.split('.').slice(2).join('.'));
    dummy_array.push(parentPath);
  }
};

printPaths(StudentObj);
printPaths(TeacherObj);
printPaths(InstituteObj);

console.log(dummy_array);