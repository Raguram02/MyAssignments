var name = "Ragu";
var name = "Robin"; // Redeclaration with var is allowed
name = "Dhilip"; // Reassignment with var is allowed

console.log("Name Var: " + name);

let nameLet = "Ragu";
console.log("Name Let: " + nameLet);
// let nameLet = "Ragu"; // Redeclaration with let is not allowed
nameLet = "Robin"; // Reassignment with let is allowed
console.log("Name Let after reassignment: " + nameLet);

const nameConst = "Ragu";
// const nameConst = "Ragu"; // Redeclaration with const is not allowed
// nameConst = "Ragu"; // Reassignment with const is not allowed 
console.log("Name Const: " + nameConst);

// Block scope for let
{ {
    let age = 25;
    age = "26"; // Reassignment with let is allowed
    console.log("Age inside block: " + age);
}
// console.log("Age outside block: " + age); // age is not accessible here
}

// Block scope for var
{{
    var city = "Chennai";
    console.log("City inside block: " + city);
}
    console.log("City outside block: " + city);
}

// block scope for const
{ {
    const country = "India";
    // country = "USA"; // Reassignment with const is not allowed
    console.log("Country inside block: " + country);
}
// console.log("Country outside block: " + country); // country is not accessible here
}