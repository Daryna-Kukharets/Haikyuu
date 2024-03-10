document.addEventListener('DOMContentLoaded', function () {
  var soundImages = document.getElementsByClassName('voice');
  var audioPlayers = document.getElementsByClassName('audio');
  
  for (var i = 0; i < soundImages.length; i++) {
    soundImages[i].addEventListener('click', function () {
      var audioPlayer = this.nextElementSibling;
      if (audioPlayer.paused) {
        audioPlayer.play();
        this.classList.add('back-color');
      } else {
        audioPlayer.pause();
        this.classList.remove('back-color');
      }
    });
  }
});