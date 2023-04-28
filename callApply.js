const person = {
    firstName : "wasif",
    lastName : "Omee",

    salary: 15000,

    getFullname: function(){
        console.log(this.firstName)
        console.log(this.lastName)
    },

    getBill: function(amount){
        this.salary = this.salary - amount
    }

}

person.getFullname()
person.getBill(123)
console.log(person.salary)

