/**
 * Load data.json 
 * const data = data.json
 */
const data =require("./data.json");


const petStd =data.students.map(std=> std.pets)
console.log(petStd);
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



const numPet= data.students.map(pet=>{
  let numOfPet = pet.pets.length;
  let studentName =pet.studentName;
  return {studentName,numOfPet}
})

console.log(numPet);
/**
 * count of each student's pet
 * show in result: [{studentName: "A", numOfPet: 2}, {studentName: "B", numOfPet: 1}]
 */


 const imgStd = data.students.map(std=>{
  let studentName =std.studentName;
  let imageOj = data.imageOfStudent.find(img=>img.studentId==std.studentId)
  let image = imageOj.imgPath
  return {studentName,image}
 })
console.log(imgStd)

 /**
 * get image of student 
 * result: [{studentName: "A" , image:"public/img/student1.jpg"}]
 */
console.log("-----------------------------")
 const addPetType = data.students.map(All=>{
   
   
    console.log({...All})
    console.log("--------------------------------------------------------")

    All.pets=All.pets.map(pet=>{
        let petType = 0;
        let petName =pet.petName;
        if(pet.petType == "cat") petType = 1;
      return {petName,petType};
    })

   return {...All} 


 })

 let petTypeOb = {"petTypeOb":[
   {"petTypeId":0,"petTypeName":"dog"},
   {"petTypeId":1,"petTypeName":"cat"}
]}

addPetType.push(petTypeOb)
console.log(addPetType);

 /**
  * add petType object on top level {petTypeId: 0, petTypeName: "dog"}
  * convert petType to 0 is dog and 1 is cat
  * result is the same data.json file but add petType object and change student's petType
  */



/**
 * 
 * 
 */