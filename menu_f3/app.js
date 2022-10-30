
/* getting Elements */
const nav = document.querySelector("nav");
    toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open")
})

/*  Js code to make draggable nav */
function onDrag({movementY}) {  //movementY gest mouse vertical value
    const navStyle = window.getComputedStyle(nav), // getting  all css style of nav
        navTop = parseInt(navStyle.top),//getting nav top value & convert it number to number
        navHeight = parseInt(navStyle.height),// getting nav height value & convert it number to number
        windHeight = window.innerHeight; // getting window height

/*     nav.style.top = navtop > 0 ? '{navTop + movementY}px' : "1px";
    if(navTop > windheight -navHeight){
        nav.style.top = ' ${windHeight - navHeight}px';
    } */

    console.log(movementY);
}


nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag);
})

nav.addEventListener("mouseup", () =>{
    nav.removeEventListener("mousemove", onDrag);
})

nav.addEventListener("mouseleave", () =>{
    nav.addEventListener("mousemove", onDrag);
})