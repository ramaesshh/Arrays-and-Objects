'use strict';
var person={                    //decalring the object with {}
    Name : "Batman",
    Age : 28
}
person.occupation = "Savior"    //modifying the object here
console.log(person.Name);
console.log(person.Age);
console.log(person.occupation);


 
var person = new Object           //declaring object with new method
{
    person.name = "Superman"
    person.age = 27
    person.occupation = "Racer"
}
console.log(person["name"])       //call the object with sqare braket 
console.log(person.age)           //calling the object with dot notation
console.log(person.occupation)
 


var person = {                         //Nested JSON Object
    "name" : "Saul Goodman",
    "age" : 28,
    "occupation" : "Lawer",
    "address" :{
        "city" : "Mexico",
        "pincode" : 213123 
    }
}
console.log(person.address.pincode)



var person = [                       //Nested JSON Array
    {
        "name" : "Travis",
        "age" : 26,
        "occupation" : "Rapper"
    },
    {
        "name" : "Kanye",
        "age" : 30,
        "occupation" : "Rapper"
    }
]
console.log(person[0])



const car = {                 //JSON Stringify method(It converts Javascript object to JSON string)
    name : "Lexus",
    year : 20
}
console.log(car)
const ccar = JSON.stringify(car);
console.log(ccar)



const bike = '{"name" : "Rone" ,"year" : 20}'        //JSON parse method(It converts Javascript string to JSON object)
console.log(bike);
const bbike = JSON.parse(bike)
console.log(bbike);




const ad = [20,30,40]                            //Array destructuring
const[a,b,c,d=90] = ad
console.log(a)
console.log(b)
console.log(d)


const od ={                                      //Object destructuring
    name : "skyline",
    model : "R34",
    details :{
        color : "red",
        year : 2000
    }
}
const {name:namex,model,details:{color,year}} = od                 //name change & nest object assign
console.log(namex);
console.log(model);
console.log(color);
console.log(year);


//without strictmode
var personname = "pinkman"
console.log(personname)


//with strictmode (it checks the code is clean or not(errors))

'use strict';
 let personz = "pink"
console.log(person)




const th = function(){                //this keyword(refers to global object here in normal function)
    console.log("hello");               //in use strict mode this keyword is undefined
    console.log(this);
}
th();



const cn = {                                 //.this in a method refers to its owner 
    names : "naruto",
    genre : "fantasy",
    detail : function(){
        console.log(`${this.names} is a japanese anime`)
    }
}
console.log(cn.detail());