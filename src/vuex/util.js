export function forEach(obj = {}, cb) {
  Object.keys(obj).forEach((key)=>cb(obj[key],key))
}
// forEach({name:'小名',age:18},(val,key)=>{
//   console.log(val, key)
// })