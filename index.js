let data1 = 1
let data2 = "1"         //input
let data4 = "1.75"

console.log(data1, typeof data1)    //to show output
console.log(data2, typeof data2)

let data3 = data1 + parseInt(data2) //parseInt = to convert string to interger
console.log(data3, typeof data3)

let data5 = data1 + parseFloat(data4) //parseFloat = to convert string to float
console.log(data5, typeof data5)

let data6 = toString(data1) + data1 //toString = to convert anything to string
console.log(data6, typeof data6)

//Array
let data7 = ["one",2,true]
console.log(data7)         //to view all elements
console.log(data7[2])      //to view desired element

//Object
let user = {
    name: "soo" ,
    faculty: "fkekk" ,
    phone: ["123456",
"345678"]
}
console.log(user.faculty) //to view desired element
console.log(user.phone[0]) //to view phone number in index 0 of the array (phone)
console.log(user.phone[1]) //to view phone number in index 1 of the array (phone)

let user2 = {
    name2: "imm" ,
    faculty2: "fkekk" ,
    phone2: {
        office: "23435353" ,
        mobile: "77889476"
    }
}
console.log(user2.phone2.office)