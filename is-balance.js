
 let num1 = 3 , num2 = 50 , num3 = 4900733768;


 let oprand = (num2 , num3)=>{

    do{

       let thousand = num2 % 2 == 0 ? num3 += 1 : num3 += 2;
       console.log(thousand);
       num2++;

    }while (num2<=1000) 
           
     
}

oprand(num2 , num3);