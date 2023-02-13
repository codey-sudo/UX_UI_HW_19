

/* BUBBLES FUNCTION */

const colors = [
    '#E5C028', 
    '#EA47AC', 
    
  ]
  
  const bubbles = Array.from(document.querySelectorAll('.bubble'));
  
  let randomColor = [];
  
  for (let i = 0; i < bubbles.length; i++) {
    randomColor.push(~~(Math.random()*colors.length));
  }
  
  bubbles.map((bubble, index) => {
    bubble.style.backgroundColor = colors[randomColor[index]];
  })







