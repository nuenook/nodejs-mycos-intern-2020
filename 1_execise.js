/**
 * Load data.json 
 * const data = data.json
 */
const data = require('./data.json')
console.log(data)

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
const getAllpet = data.students.map(pet => pet.pets)
console.log(getAllpet)


/**
 * count of each student's pet
 * show in result: [{studentName: "A", numOfPet: 2}, {studentName: "B", numOfPet: 1}]
 */
const studentpet = data.students.map(stu => {
  let studentName = stu.studentName
  let numOfPet = stu.pets.length

  return { studentName, numOfPet }
})
console.log(studentpet)

/**
* get image of student 
* result: [{studentName: "A" , image:"public/img/student1.jpg"}]
*/

const imageStudent = data.students.map(stu => {
  let studentName = stu.studentName
  let ObjImage = data.imageOfStudent.find(img => img.studentId == stu.studentId)
  return { studentName, ObjImage }
})
console.log(imageStudent)
/**
 * add petType object on top level {petTypeId: 0, petTypeName: "dog"}
 * convert petType to 0 is dog and 1 is cat
 * result is the same data.json file but add petType object and change student's petType
 */
// getAllpet.push([{ "petType": "0", "petTypeName": "cat" }, { "petType": "1", "petTypeName": "dog" }])
const newdata = {type:[{ "petType": "0", "petTypeName": "cat" }, { "petType": "1", "petTypeName": "dog" }]}
const Type = getAllpet.map(pet => {
    
    const recursive = (i) => {
      switch (pet[i].petType) {
        case 'cat': pet[i].petType = "0"
          break
        case "dog": pet[i].petType = "1"
          break
        default: break
      }
      i += 1
      if (i < pet.length) {
        recursive(i)
      }
    }
    recursive(0)
  return pet// , { petTypeName}
})


console.log("petType to 0 is dog and 1 is cat")

Type.push(newdata)
console.log(Type)
/**
 *
 *
 */