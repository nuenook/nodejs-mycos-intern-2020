const random = () => Math.floor((Math.random() * 3) + 
1)*1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const connectToDatabase = async () => {
  console.log("database connecting...")
  await sleep(random())  
  console.log("database connected")
};

const getStudent = async (id = '') => {
  console.log(`student ${id} getting...`)
  await sleep(random())
  console.log(`get ${id} student success`)
}
const updateStudent = async (id = '') => {
  console.log(`student ${id} updating...`)
  await sleep(random())
  console.log("student ${id} updated")
}

// (async () => {
//     console.time("Time this");
//     console.log("start")
//     await connectToDatabase()
//     await getStudent()
//     await updateStudent()
//     console.log("end")
//     console.timeEnd("Time this");
//   })()



  const main = async () => {
    const stu = [1,2,3]
    console.time("Time this");
    console.log("start")
    await connectToDatabase()

    const stuPromise = stu.map(s => {
        return (async () =>  {
            await getStudent(s)
            await updateStudent(s)
        })()
    })

    await Promise.all(stuPromise)
    
    console.log("end")
    console.timeEnd("Time this");
  }

  main()
  

