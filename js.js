
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 56;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
        currentSection = section.id;
      }
    });

    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });

  


var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname)
    {
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // var sidemenu = document.getElementById("sidemenu");

    // function openmenu()
    // {
    //     sidemenu.style.right = "0";
    // }
    
    // function closemenu()
    // {
    //     sidemenu.style.right = "-150px";
    // }



    const developers = [
        "Frontend Developer",
        "Backend Developer",
        "FullStack Developer"
      ];
  
      let currentIndex = 0;
  
      function typeDeveloper() {
        const developerTypeElement = document.getElementById('developerType');
        const currentDeveloper = developers[currentIndex];
        const currentText = developerTypeElement.innerHTML;
        const currentLength = currentText.length;
  
        if (currentLength < currentDeveloper.length) {
          developerTypeElement.innerHTML = currentDeveloper.slice(0, currentLength + 1);
          setTimeout(typeDeveloper, 100); // Adjust typing speed here (in milliseconds)
        } else {
          setTimeout(() => {
            backspaceDeveloper(developerTypeElement, currentDeveloper);
          }, 1000); // Wait for 1 second before backspacing
        }
      }
  
      function backspaceDeveloper(element, text) {
        const currentText = element.innerHTML;
        const currentLength = currentText.length;
  
        if (currentLength > 0) {
          element.innerHTML = text.slice(0, currentLength - 1);
          setTimeout(() => backspaceDeveloper(element, text), 50); // Adjust backspacing speed here (in milliseconds)
        } else {
          setTimeout(() => {
            currentIndex++;
            if (currentIndex < developers.length) {
              element.innerHTML = '';
              typeDeveloper();
            } else {
              // All developers have been typed and backspaced, you can hide or do something else here
              currentIndex = 0;
              element.innerHTML = '';
              typeDeveloper();
            }
          }, 500); // Wait for 0.5 seconds before moving to the next developer
        }
      }
  
      // Start typing when the page loads
      typeDeveloper();





    
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.alpha = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.01; // Shrink the particle size
        this.alpha -= 0.001; // Reduce the particle's opacity over time

        // Ensure the particle size remains positive
        this.size = Math.max(0, this.size);
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1; // Reset global alpha for other elements
    }
}

const particles = [];

document.addEventListener('mousemove', function(event) {
    const particleCount = 3; // Number of particles spawned on each mouse move

    for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1; // Random size between 1 and 4
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random HSL color
        const speedX = (Math.random() - 0.5) * 2; // Random X speed between -1 and 1
        const speedY = (Math.random() - 0.5) * 2; // Random Y speed between -1 and 1

        particles.push(new Particle(event.x, event.y, size, color, speedX, speedY));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    // Remove faded-out particles
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0 || particle.size <= 0) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();


