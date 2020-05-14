/**
 * Load data.json 
 * const data = data.json
 */
const data = require('./data.json');
// console.log(data);
// output
/*
{
  students: [
    { studentId: 1, studentName: 'A', age: 19, pets: [Array] },
    { studentId: 2, studentName: 'B', age: 17, pets: [Array] },
    { studentId: 3, studentName: 'C', age: 20, pets: [Array] }
  ],
  imageOfStudent: [
    { studentId: 1, imgPath: 'public/img/student1.jpg' },
    { studentId: 2, imgPath: 'public/img/student2.jpg' },
    { studentId: 3, imgPath: 'public/img/student3.jpg' }
  ]
}
*/
 /**
  * get All pets
  * result pets:  [{
                    "petName": "Rooney_A",
                    "petType": "dog"
                },
                {
                    "petName": "Minny_A",
                    "petType": "cat"
                }]
  */
const AllPet = data.students.map(
  element => element.pets).flat();
// console.log(AllPet);
/*
[
  { petName: 'Rooney_A', petType: 'dog' },
  { petName: 'Minny_A', petType: 'cat' },
  { petName: 'Lulu_B', petType: 'dog' },
  { petName: 'MuSu_C', petType: 'dog' },
  { petName: 'Boot_C', petType: 'cat' }
]
*/
/**
 * count of each student's pet
 * show in result: [{studentName: "A", numOfPet: 2}, {studentName: "B", numOfPet: 1}]
 */
const petNumOfStu = data.students.map(element => {
  return {studentName: element.studentName, numOfPet:element.pets.length}})
// console.log(petNumOfStu);
/*
[
  { studentName: 'A', numOfPet: 2 },
  { studentName: 'B', numOfPet: 1 },
  { studentName: 'C', numOfPet: 2 }
]
*/

 /**
 * get image of student 
 * result: [{studentName: "A" , image:"public/img/student1.jpg"}]
 */
imageOfStudent = data.students.map(element =>{
  return {studentName: element.studentName, image: data.imageOfStudent
    .find(img => img.studentId === element.studentId).imgPath}
})
 
// console.log(imageOfStudent);
/*
[
  { studentName: 'A', image: 'public/img/student1.jpg' },
  { studentName: 'B', image: 'public/img/student2.jpg' },
  { studentName: 'C', image: 'public/img/student3.jpg' }
]
*/
 /**
  * add petType object on top level {petTypeId: 0, petTypeName: "dog"}
  * convert petType to 0 is dog and 1 is cat
  * result is the same data.json file but add petType object and change student's petType
  */
const newData = {
  students: data.students.map(element =>{
    return {
      studentId: element.studentId,
      studentName: element.studentName,
      pets: element.pets.map(petElement =>{
        return {
          petName: petElement.petName, 
          petTypeID: petElement.petType === 'dog'? 0 : 1
        }
     })
    }
  }),
  imageOfStudent: data.imageOfStudent,
  petTypes: [
    {petTypeId: 0, petTypeName: "dog"},
    {petTypeId: 1, petTypeName: "cat"}
  ]
}
console.log(newData);
/*
{
  students: [
    { studentId: 1, studentName: 'A', pets: [Array] },
    { studentId: 2, studentName: 'B', pets: [Array] },
    { studentId: 3, studentName: 'C', pets: [Array] }
  ],
  imageOfStudent: [
    { studentId: 1, imgPath: 'public/img/student1.jpg' },
    { studentId: 2, imgPath: 'public/img/student2.jpg' },
    { studentId: 3, imgPath: 'public/img/student3.jpg' }
  ]
}
*/

/**
 * 
 * 
 */