
let counter = 0;
for (let index = 0; index < 3; index++){
    setTimeout(() => {
        document.querySelector('section').style.backgroundColor = 'lightgreen';
        setTimeout(() => {
            document.querySelector('section').style.backgroundColor = 'red';
            setTimeout(() => {
                document.querySelector('section').style.backgroundColor = 'blue';
                setTimeout(() => {
                    document.querySelector('section').style.backgroundColor = 'gray';
                    setTimeout(() => {
                        document.querySelector('section').style.backgroundColor = 'lime';
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
    
    console.log(counter++);
}


// function paintSectionBackground (time, bgColor){
//     return new Promise ((resolve, reject) => {
//       if(bgColor){
//         setTimeout(()=>{
//           console.log(bgColor);
          
//           resolve();
//         },time)
//       }else{
//         reject('No such bgColor');
//       }
//     })
//   }
  
//   paintSectionBackground(2000, bgColor1)
//     .then(()=>paintSectionBackground(2000, bgColor2))
//     .then(()=>paintSectionBackground(2000, bgColor3))
//     .then(()=>paintSectionBackground(2000, bgColor4))
//     .catch((err)=>console.log(err))