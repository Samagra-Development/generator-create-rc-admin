 const schema = `{
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Common",
  "definitions": {
    "IdentityDetails": {
      "type": "object",
      "title": "Identity Details",
      "description": "Identity Details",
      "required": [],
      "properties": {
        "fullName": {
          "$id": "#/properties/fullName",
          "type": "string",
          "title": "Full name"
        },
        "gender": {
          "$id": "#/properties/gender",
          "type": "string",
          "enum": [
            "Male",
            "Female",
            "Other"
          ],
          "title": "Gender"
        },
        "dob": {
          "$id": "#/properties/dob",
          "type": "string",
          "format": "date",
          "title": "DOB"
        },
        "identityHolder": {
          "type": "object",
          "properties": {
            "type": {
              "$id": "#/properties/type",
              "type": "string",
              "$comment": "Nationality",
              "title": "ID Type",
              "enum": [
                "AADHAR",
                "PAN",
                "LICENSE",
                "OTHER"
              ]
            },
            "value": {
              "$id": "#/properties/value",
              "type": "string",
              "$comment": "Nationality",
              "title": "ID Value"
            }
          }
        }
      }
    },
    "ContactDetails": {
      "type": "object",
      "title": "Contact Details",
      "description": "Contact Details",
      "required": [],
      "properties": {
        "email": {
          "$id": "#/properties/email",
          "type": "string",
          "title": "Email"
        },
        "mobile": {
          "$id": "#/properties/mobile",
          "type": "string",
          "title": "Mobile"
        },
        "address": {
          "$id": "#/properties/address",
          "$ref": "#/definitions/Address",
          "title": "Address"
        }
      }
    },
    "AcademicQualification": {
      "type": "object",
      "properties": {
        "instituteOSID": {
          "$id": "#/properties/instituteOSID",
          "type": "string",
          "title": "Institute OSID"
        },
        "instituteName": {
          "$id": "#/properties/instituteName",
          "type": "string",
          "title": "Institute Name"
        },
        "qualification": {
          "$id": "#/properties/qualification",
          "type": "string",
          "title": "Qualification"
        },
        "program": {
          "$id": "#/properties/program",
          "type": "string",
          "title": "Program of Study"
        },
        "graduationYear": {
          "$id": "#/properties/graduationYear",
          "type": "string",
          "title": "Year of Graduation"
        },
        "marks": {
          "$id": "#/properties/marks",
          "type": "string",
          "title": "Marks / Ranking / GPA, etc"
        }
      }
    },
    "ExperienceType": {
      "type": "object",
      "properties": {
        "instituteOSID": {
          "$id": "#/properties/instituteOSID",
          "type": "string",
          "title": "Institute OSID"
        },
        "instituteName": {
          "$id": "#/properties/instituteName",
          "type": "string",
          "title": "Institute Name"
        },
        "employmentType": {
          "$id": "#/properties/employmentType",
          "type": "string",
          "title": "Employment Type",
          "enum": [
            "Permanent",
            "Contract"
          ]
        },
        "start": {
          "$id": "#/properties/start",
          "type": "string",
          "format": "date",
          "title": "Start Date"
        },
        "end": {
          "$id": "#/properties/end",
          "type": "string",
          "format": "date",
          "title": "End Date"
        },
        "teacherType": {
          "$id": "#/properties/teacherType",
          "type": "string",
          "title": "Teacher Type",
          "enum": [
            "Head teacher",
            "Acting head teacher",
            "Teacher",
            "Instructor positioned as per RTE",
            "Principal",
            "VicePrincipal",
            "Lecturer"
          ]
        },
        "subjectsTaught": {
          "$id": "#/properties/subjectsTaught",
          "title": "Subjects Taught",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "subjects": {
                "$id": "#/properties/subjects",
                "type": "string",
                "title": "Subject",
                "enum": [
                  "English",
                  "Kannada",
                  "Mathematics",
                  "Science",
                  "Social Science",
                  "Art"
                ]
              },
              "grades": {
                "$id": "#/properties/grades",
                "type": "string",
                "title": "Grades",
                "enum": [
                  "Pre-Pri.",
                  "Class I",
                  "Class II",
                  "Class III",
                  "Class IV",
                  "Class V",
                  "Class VI",
                  "Class VII",
                  "Class VIII",
                  "Class IX",
                  "Class X",
                  "Class XI",
                  "Class XII"
                ]
              }
            }
          }
        }
      }
    },
    "EducationType": {
      "type": "object",
      "properties": {
        "institute": {
          "$id": "#/properties/institute",
          "type": "string",
          "title": "Institute Name"
        },
        "instituteOSID": {
          "$id": "#/properties/instituteOSID",
          "type": "string",
          "title": "Institute Osid"
        },
        "board": {
          "$id": "#/properties/board",
          "type": "string",
          "title": "Board of Education"
        },
        "medium": {
          "$id": "#/properties/program",
          "type": "string",
          "enum": [
            "English",
            "Hindi",
            "Gujarati",
            "Malayalam",
            "Tamil"
          ],
          "title": "Medium of Education"
        },
        "class": {
          "$id": "#/properties/graduationYear",
          "type": "string",
          "enum": [
            "Pre-Pri.",
            "Class I",
            "Class II",
            "Class III",
            "Class IV",
            "Class V",
            "Class VI",
            "Class VII",
            "Class VIII",
            "Class IX",
            "Class X",
            "Class XI",
            "Class XII"
          ],
          "title": "Current Enrollment Class / Std."
        },
        "documents": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "fileName": {
                "type": "string",
                "format": "file"
              }
            }
          },
          "title": "Education related documents"
        }
      }
    },
    "GuardianDetails": {
      "type": "object",
      "properties": {
        "fullName": {
          "$id": "#/properties/fullName",
          "type": "string",
          "title": "Guardian's Full Name"
        },
        "relation": {
          "$id": "#/properties/relation",
          "type": "string",
          "title": "Guardian Relation type"
        }
      }
    },
    "CertificationType": {
      "type": "object",
      "properties": {
        "institute": {
          "type": "string"
        },
        "start": {
          "type": "string",
          "format": "date"
        },
        "end": {
          "type": "string",
          "format": "date"
        }
      }
    },
    "Document": {
      "type": "object",
      "properties": {
        "fileName": {
          "type": "string",
          "format": "file"
        }
      }
    },
    "Address": {
      "type": "object",
      "required": [],
      "properties": {
        "plot": {
          "type": "string",
          "title": "Plot"
        },
        "street": {
          "type": "string",
          "title": "Street"
        },
        "landmark": {
          "type": "string",
          "title": "Landmark"
        },
        "locality": {
          "type": "string",
          "title": "Locality"
        },
        "state": {
          "type": "string",
          "title": "State",
          "enum": [
            "Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Ladakh",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
          ]
        },
        "district": {
          "type": "string",
          "title": "District"
        },
        "village": {
          "type": "string",
          "title": "Village/Town/City"
        },
        "pincode": {
          "type": "string",
          "title": "Pincode"
        }
      }
    }
  },
  "type": "object",
  "properties": {
    "identityDetails": {
      "$ref": "#/definitions/IdentityDetails"
    },
    "contactDetails": {
      "$ref": "#/definitions/ContactDetails"
    },
    "academicQualifications": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/AcademicQualification"
      },
      "title": "Education Details"
    },
    "experience": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ExperienceType"
      },
      "title": "Professional Experience"
    }
  },
  "required" : ["identityDetails", "contactDetails","academicQualifications", "experience" ]
}`;
 
const schemaAsObject = JSON.parse(schema);
const obj = jsf.generate(schemaAsObject);
console.log(obj);

const working = {
  "identityDetails": {
    "identityHolder": {
      "type": "PAN",
      "value": "tempor incididunt"
    },
    "dob": "1947-03-04",
    "gender": "Male",
    "fullName": "aliqua et anim in nulla"
  },
  "contactDetails": {
    "email": "erhj@ehg.com",
    "mobile": "non proident ut in",
    "address": {
      "locality": "Excepteur non"
    }
  },
  "academicQualifications": [
    {
      "qualification": "in",
      "instituteOSID": "exercitation in",
      "instituteName": "nulla in quis dolore",
      "program": "adipisicing",
      "marks": "adipisicing ut sed eu",
      "graduationYear": "consequat occaecat"
    }
  ],
  "experience": [
    {
      "employmentType": "Permanent",
      "start": "2014-03-18",
      "end": "2009-06-21",
      "instituteName": "laborum incididunt officia dolore",
      "instituteOSID": "et eiusmod proident Ut in",
      "teacherType": "Lecturer"
},
    {
      "start": "1959-08-19",
      "teacherType": "Teacher",
      "employmentType": "Contract",
      "instituteOSID": "dolore Ut ea magna",
      "end": "1959-08-06"
    },
    {
      "employmentType": "Contract",
      "end": "1987-12-17",
      "instituteName": "velit in est"
    },
    {
      "end": "2006-08-22",
      "start": "1976-03-10",
      "employmentType": "Contract",
      "teacherType": "Instructor positioned as per RTE"
    },
    {
      "instituteName": "tempor",
      "instituteOSID": "cillum in",
      "employmentType": "Contract",
      "end": "1999-10-22",
      "teacherType": "Principal",
      "start": "1966-09-01"
    }
  ]
}

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

const dummy_array = [];
const iterate = (obj) => {
  Object.keys(obj).forEach(key => {
  if ((typeof obj[key] === 'object' || typeof obj[key] === "array" )&& obj[key] !== null) {
          iterate(obj[key])
      }
  if(isNaN(key))
      if(typeof(obj[key])!="object")
        dummy_array.push(key);
  })
}

iterate(obj);
console.log(dummy_array);