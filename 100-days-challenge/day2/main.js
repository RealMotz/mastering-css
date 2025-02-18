let menu = document.getElementById("menu");
let animateMenu = () => {
    let firstTime = false;
    let lines = document.getElementsByClassName("line");
    let removeClass = (className) => {
        for(let line of lines) {
            if(line.classList.contains(className)) {
                line.classList.remove(className);
            } else {
                line.classList.add(className);
            }
        }
    }
    return () => {
        if(!firstTime) {
            removeClass("no-animation");
            firstTime = true;
        }
        removeClass("active");
    }
}

menu.addEventListener("click", animateMenu());