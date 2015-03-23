var form = document.getElementsByTagName("form")[0],
    wynik = Math.floor((Math.random() * 100) + 1),
    input = document.getElementsByTagName("input")[0],
    button = document.getElementsByTagName("button")[0],
    czas = document.getElementById("czas"),
    liczbaProb = 0;

  var timer = true;
  var i = 5;

  again = document.createElement("button");
  again.innerHTML = "Spróbuj jeszcze raz";
  
  function pokazCzas() {
      nIntervId = setInterval(function() {
          czas.innerHTML = "Liczba pozostałych sekund: " + i;
          i--;
          if(i<3 && i>0) {
            czas.style.color = "red";
          } else if (i<0) {
            clearInterval(nIntervId);
             p.innerText = " Koniec czasu. Przegrałeś!";
             czas.classList.add("crush");
             input.disabled = true;
             button.disabled = true;
             document.body.appendChild(again);
          }
      }, 1000);
  }

  again.addEventListener("click", function(){location.reload()});
   

form.addEventListener('submit', function(e) {
  var liczba = form.liczba.value; 
  e.preventDefault();
  p = document.createElement("p");
  document.body.appendChild(p);
  input.value = '';
  

  if(timer) {
      timer = false;
      pokazCzas();   
  } 

  if (liczbaProb<6) {

        if (liczba == wynik) {
         
          p.innerText = "Wygrałeś! Twoja liczba " + liczba + " jest poprawna.";
          input.disabled = true;    
          button.disabled = true;
        } 
        else if (liczba > wynik) {
          
          p.innerText = "Twoja liczba " + liczba + " jest za duża.";
        } else {
          
          p.innerText = "Twoja liczba " + liczba + " jest za mała.";
        }

        liczbaProb += 1;
 
    } else {
         p.innerText = "Przegrałeś! Przekroczyłeś 6 prób. Poprawny wynik to " + wynik;
         input.disabled = true;
         button.disabled = true;
    }


});

