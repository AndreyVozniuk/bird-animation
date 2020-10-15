//-------------------------------------part 1----------------------------------------------//
let movePathBird1_1 = MorphSVGPlugin.pathDataToBezier('#movePathBird1-1', {align:'#bird1-1'})
let movePathBird1_2 = MorphSVGPlugin.pathDataToBezier('#movePathBird1-2', {align:'#bird1-2'})
let movePathBird1_3 = MorphSVGPlugin.pathDataToBezier('#movePathBird1-3', {align:'#bird1-3'})

TweenMax.to('#bird1-1, #bird1-2, #bird1-3', {xPercent:-50, yPercent:-50})

const circle1Anim = new TimelineMax({paused: true})
.set('#drawLines1', {opacity:1})
.set('#drawLines1 >*:nth-child(1)', {strokeDasharray:344, strokeDashoffset:344})
.set('#drawLines1 >*:nth-child(2)', {strokeDasharray:948, strokeDashoffset:948})
.to('#birds1', 0.01, {opacity:1})

.to('#bird1-1 > * > *:nth-child(1)', 0.5, {transformOrigin:'100% 100%', rotation:8, yoyo:true, repeat:-1, y:6, ease:Power0.easeNone}, 'wings')
.to('#bird1-1 > * > *:nth-child(2)', 0.5, {transformOrigin:'100% 100%', rotation:-8, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird1-1', 6, {bezier:{values:movePathBird1_1, type:'cubic'}}, 'wings')
.to('#bird1-1 > *', 1.2, {y:-25, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=6')

.to('#bird1-2 > * >*:nth-child(1)', 0.3, {transformOrigin:'0% 100%', rotation:12, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird1-2', 4, {bezier:{values:movePathBird1_2, type:'cubic'}}, 'wings')
.to('#bird1-2 > *', 1.2, {x:-30, y:-10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=4')

.to('#bird1-3 > * > *:nth-child(1)', 0.5, {transformOrigin:'0% 0%', rotation:12, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird1-3 > * > *:nth-child(2)', 0.5, {transformOrigin:'5% 45%', rotation:-8, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird1-3', 5, {bezier:{values:movePathBird1_3, type:'cubic'}}, 'wings')
.to('#bird1-3 > *', 1.2, {y:-25, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=5')

.from('#splash1-1', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')
.from('#splash1-2', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.3')
.from('#splash1-3', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.5')

.from('#splash1-4', 1.2, {opacity:0, transformOrigin:'50% 50%', scale:0.5}, 'wings')

.to('#drawLines1 >*:nth-child(1)', 0.4, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings')
.to('#drawLines1 >*:nth-child(2)', 0.6, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings+=0.3')

.to('#txt1', 0.5, {opacity:1, ease:Power0.easeNone}, 'wings+=0.9')
//-------------------------------------part 2----------------------------------------------//
let movePathBird2_1 = MorphSVGPlugin.pathDataToBezier('#movePathBird2-1', {align:'#bird2-1'})
let movePathBird2_2 = MorphSVGPlugin.pathDataToBezier('#movePathBird2-2', {align:'#bird2-2'})
const circle2Anim = new TimelineMax({paused: true})
.set('#drawLines2 >*:nth-child(1)', {strokeDasharray:515, strokeDashoffset:515})
.set('#drawLines2 >*:nth-child(2)', {strokeDasharray:391, strokeDashoffset:391})
.to('#birds2', 0.01, {opacity:1})
.to('#drawLines2', 0.01, {opacity:1})

.to('#bird2-1 >* > *:nth-child(1)', 0.5, {transformOrigin:'40% 100%', rotation:-7, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird2-1 >* > *:nth-child(2)', 0.5, {transformOrigin:'15% 0%', rotation:7, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird2-1', 5, {bezier:{values:movePathBird2_1, type:'cubic'}}, 'wings')
.to('#bird2-1 > *', 1, {x:-20, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#bird2-2 > * >*:nth-child(1)', 0.5, {transformOrigin:'0% 55%', rotation:-8, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird2-2 > * >*:nth-child(2)', 0.5, {transformOrigin:'5% 100%', rotation:8, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird2-2', 5, {bezier:{values:movePathBird2_2, type:'cubic'}}, 'wings')
.to('#bird2-2 > *', 1, {y:-15, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#drawLines2 >*:nth-child(1)', 0.5, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings')
.to('#drawLines2 >*:nth-child(2)', 0.4, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings+=0.4')

.from('#splash2-1', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')
.from('#splash2-2', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.3')
.from('#splash2-3', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.5')
.from('#splash2-4', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.8')
.from('#splash2-6', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.9')


.from('#splash2-5', 1.2, {opacity:0, transformOrigin:'50% 50%', scale:0.5}, 'wings')

.to('#txt2', 0.4, {opacity:1, ease:Power0.easeNone}, 'wings+=1')
//-------------------------------------part 3----------------------------------------------//
let movePathBird3_1 = MorphSVGPlugin.pathDataToBezier('#movePathBird3-1', {align:'#bird3-1'})
let movePathBird3_2 = MorphSVGPlugin.pathDataToBezier('#movePathBird3-2', {align:'#bird3-2'})
const circle3Anim = new TimelineMax({paused: true})
.set('#drawLines3 >*:nth-child(1)', {strokeDasharray:1183, strokeDashoffset:1183})
.set('#drawLines3 >*:nth-child(2)', {strokeDasharray:666, strokeDashoffset:666})
.to('#drawLines3', 0.01, {opacity:1})
.to('#birds3', 0.01, {opacity:1})

.to('#bird3-1 > * > *:nth-child(1)', 0.5, {transformOrigin:'55% 100%', rotation:-10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird3-1 > * > *:nth-child(3)', 0.5, {transformOrigin:'25% 100%', rotation:11, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird3-1', 5, {bezier:{values:movePathBird3_1, type:'cubic'}}, 'wings')
.to('#bird3-1 > *', 1, {y:-20, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=5')

.to('#bird3-2 > * > *:nth-child(1)', 0.5, {transformOrigin:'100% 80%', rotation:-10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird3-2 > * > *:nth-child(2)', 0.5, {transformOrigin:'100% 40%', rotation:10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird3-2', 4, {bezier:{values:movePathBird3_2, type:'cubic'}}, 'wings')
.to('#bird3-2 > *', 1, {y:-20, x:10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=4')

.to('#drawLines3 >*:nth-child(1)', 0.7, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings')
.to('#drawLines3 >*:nth-child(2)', 0.5, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings+=0.6')

.from('#splash3-1', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')
.from('#splash3-2', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.3')
.from('#splash3-3', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.5')
.from('#splash3-4', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.8')

.from('#splash3-5', 1.2 , {opacity:0, transformOrigin:'50% 50%', scale:0.5}, 'wings')

.to('#txt3', 0.5, {opacity:1, ease:Power0.easeNone}, 'wings+=1.2')
//-------------------------------------part 4----------------------------------------------//
let movePathBird4_2 = MorphSVGPlugin.pathDataToBezier('#movePathBird4-1', {align:'#bird4-2'})
let movePathBird4_1 = MorphSVGPlugin.pathDataToBezier('#movePathBird4-2', {align:'#bird4-1'})
const circle4Anim = new TimelineMax({paused: true})
.set('#drawLines4 >*:nth-child(1)', {strokeDasharray:1397, strokeDashoffset:1397})
.set('#drawLines4 >*:nth-child(2)', {strokeDasharray:756, strokeDashoffset:756})
.to('#drawLines4', 0.01, {opacity:1})
.to('#birds4', 0.01, {opacity:1})

.to('#bird4-1 > * > *:nth-child(1)', 0.5, {transformOrigin:'100% 80%', rotation:-8, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird4-1 > * > *:nth-child(3)', 0.5, {transformOrigin:'100% 60%', rotation:9, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird4-1', 5, {bezier:{values:movePathBird4_1, type:'cubic'}}, 'wings')
.to('#bird4-1 > *', 1, {y:-5, x:10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#bird4-2 > * > *:nth-child(2)', 0.3, {transformOrigin:'50% 40%', rotation:11, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird4-2', 5, {bezier:{values:movePathBird4_2, type:'cubic'}}, 'wings')
.to('#bird4-2 > *', 1, {y:-15, x:-10, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#drawLines4 >*:nth-child(1)', 1, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings')
.to('#drawLines4 >*:nth-child(2)', 0.6, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings+=0.9')

.from('#splash4-1', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')
.from('#splash4-2', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.3')
.from('#splash4-3', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.5')
.from('#splash4-4', 1.2, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')

.to('#txt4', 0.5, {opacity:1, ease:Power0.easeNone}, 'wings+=1.5')
//-------------------------------------part 5----------------------------------------------//
let movePathBird5_1 = MorphSVGPlugin.pathDataToBezier('#movePathBird5-1', {align:'#bird5-1'})
let movePathBird5_2 = MorphSVGPlugin.pathDataToBezier('#movePathBird5-2', {align:'#bird5-2'})
const circle5Anim = new TimelineMax({paused: true})
.set('#drawLines5 >*:nth-child(1)', {strokeDasharray:1059, strokeDashoffset:1059})
.set('#drawLines5 >*:nth-child(2)', {strokeDasharray:500, strokeDashoffset:500})
.to('#drawLines5', 0.01, {opacity:1})
.to('#birds5', 0.01, {opacity:1})

.to('#bird5-1 > * > *:nth-child(1)', 0.5, {transformOrigin:'25% 50%', rotation:-12, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird5-1 > * > *:nth-child(2)', 0.5, {transformOrigin:'35% 35%', rotation:12, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird5-1', 5, {bezier:{values:movePathBird5_1, type:'cubic'}}, 'wings')
.to('#bird5-1 > *', 1, {y:-10, x:-15, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#bird5-2 > * > *:nth-child(1)', 0.3, {transformOrigin:'100% 65%', rotation:-12, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings')
.to('#bird5-2', 4, {bezier:{values:movePathBird5_2, type:'cubic'}}, 'wings')
.to('#bird5-2 > *', 1, {y:-15, x:5, yoyo:true, repeat:-1, ease:Power0.easeNone}, 'wings+=1.5')

.to('#drawLines5 >*:nth-child(1)', 1, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings')

.from('#splash5-1', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings')
.from('#splash5-2', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.3')
.from('#splash5-3', 0.5, {opacity:0, transformOrigin:'50% 50%', scale:0.5, ease: Power2.easeOut}, 'wings+=0.5')

.from('#splash5-4', 1.2, {opacity:0, transformOrigin:'50% 50%', scale:0.5}, 'wings')

.to('#drawLines5 >*:nth-child(2)', 0.4, {strokeDashoffset:0, ease:Power0.easeNone}, 'wings+=0.9')
.to('#txt5', 0.5, {opacity:1, ease:Power0.easeNone}, 'wings+=1.2')

function resetAnims() {
  circle1Anim.progress(0).paused(true)
  circle2Anim.progress(0).paused(true)
  circle3Anim.progress(0).paused(true)
  circle4Anim.progress(0).paused(true)
  circle5Anim.progress(0).paused(true)
}




