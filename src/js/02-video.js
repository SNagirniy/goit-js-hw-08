import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const LAST_SAVED_TIME = "videoplayer-current-time";


player.on('timeupdate', throttle(saveCurrentTime, 1000));


function saveCurrentTime() {
    let currentTime;
    player.getCurrentTime().then(function(seconds) {
        currentTime = seconds;
        localStorage.setItem(LAST_SAVED_TIME, currentTime)
}).catch(function(error) {
    console.log('an error occurred')
});
};


function getSavedTime() {
    
    return localStorage.getItem(LAST_SAVED_TIME)
};

player.setCurrentTime(getSavedTime()).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration')
            break;

        default:
            console.log('some other error occurred')
            break;
    }
});





