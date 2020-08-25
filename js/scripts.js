document.addEventListener('DOMContentLoaded', startScript)


function startScript(){
    console.log('Hello world'); 
    document.body.style.backgroundImage = 'url(img/bg.jpg)';

// Adding a new DIV and its styling 
    let newDiv = document.createElement('div');
    newDiv.id='title-wrapper';
    document.body.appendChild(newDiv);

    document.getElementById('title-wrapper').style = "top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase;";

// adding a new Heading and its styling
    let newHeading = document.createElement('H1');
    newHeading.id='title';
    newHeading.innerText = 'Work in progress...';
    document.getElementById('title-wrapper').appendChild(newHeading);

    document.getElementById('title').style = "width: fit-content; margin: auto; background: black; color: white;";

} 


