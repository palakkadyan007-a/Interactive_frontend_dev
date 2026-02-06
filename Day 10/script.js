const head = document.getElementById('heading');

head.innerHTML = "<i>New Heading</i>"
console.log(head.innerHTML); // It will Show only the visible text

console.log(head.textContent); // It will Show all the text including hidden text and HTML tags

console.log(head.innerText); // It will Show only the visible text without any HTML tags

// don mofification
const newPhara = document.createElement('p');
newPhara.textContent = "This is a dynamically created paragraph"; 
console.log(newPhara.innerHTML); 

const container = document.getElementById('container');
container.appendChild(newPhara);

const para = doccument.querrySelector("#container p").remove();

handleClick = () => {
    // console.log("Button Clicked");
    document.querySelector('p').textContent = "Btn Clicked";
}