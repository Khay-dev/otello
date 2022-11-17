const button = document.querySelector(".button-a");
const overlay = document.querySelector("body > section.section-1 > div.form");
const remove = document.querySelector(".formhero-1");




button.addEventListener("click", () => {
    overlay.style.display = "block";
});
overlay.addEventListener("click", e => {
    if (e.target !== e.currentTarget) {
        overlay.style.width = "100vw"
    } else {
        overlay.style.display = "none";
    }
});
remove.addEventListener("click", () => {
    overlay.style.display = "none";
});



const submit = document.querySelector(".form-form")
const info = document.querySelector(".information")
const pattern = /^[a-zA-Z]{4,}$/;
const pattern2 = /^.{4,}$/;
const pattern3 = /^[A-Za-z0-9]{4,}$/;
submit.addEventListener("submit", e => {
    e.preventDefault()
    const name4 = submit.dob.value
    const name5 = submit.class.value
    const name = [submit.fname.value, submit.sname.value, submit.school.value, submit.gender.value]
    name.forEach(name => {
        if (pattern.test(name)) {
            info.textContent = "valid"
        } else {
            info.textContent = "not valid"
        }
    })
    if (pattern2.test(name4)) {
        info.textContent = "valid"
    } else {
        info.textContent = "not valid"
    }
    if (pattern3.test(name5)) {
        info.textContent = "valid"
    } else {
        info.textContent = "not valid"
    }
});
const group = [submit.fname, submit.sname, submit.school, submit.gender]
const name4 = submit.dob
const name5 = submit.class


group.forEach(name => {
    name.addEventListener("keyup", e => {
        console.log('Typing in', name, e)
        if (pattern.test(e.target.value)) {
            name.setAttribute("class", "success")
        } else {
            name.setAttribute("class", "error")
        }
    })
})

name4.addEventListener("keyup", e => {
    if (pattern2.test(e.target.value)) {
        name4.setAttribute("class", "success")
    } else {
        name4.setAttribute("class", "error")
    }
})
name5.addEventListener("keyup", e => {
    if (pattern3.test(e.target.value)) {
        name5.setAttribute("class", "success")
    } else {
        name5.setAttribute("class", "error")
    }
})







const dropDownH = document.querySelector('.nav-menu')
const spann = document.querySelector('.nav-svg')
const bars = document.querySelectorAll('.bar')



let bar2 = Array.from(bars)
let toggleHamburger = () => {
    bar2.forEach(bar => bar.classList.add('x'))
}
let removeHamburger = () => {
    bar2.forEach(bar => bar.classList.remove("x"))
}

spann.addEventListener('click', () => {
    if (dropDownH.style.display === "none") {
        toggleHamburger()
        dropDownH.style.display = "block";
    } else {
        removeHamburger()
        dropDownH.style.display = "none";
    }

});




















