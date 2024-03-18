const text = "Hi, I'm vv. Welcome to my Profile.";
let index = 0;
const speed = 120;
const pauseTime = 1600;

function type() {
  if (index < text.length) {
    document.querySelector('.typing-text').textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
  else {
    setTimeout(resetText, pauseTime);
  }

}
function resetText() {
  document.querySelector('.typing-text').textContent = "";
  index = 0;
  setTimeout(type, speed);
}

type();