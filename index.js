let t1= new Date().getTime();

async function func2(r)
{

    let temp=0;
     for(let i=0;i<10000000;i++)
     {

         temp+= i*i;
         if(i%2500000==0)
            console.log("for async r", r, new Date().getTime()- t1 )
     }
    return Promise;
}


var f=10;
//let r=0;

for(let r=0;r<4;r++)
{
   //t1= new Date().getTime();

   func2(r).then(()=>{let t3 = new Date().getTime(); console.log("async time",t3-t1,r)})
}
//t1= new Date().getTime();

let temp=0;
// for(let i=0;i<10000000;i++)
// {

//     temp+= i*i;
//     if(i%2500000==0)
//       console.log("for sync", new Date().getTime()- t1 )
// }
// let t2= new Date().getTime();
// console.log("sync time", t2- t1);


