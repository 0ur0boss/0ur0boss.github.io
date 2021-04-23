/*$(function() {
    var colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#000000","#1C8200","#987baa","#981890","#AA8971","#1987FC","#99081E"];

    setInterval(function() { 
        var bodybgarrayno = Math.floor(Math.random() * colors.length);
        var selectedcolor = colors[bodybgarrayno];
        $("body").css("background",selectedcolor);
    }, 3000);
})*/

function changeBG() {
    var selectedBGColor = document.getElementById("bgchoice").value;
    document.body.style.backgroundColor = selectedBGColor;

  }