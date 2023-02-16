let name: string = "Damian";
let age: number = 50;
let teaching: boolean = true;

let classes: string[] = ["typescript", "c#", "presenting"];

// console.log(name, age,teaching)
// console.table(classes)

enum TaxesForms {
  StandardTaxes = "ez2055",
  Child_Credit = "677",
  Crypt_Credit = "2055",
}

// console.log(TaxesForms.StandardTaxes)

let code: string | number = "11";

code = 11;

// console.log(code)

let cars: string[] = ["mustang", "tesla", "accord", "truck"];

// returns the value of the element in the array at position index
function findIndex(index: number, array: string[]) : string {
    return array[index]
}

// doesn't return anything (hence "void")
function findIndex2(index: number, array: string[]) : void {
    console.log(array[index])

}

//console.log(findIndex(1,cars))

//findIndex2(1,cars)


// let classroom : any = {
//     name: "typescript",
//     duration: 6,
//     boring: false
// }

interface classroom {
    name: string,   // required
    duration: number, // required
    boring: boolean,// required
    room?: string  // optional
}

let thisClassroom : classroom | null = {
    name: "typescript",
    duration: 6,
    boring: false,
    room: "big classroom"
}

//console.log(thisClassroom)

let thatClassroom: classroom = {
    name: "javascript 2.0",
    duration: 2,
    boring: true,

}