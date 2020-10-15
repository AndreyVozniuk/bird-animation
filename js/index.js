function toStartConditions() {
  for (let i = 1; i < 6; i++) {
    TweenMax.set(`#mainCnt${i} > *`, { opacity:0 })
    TweenMax.to(`#circle${i}`, 1, { transformOrigin:'50% 50%', scale:0.95, ease:Power0.easeNone, yoyo:true, repeat:-1 })
  }
  TweenMax.set('#birdSVG', { opacity:1 })
}

function clickCircles() {
  document.getElementById('circle1Hover').addEventListener('click', () => {
    circle1Anim.paused(false)
  })

  document.getElementById('circle2Hover').addEventListener('click', () => {
    circle2Anim.paused(false)
  })

  document.getElementById('circle3Hover').addEventListener('click', () => {
    circle3Anim.paused(false)
  })

  document.getElementById('circle4Hover').addEventListener('click', () => {
    circle4Anim.paused(false)
  })

  document.getElementById('circle5Hover').addEventListener('click', () => {
    circle5Anim.paused(false)
  })
}

function hoverCircles() {
  document.getElementById('circle1Hover').addEventListener('mouseenter', () => {
    circle1Anim.paused(false)
  })

  document.getElementById('circle2Hover').addEventListener('mouseenter', () => {
    circle2Anim.paused(false)
  })

  document.getElementById('circle3Hover').addEventListener('mouseenter', () => {
    circle3Anim.paused(false)
  })

  document.getElementById('circle4Hover').addEventListener('mouseenter', () => {
    circle4Anim.paused(false)
  })

  document.getElementById('circle5Hover').addEventListener('mouseenter', () => {
    circle5Anim.paused(false)
  })
}
