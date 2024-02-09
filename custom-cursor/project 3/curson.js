const con = document.querySelector(".container");
const crsr = document.querySelector(".cursor");

con.addEventListener("mousemove", function(bla) {
    crsr.style.left = bla.x + "px"
    crsr.style.top = bla.y + "px"
})