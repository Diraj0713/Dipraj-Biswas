const input=document.querySelector('.input')
const checkBtn=document.querySelector('.check')
const restartBtn=document.querySelector('.restart')
const message=document.querySelector('.message')
let secret=Math.trunc(Math.random()*100)+1
let playing=true
function show(msg){message.textContent=msg}
checkBtn.addEventListener('click',()=>{
  if(!playing)return
  const guess=Number(input.value)
  if(!guess||guess<1||guess>100){show('Enter 1‑100');return}
  if(guess===secret){show('🎉 Correct!');playing=false;restartBtn.style.display='block';return}
  show(guess>secret?'📈 Too high':'📉 Too low')
})
restartBtn.addEventListener('click',()=>{
  secret=Math.trunc(Math.random()*100)+1
  playing=true
  show('')
  input.value=''
  restartBtn.style.display='none'
})
