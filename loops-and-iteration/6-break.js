let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 4 && x === 4) {
      break labelCancelLoops;
    } else if (z === 4) {
      break;
    }
  }
}

// Outer loops: 0
// Inner loops: 1
// Inner loops: 2
// Inner loops: 3   // break
// Outer loops: 1
// Inner loops: 1
// Inner loops: 2
// Inner loops: 3   // break
// Outer loops: 2
// Inner loops: 1
// Inner loops: 2
// Inner loops: 3   // break
// Outer loops: 3
// Inner loops: 1
// Inner loops: 2
// Inner loops: 3   // break labelCancelLoops