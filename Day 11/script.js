
function handelclick(){
    document.querySelector("#heading").style.color = "red";
    document.getElementById("btn").textContent="color changed!"
}
const image = document.createElement("img");
image.setAttribute("src","https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=");
image.setAttribute("alt","sylus")
document.getElementById("div").append(image)