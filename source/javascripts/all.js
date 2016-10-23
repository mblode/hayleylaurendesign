//= require jquery
//= require bootstrap-sprockets
//= require '_instafeed.js'
//= require '_flickity.js'

'use strict';

$(document).ready(function() {

  $('.gallery').flickity({
    accessibility: true,
    autoPlay: false,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: true,
    draggable: true,
    freeScroll: false,
    friction: 0.2,
    initialIndex: 0,
    imagesLoaded: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: true
  });

  var loadButton = document.getElementById('load-more');
  var feed = new Instafeed({
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
    },
    get: 'user',
    userId: 432781510,
    clientId: '64378ab0d9f541acba98c0b000e81763',
    accessToken: '3571264559.ba4c844.be06ba9738bd4ee58bc6c2620d22af2b',
    limit: 8,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template: '<div class="insta"><a href="{{link}}" alt=Instagram" class="" target="_blank"><div class="caption"></div><img src="{{image}}" class="img-responsive"></a></div>'
  });

  loadButton.addEventListener('click', function() {
    feed.next();
  });

  feed.run();
});
