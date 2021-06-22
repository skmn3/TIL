// 점표기법, 대괄호 표기법
const foo = {
  name: 'foo',
  major: 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nicknmae);

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

//객체 프로퍼티 동적 생성
foo.age = 27;
console.log(foo.age);

//대괄호 표기법을 사용해야 하는 경우
foo['full-name']= 'foo bar';
console.log(foo.full-name);
console.log(foo['full-name']);