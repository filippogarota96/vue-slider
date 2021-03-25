var app = new Vue ({
  el: '#app',
  data: {
    images: [
    'img/barcellona.jpg',
    'img/urbino.jpg',
    'img/edimburgo.jpg',
    'img/bruges.jpg',
  ],
  imgIndex : 0,
  },
  methods: {
    nextImage: function (){
      this.imgIndex ++;
      if (this.imgIndex == this.images.length) {
          this.imgIndex = 0;
      }
    },
    prevImage: function (){
      this.imgIndex --
      if (this.imgIndex < 0 ) {
          this.imgIndex = this.images.length - 1;
      }
    },
  }
});
