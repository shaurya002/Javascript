//q1-creating a btn and styling it and then adding as first element of body..
let btn = document.createElement("button");
btn.innerText="click me!!";
btn.style.backgroundColor="red";
btn.style.color="white";
let ele = document.querySelector("body");
ele.prepend(btn);
//q2-selecting p- putting div inside it and setting its class name to newclass 
// whose css has been already created. and adding it inside last of para tag
let para = document.querySelector("p");
let newEle = document.createElement("div");
newEle.innerText="abcd";
newEle.setAttribute("class","newClass");
para.append(newEle);