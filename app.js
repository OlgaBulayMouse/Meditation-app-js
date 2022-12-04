const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    const sounds = document.querySelectorAll('sound-picker button');
    const timeDisplay = document.querySelector('.time-display');
    const outlineLength = outline.getTotalLength();

    let fakeDuration = 600;
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    const checkPlaying = song => {
        if(song.paused) {
            song.play();
            video.play();
            play.src='./svg/pause.png';
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.png';
        };
    };

    // song.ontimeupdate = () => {
    //     let currentTime = song.currentTime;
    //     let elapsed = fakeDuration - currentTime;
    //     let seconds = Math.floor(elapsed % 60);
    //     let minutes = Math.floor(elapsed / 60);

    //     let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    //     outline.style.strokeDashoffset = progress;
    // };

};

app();