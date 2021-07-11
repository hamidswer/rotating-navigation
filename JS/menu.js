const row1=document.querySelector(".block");
const menu=document.querySelector(".menu");
const link=document.querySelector(".link");
link.addEventListener("click", (e)=> {
        e.preventDefault();
        if (row1.classList.contains("rotate-content-open")) {
            row1.classList.remove("rotate-content-open");
            menu.classList.remove("rotate-menu-open");
            row1.classList.add("rotate-content-close");
            menu.classList.add("rotate-menu-close");
        }
        else {
            row1.classList.remove("rotate-content-close");
            menu.classList.remove("rotate-menu-close");
            row1.classList.add("rotate-content-open");
            menu.classList.add("rotate-menu-open");
        }
    }

)