document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: [``,``, `Hello, world!`, 'Who am I?', 'I am: creative', 
    'I am: useful', 'I am: tenacious', 'I am: thoughtful',
    'I am: musical', 'I am: curious', 'I am: attentive', 'I am: a minimalist', 
    `I am:`,`I am:`,`I am:`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,
    `PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,
    `PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,
    `PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,
    `PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,
    `PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`,`PARIS TAYLOR`],
    typeSpeed: 80,
    backSpeed: 40,
    startDelay: 500,
    smartBackspace: true,
    /*cursorChar: '_',*/
    loop: false,
    fadeOut: false,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });

  document.querySelector('.toggle').addEventListener('click', function() {
    typed.toggle();
  });
  document.querySelector('.stop').addEventListener('click', function() {
    typed.stop();
  });
  document.querySelector('.start').addEventListener('click', function() {
    typed.start();
  });
  document.querySelector('.reset').addEventListener('click', function() {
    typed.reset();
  });
  document.querySelector('.destroy').addEventListener('click', function() {
    typed.destroy();
  });
  document.querySelector('.loop').addEventListener('click', function() {
    toggleLoop(typed);
  });
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}
/* 
//Floating button 
import {MDCRipple} from '@material/ripple';

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

 */
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}