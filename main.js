const element = document.getElementById("but");
async function addnum(num1, num2) {
    const response = await fetch('/add', {
        methods : 'POST',
        header : {'Content-type' : 'application/json'},
        body : JSON.stringify({num1, num2})
    });
    
    const num = await response.json();
    element.innerHTML = num.result;
    console.log(num.result);
}

function Tap() {
    addnum(5, 8);
}
