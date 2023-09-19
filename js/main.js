let products = [
    ['Хліб', 20],
    ['Масло', 70],
    ['Ковбаса', 150],
    ['Цукор', 15]
];
let sum = 0;

for (let i = 0; i < products.length; i++) {
    let name = products[i][0];
    let price = products[i][1];

    if (price <= 20) {
        console.log(i + 1,name, price, ':)');
    } else if (price >= 100){
        console.log(i + 1,name, price, ':(');  
    } else {
        console.log(i + 1,name, price); 
    }
    sum +=price;
}
    
    console.log(sum);  



