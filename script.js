function firstWord(s) {
  // your code here
  if (s.length === 0) {
    return '';
  }
  s = s.trim(); // Reassign the trimmed value back to s
  let arr = s.split(' ');
  return arr[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
