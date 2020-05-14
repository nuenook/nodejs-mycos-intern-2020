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
const PrintABCCA = async () => {
   printA();
   printB();
   printC();
   printC();
   printA();
}
 PrintABCCA();

/**
 * Print by starting with B
 * then Print 3 A
 * end with print B
 * time < 10 seconds :3
 * eg: BAAAB
 */

console.log("----------------------------")
const PrintBAAAB = async () => {
    console.time("Ten seconds");
    
    await printB();
    await Promise.all([printA(),printA(),printA()]);    
    await printB();
    console.timeEnd("Ten seconds");
}
PrintBAAAB();

/**
 * Challenge accepted
 * print ABC in time < 4 seconds
 */
const PrintABCIn3Second = async () => {
    console.time("three seconds");
    await Promise.all([printA(),printB(),printC()]);
    console.timeEnd("three seconds");
}

PrintABCIn3Second()