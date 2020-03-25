function zeros ( n ) {
  let count5 = 0
  let count25 = 0
  let count125 = 0

  for (let i = 5; n / i >= 1; i *= 5)
    count5 += n / i
    
  for (let i = 25; n / i >= 1; i *= 25)
    count25 += n / i
    
  for (let i = 125; n / i >= 1; i *= 125)
    count125 += n / i

  return Math.floor(count5) + Math.floor(count25) + Math.floor(count125)
}
