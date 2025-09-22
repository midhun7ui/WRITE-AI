const heading = "WRITE SMARTER WITH AI";
let idx = 0;

function typeHeading() {
  const el = document.getElementById('main-heading');
  el.textContent = heading.slice(0, idx);
  if (idx < heading.length) {
    idx++;
    setTimeout(typeHeading, 90);
  }
}

window.onload = typeHeading;

function tryNow() {
  alert("Signup functionality will go here!");
}