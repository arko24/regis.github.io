window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Registration Success! Kami Akan Mengirim Link ke Email Anda");
      location.href = './index.html';
    })
  });
});

function checkOnlyOne(b){

  var x = document.getElementsByClassName('daychecks');
  var i;
  
  for (i = 0; i < x.length; i++) {
    if(x[i].value != b) x[i].checked = false;
  }
  }