var app = new Vue({
  el: '#app',
  methods: {
    themeSwitch: function() {
      let main = document.querySelector('.main');
      main.classList.toggle('main-light');
      main.classList.toggle('main-dark');
    }
  }
})