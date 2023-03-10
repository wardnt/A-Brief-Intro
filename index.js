function openLanguage(evt, languageName) {

    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(languageName).style.display = "block";
    evt.currentTarget.className += " active";
    }
    var acc = document.getElementsByClassName("accordion");
    var i;
    document.getElementById("defaultOpen").click();
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
    
        this.classList.toggle("active");
    
        
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
