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

//console.log ( user instanceof User ) ;