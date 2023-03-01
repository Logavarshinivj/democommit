//WRITE TO FILE:

// const fs=require("fs")
// const quote="Being happy never goes out of style😅🥰"
// function createFile(n){
//     for(let i=1;i<=n;i++){
//         fs.writeFile(`./backup/text${i}.html`,quote,(err)=>{
//             console.log("completed writing")
//         })
//     }
   
// }

// createFile(process.argv[2])
// fs.writeFile("./quote.html",quote,(err)=>{
//     console.log("completed writing")
// })


const fs=require("fs")
const timestamp = Date.now();
 
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() +1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
const res1=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
console.log(res1)
console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);

function createFile1(n){
const timestamp = Date.now();
 
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() +1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const seconds = dateObject.getSeconds();
// current minutes
const minutes = dateObject.getMinutes();
const res1=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
const quo="Nothing is permanent"  
        fs.writeFile(`./test/text${year}-${month}-${date} ${hours}:${minutes}.html`,quo,(err)=>{
            console.log("completed writing")
        })
    }
   

createFile1(process.argv[2])

//READ FILE
// const fs=require("fs")
// fs.readFile("./quote.html","utf-8",(data,err)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(data)
//     }
// })


// function cf(n){
//     const res=n*(9/5)+32
//     console.log("celsius to faherenheit",res.toFixed(2))
// }
// cf(process.argv[2])