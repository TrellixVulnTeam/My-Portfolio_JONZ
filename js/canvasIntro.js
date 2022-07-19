/* Standard Canvas Setup */

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const c = canvas.getContext("2d");

/* Event Listeners */

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

/* Main Star function */

class Star {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: Math.random() - 0.5 * 8,
      y: 3,
    };
    this.friction = 0.8;
    this.gravity = 1;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 20;
  }

  update() {
    this.draw();

    // When ball hits bottom of screen velocity is reversed
    if (this.y + this.radius + this.velocity.y > canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
      shatter(this.x, this.y);
      this.radius -= 3;
    } else {
      this.velocity.y += this.gravity;
    }

    //When ball hits side of screen
    if (
      this.x + this.radius + this.velocity.x > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x * this.friction;
      shatter(this.x, this.y);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

shatter = function (x, y) {
  for (let i = 0; i < 8; i++) {
    miniStars.push(new MiniStar(x, y, 2));
  }
  console.log(miniStars);
};

/* Main Star End */

/* Mini Star Function */

class MiniStar {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: randomIntFromRange(-5, 5),
      y: randomIntFromRange(-15, 15),
    };
    this.friction = 0.8;
    this.gravity = 0.1;
    this.ttl = 100;
    this.opacity = 1;
  }

  draw() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `"#E3EAEF" ${this.opacity})`;
    c.shadowColor = "#E3EAEF";
    c.shadowBlur = 20;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    if (this.y + this.radius + this.velocity.y > canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
    } else {
      this.velocity.y += this.gravity;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl -= 1;
    this.opacity -= 1 / this.ttl;
  }
}

/* Mini Star End */

/* Implementation Start */

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#040e1b");
backgroundGradient.addColorStop(1, "#0A192F");

let stars;
let miniStars;
let backgroundStars;
let ticker = 0;
let randomSpawnRate = 75;

function init() {
  stars = [];
  miniStars = [];
  backgroundStars = [];

  for (let i = 0; i < 150; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.width;
    const radius = Math.random() * 2.5;
    backgroundStars.push(new Star(x, y, radius, "white"));
  }
}

/* Implementation End */

/* Animation Loop Start */

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  backgroundStars.forEach((backgroundStar) => {
    backgroundStar.draw();
  });

  stars.forEach((star, index) => {
    star.update();
    if (star.radius == 0) {
      stars.splice(index, 1);
    }
  });

  miniStars.forEach((miniStar, index) => {
    miniStar.update();
    if (miniStar.ttl == 0) {
      miniStars.splice(index, 1);
    }
  });

  ticker++;
  if (ticker % randomSpawnRate == 0) {
    const radius = 12;
    const x = Math.max(radius, Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, 12, "#E3EAEF"));
    randomSpawnRate = randomIntFromRange(75, 200);
  }
}

/* Aimation Loop End */

/* Util Classes */

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/* End of Util Classes */

init();
animate();
