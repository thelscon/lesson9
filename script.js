'use strict' ;

const bonuses = {
    'C++' : 100,
    Rust : 150,
    default : 50
} ;

const grades = {
    Junior : 'junior',
    Middles : 'middle',
    Senior : 'senior',
} ;

const gradeTax = {
    [grades.Junior] : 0.25,
    [grades.Middles] : 0.5,
    [grades.Senior] : 0.75 ,
} ;

function User ( name, language, grade = grades.Junior ) {
    this.name = name ;
    this.salary = 1000 ;
    this.grade = grade ;
    this.language = language ;
    this.tasks = 0 ;

    this.addTask = () => {
        this.tasks++ ;
    } ;
    
    this.finishTask = () => {
        if (this.tasks > 0) {
            --this.tasks ;
            this.salary += (bonuses [this.language] || bonuses.default) * gradeTax [this.grade]; 

        }
    } ;

}

function newFunction () {
    console.log (new.target) ;
}

newFunction () ;
new newFunction () ;

Number.prototype.toBoolean = function () {
    console.log (this.valueOf ()) ;
} ;

const langProg = {} ;

const user = new User ('John', 'C++', grades.Junior );
const user1 = new User ('Vasya', 'Rust', grades.Middles) ;

user.addTask () ;
user.addTask () ;
user.addTask () ;
user.addTask () ;
user.addTask () ;

user.finishTask () ;
user.finishTask () ;
user.finishTask () ;

console.log ( user.salary, user.tasks ) ;
let strstr = 'asdjf akfhsf asdasdasd' ;
let strUpper = str => {
    let newStr = '';
    for (let key = 0; key < str.length ; ++key) {
        if ( !(key % 2) ) {
            newStr += str[key].toUpperCase() ;
        }
        else {
            newStr += str[key] ;
        }
    }
    return newStr ;
} ;

console.log ( strUpper (strstr) ) ;

//console.log ( user instanceof User ) ;

const arr = [1, 2, 3] ;

const obje = {
    one : 'one', 
    two : 'two'
} ;

arr.push ('4') ;
 
arr.splice (1, 1) ;
delete obje.one ;

console.log (arr, obje) ;
