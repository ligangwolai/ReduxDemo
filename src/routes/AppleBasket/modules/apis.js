import Apples from './mock.js'
let getApples = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Apples)
    }, 1000)
  })
}
export {
  getApples
}
