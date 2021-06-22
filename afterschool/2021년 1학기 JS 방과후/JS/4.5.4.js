// const Person = function(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
// }

// const left = new Person('left', 29.5, 'computer science');
// const seo = new Person('seo', 29, 'computer science');

// Person.prototype.call = function(){
//     console.log(`이름은: ${this.name}`);
//     console.log(`나이는: ${this.age}`);
//     console.log(`전공은: ${this.major}`);
// }

// console.log(left.call());
// console.log(seo.call());

const Person = function(name, age){
    this.name = name;
    this.age = age;
}

const foo = new Person('foo', 30);
const baz = new Person('baz', 45);

Person.prototype.getName = function(){
    console.log(this.name);
}

Person.prototype.getAge = function(){
    console.log(this.age);
}
Person.prototype.setName = function(){
    this.name = newName;
}

foo.getName();
foo.getAge();