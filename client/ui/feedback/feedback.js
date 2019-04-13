import './feedback.html';
import './feedback.css';

var formAnimator = {
  
    init: function() {
      this.form = document.querySelector('form');
        this.button = document.querySelector('button');
      this.path = document.querySelector('path');
      this.createPath();
      this.form.addEventListener('submit', this.animate, false);
      window.addEventListener('resize', this.createPath);
    },
    
    createPath: function() {
      console.log('creating path');
      var that = formAnimator;
        that.dPath = 'M' + (that.button.offsetLeft + that.button.offsetWidth) + ' ' + that.form.offsetHeight + ' H' + that.form.offsetWidth + ' V0 H0 V' + that.form.offsetHeight + ' H' + that.button.offsetLeft;
        console.log(that.dPath);
      that.path.setAttribute('d', that.dPath);
      },
    
    animate: function(e) {
      var that = formAnimator;
        e.preventDefault();
      that.path.classList.add('animate');
      that.path.classList.remove('hidden');
      that.button.classList.add('valid');
      that.path.addEventListener('webkitAnimationEnd', function() {
        this.classList.remove('animate');
        this.classList.add('hidden');
        that.button.classList.remove('valid');
      }, false);
      }
    
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    
    formAnimator.init();
    
  }, false);