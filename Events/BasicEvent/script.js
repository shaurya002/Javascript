let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("signup button was clicked");
});

const handler2 = () => {
    console.log("Button was clicked and event is being handled by handler02");
}
btn1.addEventListener("click", handler2);


let div = document.querySelector("#newDiv1");

div.addEventListener("mouseover", () =>{
    console.log("Mouse was here");
});
