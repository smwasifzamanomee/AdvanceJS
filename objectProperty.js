const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
]

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne);
console.log(bigger);
console.log(ids);
console.log(names);
