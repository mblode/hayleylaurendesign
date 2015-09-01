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
    percentPosition: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    rightToLeft: false,
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
    limit: 8,
    sortBy: 'most-recent',
    accessToken: '432781510.467ede5.65d936ff0d334bd5b4ca81bf5f029fe5',
    resolution: 'standard_resolution',
    template: '<div class="col-sm-6 col-md-4 col-lg-3"><a href="{{link}}" alt=Instagram" class="thumbnail" target="_blank"><div class="caption"><h2 class="caption__likes">&hearts; {{likes}}</h2></div><img src="{{image}}" class="img-responsive"></a></div>'
  });

  loadButton.addEventListener('click', function() {
    feed.next();
  });

  feed.run();
});
