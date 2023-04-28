const normalPerson = {
    firstName : "abul",
    lastName : "kalam",
    salary: 15000,

    getFullname: function(){
        console.log(this.firstName)
        console.log(this.lastName)
    },

    getBill : function(amount){
        this.salary = this.salary - amount
    }
}

const heroPerson = {
    firstName : "azat",
    lastName: "ajij",
    salary: 20000
}

const friendlyPerson ={
    firstName : "kamal",
    lastName: "uddin",
    salary : 25000
}

// normalPerson.getFullname()

normalPerson.getBill(2000)
console.log(normalPerson.salary)

const heroPersonbill = normalPerson.getBill.bind(heroPerson)
heroPersonbill(2000)
console.log(heroPerson.salary)

const friendlyPersonbill = normalPerson.getBill.bind(friendlyPerson)
friendlyPersonbill(1200)
console.log(friendlyPerson.salary)