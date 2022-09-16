const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//set overlay to dark default of DOM-Loading
overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';

/* 
Declaring the array of image filenames 
Declaring the alternative text for each image file
Looping through images
*/

// Declaring Array for image filenames
const imgSrc = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
const imgAlt = ['pic1','pic2','pic3','pic4','pic5'];

for (i = 0; i < imgSrc.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgSrc[i]);
    newImage.setAttribute('alt', imgAlt[i]);
    thumbBar.appendChild(newImage);
}

//Event Listener changes displayed image to user selected thumb bar image.
thumbBar.addEventListener('click', (e) => {
    const newDisplaySrc = e.target.getAttribute('src');
    const newDisplayAlt = e.target.getAttribute('alt');
    displayedImage.setAttribute('src', newDisplaySrc);
    displayedImage.setAttribute('alt', newDisplayAlt)
})


/* Wriring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {

    const btnSwitch = e.target.getAttribute('class');
    
    if (btnSwitch == 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    }
})