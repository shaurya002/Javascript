// let ele = document.querySelector("h2");
// console.dir(ele);

// ele.innerText = ele.innerText + " from Apna College!!"

// console.dir(ele);


let elements = document.querySelectorAll(".box");
let idx=1;
for(ele of elements){
    ele.innerText = `unique value ${idx}`
    idx++;
}

