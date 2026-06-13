const video = document.querySelector('video');
const play = document.querySelector('#play');
const pasue = document.querySelector('#pause');
const stops = document.querySelector('#stop');
const  CurrentTime = document.querySelector('.time');
const progress = document.querySelector('.go');
const pay = document.querySelector('.pay');

pasue.style.display = 'none';


play.addEventListener('click', () => {
    pasue.style.display = 'block';
    play.style.display = 'none';
    video.play();
});

pasue.addEventListener('click', () => {
    pasue.style.display = 'none';
    play.style.display = 'block';
    video.pause();
});

stops.addEventListener('click', () => {
    pause.style.display = 'none';
    play.style.display = 'block';
    video.pause();
    video.currentTime = 0;
});

video.addEventListener('timeupdate', (e) => {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    CurrentTime.innerHTML = Math.round(video.currentTime);
});

function setProgress(e){
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = video.duration;
    video.currentTime = (clickX / width) * duration;
}

pay.addEventListener('click', setProgress);




