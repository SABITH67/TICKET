var age = 25;

var rate;
var category;

if (age <=10){
    rate = 10;
    category = "Children";
}
else if (age >= 10&& age <= 60){
    rate = 20;
    category = "adult";
}
else  {
    rate = 15;
    category = "grand parents";
}


console.log("rate:", rate);
console.log("category:", category);