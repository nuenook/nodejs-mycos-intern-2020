
const tri=()=>{
    for(i =0 ;i<5;i++){
        str=""
        for(j =0 ;j<5;j++){
            if(j<=i){
                str+=i+1+" ";
            }
            else{
                str=" "+str;
            }
        }
        console.log(str);
    }
}

const HeadAndLegOfChickenCat=(x,y)=>{


    let chicken = (4*x-y)/2;
    let cat =x-chicken;   
    console.log(cat,chicken);
}

HeadAndLegOfChickenCat(3,8);
HeadAndLegOfChickenCat(3,10);
HeadAndLegOfChickenCat(3,12);

tri()
      
