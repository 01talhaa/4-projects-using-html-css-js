const btn = document.getElementById("add");
// const remove = document.getElementById("remove");
const text = document.getElementById("text");

let flag = 0;
btn.addEventListener("click", function() {

    if (flag === 0) {

        text.innerHTML = " Friends "
        text.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "#dadada"
        flag = 1;
    }
    else{

        text.innerHTML = " Removed "
        text.style.color = "red"
        btn.innerHTML = " Add Friend "
        btn.style.backgroundColor = "rgba(9, 220, 220, 0.475)"
        flag = 0;
    }
})

// remove.addEventListener("click", function() {

//     text.innerHTML = "Removed"
//     text.style.color = "red"

// })