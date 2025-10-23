import './merge.css'

function toggleOpenClose(param) {
    const element = document.getElementById(param);
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        element.classList.add("active");
    }
}