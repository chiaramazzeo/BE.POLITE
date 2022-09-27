function openSlideMenu() {
  document.getElementById('menuTendina').style.transform = 'translate(0, 300px)';
}

//funzione di chiusura che permette di tornare alla situazione di partenza
var menuTendina = document.getElementById('menuTendina');

function closeSlideMenu() {
  document.getElementById('menuTendina').style.transform = 'translate(0, -300px)';
}

  window.onscroll = function (e) {
  if (pageYOffset > 330){
  var semicerchiostatico = document.getElementById('semicerchiostatico');
  semicerchiostatico.style.top = '820px';
  semicerchiostatico.style.left = '2%';
  semicerchiostatico.style.transform='rotate(100deg)';
  semicerchiostatico.style.width = '10%';

  var cerchiorosastatico = document.getElementById('cerchiorosastatico');
  cerchiorosastatico.style.top = '730px';
  cerchiorosastatico.style.right = '2%';
  cerchiorosastatico.style.transform='rotate(-120deg)';
  cerchiorosastatico.style.width = '7%';

  var cerchiorosa = document.getElementById('cerchiorosa');
  cerchiorosa.style.top = '1150px';
  cerchiorosa.style.left = '5%';
  cerchiorosa.style.transform='rotate(-100deg)';
  cerchiorosa.style.width = '9%';

  var triangoloverde = document.getElementById('triangoloverde');
  triangoloverde.style.top = '940px';
  triangoloverde.style.left = '9%';
  triangoloverde.style.transform='rotate(-180deg)';
  triangoloverde.style.width = '9%';

  var semicerchio = document.getElementById('semicerchio');
  semicerchio.style.top = '930px';
  semicerchio.style.right = '5%';
  semicerchio.style.transform='rotate(210deg)';
  semicerchio.style.width = '8%';

  var triangoloblu = document.getElementById('triangoloblu');
  triangoloblu.style.top = '1030px';
  triangoloblu.style.right = '10%';
  triangoloblu.style.transform='rotate(-140deg)';
  triangoloblu.style.width = '10%';

  var cerchioverde = document.getElementById('cerchioverde');
  cerchioverde.style.top = '1200px';
  cerchioverde.style.right = '3%';
  cerchioverde.style.transform='rotate(90deg)';
}

  }

  var cambio = false;

    function changeImage(a) {
      if(cambio){
        document.getElementById("chiara").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 01.53.35.jpeg"
        document.getElementById("gio").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 01.53.31.jpeg"
        document.getElementById("angela").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 02.07.03.jpeg"

      }else{
        document.getElementById("chiara").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 01.53.37.jpeg"
        document.getElementById("gio").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 01.53.33.jpeg"
        document.getElementById("angela").src = "5_IMMAGINI/5.Contatti/foto/photo_2022-07-20 02.07.10.jpeg"

      }

      cambio = !cambio;
    }
