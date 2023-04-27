let btn = document.querySelector('button');
let input;

var choice = document.getElementById("choice");

choice.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});

btn.addEventListener('click', ()=> {
    let form = document.getElementById("form");
    input = form.elements[0].value;

  
    if (isNaN(input) || input < 1 || input > 222) {

        document.getElementById("result").textContent = "Invalid input. Please enter a number between 1 and 222.";

    } else {

        async function getAdvice(input) {

            let api_url = "https://api.adviceslip.com/advice/" + input;
            const response = await fetch(api_url);
            const data = await response.json();

            if (data.message != null) {
                document.getElementById("result").textContent = "Try Again!!";
            } else {
                const advice = data.slip.advice;
                document.getElementById("result").textContent = " " + advice;
            }
        }
        getAdvice(input); 
    }
});



