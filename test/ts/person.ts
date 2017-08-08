import Person from './i-conf';

function main(p: Person) {
    console.log(p.age, p.age, p.getAge(44))
}

main({ name: 'gogo', age: 2 , getAge: (age: number)=> age*10});