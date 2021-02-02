const students = [ { id: 1, name:'goru'},
 { id: 2, name:'gadha'},
 { id: 3, name:'kocchop'},
 { id: 4, name:'hati'}
];
// for (let i = 0; i < students.length; i++) {
//     const nameArray = [];
//     const idArray = [];
//     const element = students[i];
//     const names = element.name;
//         const id = element.id;
//     const newIdArray = idArray.push(id);
//     console.log(newIdArray,names);
// }
// const sName = students.map( s => s.name);
// const sId = students.map( s => s.id );
// console.log( sName, sId);
// const filterId = students.filter( s => s.id > 2);
// console.log(filterId);
const findId = students.find( s => s.id === 3);
console.log( findId );