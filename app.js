let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let showres=document.querySelector(".winner");
let con=document.querySelector(".container");
let heading=document.querySelector("h1");
let turnO=true;

let winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
resetBtn.addEventListener("click",()=>{
    let turnO=true;
    enable();
    for(let box of boxes)
    {
        box.innerText="";
    }
    showres.innerText="Winner is:";
});

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
});
});

const checkWinner=()=>{
    for(let pat of winPatterns){
     let pos1 = boxes[pat[0]].innerText;
     let pos2 = boxes[pat[1]].innerText;
     let pos3 = boxes[pat[2]].innerText;
     if(pos1!="" && pos2!="" && pos3!="")
     {
        if(pos1===pos2 && pos2===pos3){
           showres.innerText=showres.innerText+" "+pos1;
           for(let box of boxes){
            box.disabled=true;  //after winning no box can change
           }
        }
     }
    }
};
let body=document.querySelector("body");
let dark=document.querySelector(".theme");
dark.addEventListener("click",()=>{
    if(dark.innerText==="Dark"){
       body.style.backgroundColor="#212529";
       showres.style.color="white"
       dark.innerText="Light";
       dark.style.backgroundColor="white";
       dark.style.color="black";
    con.style.borderColor="white";
    heading.style.color="#caf0f8";
    for(let box of boxes){
    box.style.backgroundColor="#00a8e8";}
}
       else{
        body.style.backgroundColor="#caf0f8";
        dark.innerText="Dark";
        dark.style.backgroundColor="black";
        dark.style.color="white";
        heading.style.color="#231942";
        con.style.borderColor="black";
        showres.style.color="black";
        for(let box of boxes){
            box.style.backgroundColor="#273469";}
       }
});
