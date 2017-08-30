function totalWeight (arr) {
  return arr.reduce((sum, current) => {
    return sum + current.weight
  }, 0)
}
export {
  totalWeight
}
