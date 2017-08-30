let randomWeight = () => {
  return 80 + Math.floor(Math.random() * 300)
}
let randomColor = () => {
  return Math.random() > 0.6 ? 'green' : 'red'
}
let Apples = []
for (var i = 0; i < 50; i++) {
  Apples.push({
    id: i + 1,
    weight: randomWeight(),
    color:  randomColor(),
    isEaten: false,
    isRipening: false
  })
}
export default Apples
