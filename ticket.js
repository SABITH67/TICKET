var age = 10 ;

var rate ;
var category ;

if (age >= 0 && age <= 10) {
    rate = 10;
    category = "Children";
}
else if (age >= 11 && age <= 59) {
    rate = 20;
    category = "adult";
}
else  (age >= 60) {
    rate = 15;
    category = "grand parents";
}

console.log("Rate:", rate);
console.log("Category:", category);