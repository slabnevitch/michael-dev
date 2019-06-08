function initMap() {
  michBigMap = new google.maps.Map(document.getElementById('mich-map-big'), {
    center: {lat: 59.917632, lng: 30.526231},
    zoom: 10,
    disableDefaultUI: true, //отмена всех дефолтных элементов управления

     // добавление необходимых элементов управления вручную
     zoomControl: true,
     mapTypeControl: true,
     fullscreenControl: true
     // styles: gmapStyles
      // gestureHandling: 'none' //запрет на прокручивание карты
    });

  // michSmMap = new google.maps.Map(document.getElementById('mich-map-sm'), {
  //   center: {lat: 59.917632, lng: 30.526231},
  //   zoom: 10,
  //   disableDefaultUI: true, //отмена всех дефолтных элементов управления

  //    // добавление необходимых элементов управления вручную
  //    zoomControl: true,
  //    mapTypeControl: true,
  //    fullscreenControl: true
  //    // styles: gmapStyles
  //     // gestureHandling: 'none' //запрет на прокручивание карты
  //   });

}