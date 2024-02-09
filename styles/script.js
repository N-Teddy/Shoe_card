var li = document.querySelector(".nav_li");

function activeLi() {
    li.classList.add("focused_nav_li")
}

li.addEventListener("click", activeLi);