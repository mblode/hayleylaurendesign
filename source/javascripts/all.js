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
    clientId: '6fbf04df1d4442a7938bc86c3c1caf67',
    accessToken: '432781510.1677ed0.7433817a03ec44a48e42fe48f7886f69',
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
