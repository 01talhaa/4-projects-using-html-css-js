// const elep1img = document.querySelector("#elep-1")

// elep1.addEventListener("mousemove", function(dest) {
    //     elep1img.style.left = dest.x + "px"
    //     elep1img.style.top = dest.y + "px"
    // })
    // elep1.addEventListener("mouseenter", function(dest) {
        //     elep1img.style.opacity = 1;
        // })
        // elep1.addEventListener("mouseleave", function(dest) {
            //     elep1img.style.opacity = 0;
            // })
            //this is for only one element.
            
            
            const elep = document.querySelectorAll("#elep");
            elep.forEach(function(val) {
                val.addEventListener("mouseenter", function(){
                    val.childNodes[3].style.opacity = 1;
                })
                val.addEventListener("mouseleave", function(){
                    val.childNodes[3].style.opacity = 0;
                })

                val.addEventListener("mousemove", function(dets){
                    val.childNodes[3].style.left = dets.x + "px";
                    val.childNodes[3].style.top = dets.y + "px";
                })
            })
