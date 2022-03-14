var hoteles = {
  Bailio: {
    name: 'Hotel Bailio',
    location: 'Cuesta del Bailio',
    img: 'Images/bailio.jpeg',
  },

  Hesperia: {
    name: 'Hotel Hesperia',
    location: 'Avenida de Fray Albino',
    img: 'Images/hotel Hesperia.jpeg',
  },

  Center: {
    name: 'Hotel Center',
    location: 'Avenida de la Libertad',
    img: 'Images/Hotel Center.jpeg',
  },
};

var hotelselection = prompt(
  '¿Qué hotel quiere elegir, Center, Bailio, o Hesperia?'
);

document.getElementById('hotel-name').innerHTML = hoteles[hotelselection].name;
document.getElementById('hotel-location').innerHTML =
  hoteles[hotelselection].location;
document.getElementById('hotel-image').src = hoteles[hotelselection].img;

var estrellas = {
  1: '<span>☆</span>',
  2: '<span>☆</span><span>☆</span>',
  3: '<span>☆</span><span>☆</span><span>☆</span>',
  4: '<span>☆</span><span>☆</span><span>☆</span><span>☆</span>',
  5: '<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>',
};

var puntuacion = prompt('¿Cuántas estrellas le da al hotel?');

var anonimo = confirm('¿quiere que la reseña sea anónima?');

document.getElementById('review').checked = anonimo;

document.getElementById('hotel-score').innerHTML =
  'Puntuación: ' + estrellas[puntuacion];
