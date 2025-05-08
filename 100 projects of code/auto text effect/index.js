const containerE1 = document.querySelector(".container");

const careers = ["Learning Support Assistant", "artist", "web developer", "freelancer"];

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerE1.innerHTML = `
    <h1>i am a ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `; 
   
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    // setTimeout(() => {
    //     setTimeout(updateText, 400);
    setTimeout(updateText, 400);
}

