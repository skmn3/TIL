const Person1 = function(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
}

const left = new Person1('left', 29.5, 'computer science');
const seo = new Person1('seo', 29, 'computer science');

Person1.prototype.call = function(){
    console.log(`이름은: ${this.name}`);
    console.log(`나이는: ${this.age}`);
    console.log(`전공은: ${this.major}`);
}

console.log(left.call());
console.log(seo.call()); // undefined

const Person2 = function(name, age){
    this.name = name;
    this.age = age;
}

const foo = new Person2('foo', 30);
const baz = new Person2('baz', 45);

Person2.prototype.getName = function(){
    console.log(this.name);
}

Person2.prototype.getAge = function(){
    console.log(this.age);
}
Person2.prototype.setName = function(){
    this.name = newName;
}

foo.getName();
foo.getAge();
