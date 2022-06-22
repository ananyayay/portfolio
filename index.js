const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');
// const on = document.querySelector('#on');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color= '#08fdd8';
        myAudio.play();
    }
    if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color= '#108072';
        myAudio.pause();
    }
}

// hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee


keyboard= document.getElementById("keyboard");
        
window.addEventListener('scroll', function()
{
    var value = window.scrollY;
    // bg.style.top = value *0.5 +'px';
    // moon.style.top = -value *0.6 +'px';
    keyboard.style.top = value *0.15 +'px';
    text.style.top = value *1.5 +'px';

})

const click= document.querySelector('.click p');
click.innerHTML= click.innerText.split("").map(
    (char, i)=>
    `<span style="transform:rotate(${i*5}deg)">${char}</span>`
).join("")


function showprojects(){
    document.getElementById("p1").classList.toggle("active");

}