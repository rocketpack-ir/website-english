import '../styles/index.scss';
import { TextScramble } from './TextScramble';

window.helpers = {

    // Smooth scroll to target element
    scrollTo: function() {
        $('[data-scrollto]').on('click', function() {
            var id = '#' + $(this).data('scrollto');
            if ( $(id).length > 0 ) {
                var offset = 0;
                if ( $('.header').length ) {
                    offset = $('.header').height();
                }
                $('html').animate({scrollTop: $(id).offset().top - offset}, 700);
            }
            return false;
        });
    },

    initAccordion: function() {

        $('.accordion-item .heading').on('click', function(e) {
            e.preventDefault();
        
            // Add the correct active class
            if($(this).closest('.accordion-item').hasClass('active')) {
                // Remove active classes
                $('.accordion-item').removeClass('active');
            } else {
                // Remove active classes
                $('.accordion-item').removeClass('active');
        
                // Add the active class
                $(this).closest('.accordion-item').addClass('active');
            }
        
            // Show the content
            var $content = $(this).next();
            $content.slideToggle(100);
            $('.accordion-item .content').not($content).slideUp('fast');
        });
        
    },

    initDocumentsTabs: function() {
    },

    particles: function() {
        particlesJS("particles-js", {
            "particles": {
              "number": {
                "value": 355,
                "density": {
                  "enable": true,
                  "value_area": 789.1476416322727
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.48927153781200905,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 0.2,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 2,
                  "size_min": 0,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 0.2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 83.91608391608392,
                  "size": 1,
                  "duration": 3,
                  "opacity": 1,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          });
    },

    textScramble: function() {
      const phrases = [
        'rocketpack'
      ];
      const el = document.querySelector('.brand-name');
      const fx = new TextScramble(el);
      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 5000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    },

    sloganTyping: function() {
      const instance = new TypeIt('.slogan', {
        strings: ['Fly to the sky'],
        //-- Other options...
      }).go();
    }

};

$(function() {

  window.helpers.scrollTo();
  window.helpers.initAccordion();
  window.helpers.initDocumentsTabs();
  window.helpers.particles();
  window.helpers.textScramble();
  //window.helpers.sloganTyping();

  // window scroll
  var $body = $(document.body);
  var $nav = $('header > nav');
  var onScroll = function () {
    $body.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  };
  $(document).scroll(onScroll);
  setTimeout(onScroll, 300);

});