let arr1=[10,20,30,40,50]
console.log("Array1 : ", arr1)
let arr2=['Hello','World',1,2,3,true,false,[11,12,13],
           {id:1, Name:'Gokul', Course:'BTech'}]
console.log("Array2 : ", arr2)
for(let i=0;i<arr2.length;i++) {
    console.log(arr2[i],"",typeof(arr2[i]))
}
let arr3=[10,20,30,40,50]
console.log("Array3 : ", arr3)

console.log(arr2[3])

arr2[3]=100
console.log("Array2 after changing 4th element : ", arr2)

console.log("Array2 length : ", arr2.length)
console.log("Index of 'World' in Array2 : ", arr2.indexOf(100))
console.log("Index of 1000 in Array2 : ", arr2.indexOf(1000))

let arr4=[10,20,30,40,50]
console.log("Array4 : ", arr4)
arr4.push(200)
console.log("Array4 after adding new element : ", arr4)

arr4.unshift(5)
console.log("Array4 after adding new element at first position : ", arr4)

arr4.pop()
console.log("Array4 after removing last element : ", arr4)

arr4.shift()
console.log("Array4 after removing first element : ", arr4)

let arr5=arr4.slice(1,4)
console.log("Array5 after slicing Array4 : ", arr5)

arr4.splice(1,2)
console.log("Array4 after removing 2 elements from index 1 : ", arr4)
