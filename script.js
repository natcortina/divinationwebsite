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
    let form = document.getElementById("form")

    input = form.elements[0].value


    async function getAdvice(input) {

    let api_url = "https://api.adviceslip.com/advice/search/" + input
    
    
      const response = await fetch(api_url);
      const data = await response.json();

console.log(data)
      if (data.message != null) {


           document.getElementById("result").textContent = "Try Again!!"
      } 

      else {
 const advice = data.slips[0].advice
        document.getElementById("result").textContent = " " + advice 
     

      }
    }    
    getAdvice(input); 
})



