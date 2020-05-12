/**
 * Don't touch it!!!
 */
const sleep3s = () => new Promise(resolve => setTimeout(resolve, 3000));

const printA = async () => {
    await sleep3s()
    console.log("A")
}

const printB = async () => {
    await sleep3s()
    console.log("B")
}

const printC = async () => {
    await sleep3s()
    console.log("C")
}
/********************************* */


/**
 * Print by following A B C C A
 */
const PrintABCCA = async () => {}


/**
 * Print by starting with B
 * then Print 3 A
 * end with print B
 * time < 10 seconds :3
 * eg: BAAAB
 */
const PrintBAAAB = async () => {
    console.time("Ten seconds");




    console.timeEnd("Ten seconds");
}


/**
 * Challenge accepted
 * print ABC in time < 4 seconds
 */
const PrintABCIn3Second = async () => {
    console.time("three seconds");

    console.timeEnd("three seconds");
}

PrintABCIn3Second()