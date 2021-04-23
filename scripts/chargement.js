function background() {

    var selecteall = document.getElementById("body");


    document.body.style.backgroundColor = '#3D538C';
    selecteall.style.color = '#E0BC77';
  }
  
  if (document.readyState === 'complete') {
    background();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
        background();
    });
  }