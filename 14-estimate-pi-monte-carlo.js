/*
Daily Coding Problem #14

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

function estimatePI() {
  const sampleSize = 3 * 100 * 1000
  const circle_radius = 0.5

  let innerSampleCount = 0

  for(let i = 0; i < sampleSize; i++) {
    let x = Math.random()
    let y = Math.random()

    let dx = 0.5 - x
    let dy = 0.5 - y

    if(Math.sqrt(dx * dx + dy * dy) < circle_radius) innerSampleCount++
  }

  return 4 * (innerSampleCount / sampleSize)
}

console.log(estimatePI())