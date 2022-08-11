window.onload = function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // target the divs with the results
    let liberal = document.getElementById("liberal");
    let moderate = document.getElementById("moderate");
    let conservative = document.getElementById("conservative");

    // gather the input value from each question
    const question1 = parseInt(document.querySelector("input#question1").value);
    const question2 = parseInt(document.querySelector("input#question2").value);
    const question3 = parseInt(document.querySelector("input#question3").value);
    // calculates the score
    const score = question1 + question2 + question3;
    // gather the input value from the color quiz
    const color1 = document.querySelector("input#color1").value;
    const color2 = document.querySelector("input#color2").value;
    const color3 = document.querySelector("input#color3").value;

    // if input is > 5 and red, CONSERVATIVE 
    if (score > 5 && score <= 10 && color1 ) {
      liberal.removeAttribute("class");
      // else, if input > 5 and purple, MODERATE.
    } else if (score === 5 && color2  ) {
      moderate.removeAttribute("class");
  } else if (score < 5 && color3 ){
     conservative.removeAttribute("class");
  } else {
    alert("There is something wrong with your selection!!!");
  }
  ;
});
}