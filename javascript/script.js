
document.querySelector("#links").addEventListener("click", function () {
    if (document.querySelector(".dropdown").style.display === "block") {
        document.querySelector(".dropdown").style.display = "none"
    } else {
        document.querySelector(".dropdown").style.display = "block"
    }
})