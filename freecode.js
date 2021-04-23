// var a ='my name is roshan and im';
// var b =1;
// console.log(b+a)


// class Student{
//     constructor(name,std,add){
//     this.sName=name;
//     this.std=std;
//     this.add=add;
//     };
//     intro(){
//         return `hi this is ${this.sName} i studies in class ${this.std} and i am from ${this.add}`
//     };

// };
// a=(new Student('roshan',6,'seoniMalwa'))
// console.log(a.intro())




                                           // promises

// let k=1;
// let pr= new Promise((a,b)=>{
//     if (k==1){
//         a('passed')
//     }
//     else {
//         b(2)
//     }
// }    let a = new Promise((True)=>{
//         sum=0;
//         for (i of arg){
//             sum+=i
//         }
//         True(sum)
//     })
//     return a.then(k=>console.log(k)).catch(()=>console.log('Erorr'))
// }
// )
// pr.then(kk=> console.log(`the value is ${kk}`)).catch(j=>console.log(j))




// let fun= (...arg)=>{
//     let a = new Promise((True)=>{
//         sum=0;
//         for (i of arg){
//             sum+=i
//         }
//         True(sum)
//     })
//     return a.then(k=>console.log(k)).catch(()=>console.log('Erorr'))
// }

// let b=fun(1,2,3,4,5)



                            // async and await






function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();


