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


function over(id, type) {

    if (document.getElementById(id, type)) {

        var objet = document.getElementById(id);
        

        if (type == 1) document.body.style.backgroundColor = "#3D538C";

        else if (type == 2) document.body.style.backgroundColor = "#408EC6";

        else if (type == 3) document.body.style.backgroundColor = "#D9A5B3";

        else if (type == 4) document.body.style.backgroundColor = "#CCA3E4";

        else if (type == 5) document.body.style.backgroundColor = "#FFD5B9";

     

    }

    if (document.getElementById(id, type)) {

        var objet = document.getElementById(id);
        var selecteTitle = document.getElementById("body");
        var selecteweb = document.getElementById("web");
        var selecte3D = document.getElementById("3D");
        var selectegame = document.getElementById("game");
        var selecteprod = document.getElementById("prod");
        

        if (type == 1) selecteTitle.style.fontFamily = 'Jost';

        else if (type == 2) selecteweb.style.fontFamily = 'Montserrat';

        else if (type == 3) selecte3D.style.fontFamily = 'Bebas Neue';

        else if (type == 4) selectegame.style.fontFamily = 'Orbitron';

        else if (type == 5) selecteprod.style.fontFamily = 'Lora';

        

    }

    if (document.getElementById(id, type)) {

        var objet = document.getElementById(id);
        var selecteall = document.getElementById("body");
        

        if (type == 1) selecteall.style.color = '#E0BC77';

        else if (type == 2) selecteall.style.color = '#7A2048';

        else if (type == 3) selecteall.style.color = '#1868AE';

        else if (type == 4) selecteall.style.color = '#EFF8E2';

        else if (type == 5) selecteall.style.color = '#6600A1';

        

    }

}