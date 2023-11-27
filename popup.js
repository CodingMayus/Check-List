

// function Reveal(){
//     const textboxe = document.createElement("input");
//     const submitter = document.createElement("button");
//     submitter.innerText = "Submit";
//     textboxe.innerText = "Type Shit";
//     document.body.appendChild(textboxe);
//     document.body.appendChild(submitter);
// }
var display = document.getElementById("display");

// const SaveThings= async () => {
// const {thingtodo} =  await chrome.storage.sync.get("thingtodo"); 
// var submit = document.getElementById("button");
// // var update = document.getElementById("update");
// document.getElementById("button").addEventListener("click",()=>{
//     if(info.value.length===0){
//         alert("Please input something.");
//         return;
//     }else{
// thingtodo.push({element: info.value}); 
// // alert(info.value);

// alert("SUCCESSFULLY ADDED "+info.value);

// info.value = "";
// }

// });

// chrome.storage.sync.set({thingtodo});
// // update.onclick = Reveal;
// // chrome.storage.sync.get("thingtodo",function(data){
// //     //this data is an array
// //     for(var i=0;i<data.length;i++){
// //         console.log(arr[i]);
// //     }
// // })
// }
 var info = document.getElementById("thingtodo");

 document.getElementById("button").addEventListener("click",()=>{
        if(info.value.length===0){
            alert("Please input something.");
            return;
        }else{
            chrome.storage.sync.get("thingtodo",function(data){
                //array
                const  ele = data.thingtodo;
                ele.push(info.value);
                info.value = "";
            chrome.storage.sync.set({"thingtodo":ele});
//location.reload();
            alert("SUCCESSFULLY ADDED RELOAD TO SEE"+info.value);
                })
    // alert(info.value);
    
    
    }
    
    });


