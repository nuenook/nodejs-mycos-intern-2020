const loop = () => {
    str =""
    for (i=0;i<5;i++){
        for (y=5; y>i; y--){
            str += " "
        }
        for (j=i+1 ; j>0; j--){
            str += (i+1).toString() + " "
        }
        str += "\n"
    }
    console.log(str)
}
loop()


const SUMXY = (x,y) => {
    let chicken = (4*x-y)/2
    console.log("chicken :" + chicken)
    console.log("cat :" + (x-chicken))
}
SUMXY(36,96)