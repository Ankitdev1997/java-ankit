class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{    //extends use kiya user ka part bnane k liye
    constructor(username, email, password){
        super(username)  //super keyword ka use kiya upar vale ko isme dikhane k liye
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);   //instance keyword s pta chalta h ki ye issse related h kya


class car {
    constructor(name,year){
        this.name = name
        this.year = year

    }
}

const myCar1 = new car(Ford, 2014)
console.log(myCar1.name);
