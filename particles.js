{
  "background": { "color": { "value": "#07040a" } },
  "fpsLimit": 60,
  "interactivity": {
    "events": {
      "onHover": { "enable": true, "mode": "repulse" },
      "onClick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 120, "duration": 0.4 },
      "push": { "quantity": 4 }
    }
  },
  "particles": {
    "number": { "value": 70, "density": { "enable": true, "area": 900 } },
    "color": { "value": ["#b388ff","#7c4dff","#ff66b3","#c084fc"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.85, "random": true, "anim": { "enable": true, "speed": 0.4, "opacity_min": 0.4 } },
    "size": { "value": { "min": 1, "max": 4 }, "random": true },
    "links": { "enable": true, "distance": 140, "color": "#7c4dff", "opacity": 0.12, "width": 1 },
    "move": { "enable": true, "speed": 0.6, "outModes": { "default": "bounce" } }
  },
  "detectRetina": true
}
