function waitThree() {
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finish');
}

function clickHans() {
  console.log('clicked');
}

document.addEventListener('click', clickHans);

waitThree();
console.log('fini');
