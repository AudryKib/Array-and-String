class ArrayString {

    aboveBelow = (arr, comp)=>{

       let above = 0
       let below = 0
   
       arr = arr.sort()
       for(let i = 0; i< arr.length; i++ ){
           if(arr[i] > comp)
               above++; 
               else 
               below++;  
       } 
   
           return { "above": above, "below": below}
       
   } 


    stringRotation = ( str, val) => {
       str = str.split('')
   
       const splice = str.splice(str.length - val)
   
       const rotated = [...splice, ...str]
   
       const strRotated = rotated.join('')
   
        return strRotated
   }
   

}


let ar = [1, 5, 7, 9, 3, 7, 1, 10, 15, 20, 30, 45, 67, 2, 1000, 18444,6,  -1]
let c = 6

const arrSt = new ArrayString()

const aboveBellow = arrSt.aboveBelow(ar, c)

const stringRotate = arrSt.stringRotation("MyString", 2)

console.log( 'aboveBelow result',aboveBellow)
console.log(`String Rotation ${stringRotate}`)
