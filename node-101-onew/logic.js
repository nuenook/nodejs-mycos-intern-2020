function Triangel(height) {
    let rlt = ""
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= height; j++) {
            if (j > height - i) {
                rlt += `${i} `;
            }
            else {
                rlt += ` `;
            }
        }
        rlt += `\n`;
    }

    console.log(rlt);
}

function CatChicken(x, y) {
    /*
    cat + chick = x ==> 1
    4(cat) + 2(chick) = y ===> 2
    2(cat) + chick = y/2 ===> 3
    chick = x - cat ===> 4
    2(cat) + x -cat = y/2
    cat + x = y/2
    cat = y/2 - x
    chick = x - cat
    */
    return {
        cat: y/2 -x,
        chicken: 2*x - y/2 
    }
}
/*
    1
   2 2
  3 3 3
 4 4 4 4 
5 5 5 5 5
*/
Triangel(5)
console.log(CatChicken(36, 96));
