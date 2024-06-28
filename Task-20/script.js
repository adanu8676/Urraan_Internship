const root = document.querySelector("#app");
let { innerHeight, innerWidth } = window;

if (innerHeight < 300) innerHeight = 350;
if (innerWidth < 300) innerWidth = 750;

class Bubble {
  constructor() {
    this.createBubble();
    this.color = this.randomColor();
    this.posX = this.randomNumber(innerWidth - 20, 20);
    this.size = this.randomNumber(60, 20);

    Object.assign(this.bubble.style, {
      left: `${this.posX}px`,
      height: `${this.size}px`,
      width: `${this.size}px`,
      backgroundColor: this.color
    });

    this.bubble.addEventListener("mouseover", this.pauseBubble.bind(this));
    this.bubble.addEventListener("mouseout", this.resumeBubble.bind(this));
    this.bubble.addEventListener("click", this.burstBubble.bind(this));
  }

  createBubble() {
    this.bubble = document.createElement("span");
    this.bubble.classList.add("bubble");
    root.append(this.bubble);
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    return `rgba(${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)}, ${this.randomNumber(0, 255)}, ${Math.random().toFixed(1)})`;
  }

  pauseBubble(event) {
    event.target.classList.add("bubble--paused");
  }

  resumeBubble(event) {
    event.target.classList.remove("bubble--paused");
  }

  burstBubble(event) {
    const bubble = event.target;
    const { transform } = window.getComputedStyle(bubble);
    const matrix = new WebKitCSSMatrix(transform);

    bubble.style.transform = `translate(${matrix.m41}px, ${matrix.m42}px)`;
    bubble.classList.add("bubble--paused", "bubble--bust");

    setTimeout(() => bubble.remove(), 1000);
  }
}

setInterval(() => requestAnimationFrame(() => new Bubble()), 300);
