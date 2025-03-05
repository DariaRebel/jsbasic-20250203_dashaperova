function toggleText() {
  let elem = document.getElementById('text');
  document.querySelector('.toggle-text-button').onclick = function() {
    if (elem.hidden == null) {
      elem.hidden = true;
    } else elem.hidden = !elem.hidden;
  } 
}
