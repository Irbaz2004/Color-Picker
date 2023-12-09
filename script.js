
let col=document.getElementById("color");
let text=document.querySelector("#text");
let cap=document.querySelector("#cap");
let p=document.querySelector("p");
col.addEventListener("input",()=>{
    let co=col.value;
    text.value=co
    document.body.style.backgroundColor=co
    cap.style.color=co
    cap.style.boxShadow=` 12px 12px 20px black`
    p.style.color=co


setTimeout(() => {
    cap.value="Select the color and use it!"
}, 2000);

})