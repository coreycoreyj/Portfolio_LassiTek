(function (jQuery){
  
  window.$ = jQuery.noConflict();
  portfolioStart();
  
  function portfolioStart(){
    let welcomeText1 = document.getElementById('welcomeText1');
    let welcomeText2 = document.getElementById('welcomeText2');
    welcomeText1.innerHTML = welcomeText1.textContent.replace(/([^\x00-\x80]|\w|[!]|[.]|[']|[,])/g, "<span class='letter'>$&</span>");
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    const projects = {
      aep: {
        title: 'AepInsightPanel.com',
        description: '',
        images: [
          {
            url: 'images/aep/aep1.png',
            label: '',
            description: '',
            alt: 'AEP home page'
          },
          {
            url: 'images/aep/aep2.png',
            label: '',
            description: '',
            alt: 'AEP page'
          },
          {
            url: 'images/aep/aep3.png',
            label: '',
            description: '',
            alt: 'AEP mobile page'
          },
          {
            url: 'images/aep/aep4.png',
            label: '',
            description: '',
            alt: 'AEP page'
          }
        ]
      },
      bazinga: {
        title: 'BAZINGA!',
        description: '',
        images: [
          {
            url: 'images/bazinga/bazinga1.png',
            label: '',
            description: '',
            alt: 'BAZINGA home page'
          },
          {
            url: 'images/bazinga/bazinga2.png',
            label: '',
            description: '',
            alt: 'BAZINGA page'
          },
          {
            url: 'images/bazinga/bazinga3.png',
            label: '',
            description: '',
            alt: 'BAZINGA survey template'
          },
          {
            url: 'images/bazinga/bazinga4.png',
            label: '',
            description: '',
            alt: 'BAZINGA email template'
          }
        ]
      },
      checkers: {
        title: 'ReactJS Checkers',
        description: '',
        images: [
          {
            url: 'images/react_js_checkers/menu.png',
            label: '',
            description: '',
            alt: 'Main Menu'
          },
          {
            url: 'images/react_js_checkers/gameplay1.png',
            label: '',
            description: '',
            alt: 'Gameplay 1'
          },
          {
            url: 'images/react_js_checkers/gameplay2.png',
            label: '',
            description: '',
            alt: 'Gameplay 2'
          }
        ]
      },
      citybizbeats: {
        title: 'CityBizBeats.com',
        description: '',
        images: [
          {
            url: 'images/citybizbeats/home.png',
            label: '',
            description: '',
            alt: 'Home page'
          },
          {
            url: 'images/citybizbeats/tracklist.png',
            label: '',
            description: '',
            alt: 'Home page tracklist'
          },
          {
            url: 'images/citybizbeats/checkout.png',
            label: '',
            description: '',
            alt: 'Checkout page'
          },
          {
            url: 'images/citybizbeats/lease.png',
            label: '',
            description: '',
            alt: 'Lease page'
          }
        ]
      },
      entergypluggedin: {
        title: 'EntergyPluggedIn.com',
        description: '',
        images: [
          {
            url: 'images/entergy/entergy1.png',
            label: '',
            description: '',
            alt: 'entergy home page BEFORE'
          },
          {
            url: 'images/entergy/entergy2.png',
            label: '',
            description: '',
            alt: 'entergy home page AFTER'
          },
          {
            url: 'images/entergy/entergy3.png',
            label: '',
            description: '',
            alt: 'entergy page'
          }
        ]
      },
      FFP: {
        title: 'FindFakeProfiles.com',
        description: '',
        images: [
          {
            url: 'images/ffp/FFP_home3.png',
            label: '',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/ffp/ffp_david.png',
            label: '',
            description: '',
            alt: 'reported profile page'
          },
          {
            url: 'images/ffp/ffp_comments.png',
            label: '',
            description: '',
            alt: 'post comments'
          },
          {
            url: 'images/ffp/FFP_submit.png',
            label: '',
            description: '',
            alt: 'submit fake profile page'
          },
          {
            url: 'images/ffp/ffp_twitter.png',
            label: '',
            description: 'reported profiles from Twitter page',
            alt: ''
          },
          {
            url: 'images/ffp/ffp_profile.png',
            label: '',
            description: '',
            alt: 'profile page'
          }
        ]
      },
      fxglitch: {
        title: 'FxGlitch.tk',
        description: '',
        images: [
          {
            url: 'images/fxGlitch/fxglitch_homepage.png',
            label: '',
            description: '',
            alt: 'fxglitch home page'
          },
          {
            url: 'images/fxGlitch/fxglitch_2.png',
            label: '',
            description: '',
            alt: 'fxglitch about page'
          },
          {
            url: 'images/fxGlitch/fxglitch_forex.png',
            label: '',
            description: '',
            alt: 'fxglitch forex page'
          },
          {
            url: 'images/fxGlitch/fxglitch_performance.png',
            label: '',
            description: '',
            alt: 'fxglitch peroformance page'
          },
          {
            url: 'images/fxGlitch/fxglitch_faq.png',
            label: '',
            description: '',
            alt: 'fxglitch faq page'
          },
          {
            url: 'images/fxGlitch/fxglitch_copier.png',
            label: '',
            description: '',
            alt: 'fxglitch copier page'
          }
        ]
      },
      icilee: {
        title: 'icilee.com',
        description: '',
        images: [
          {
            url: 'images/icilee/icilee_home_page.png',
            label: '',
            description: '',
            alt: 'icilee home page'
          },
          {
            url: 'images/icilee/icilee_watches.png',
            label: '',
            description: '',
            alt: 'icilee watches page'
          },
          {
            url: 'images/icilee/icilee_sunglasses.png',
            label: '',
            description: '',
            alt: 'icilee sunglasses page'
          },
          {
            url: 'images/icilee/icilee_cart.png',
            label: '',
            description: '',
            alt: 'icilee shopping cart page'
          },
          {
            url: 'images/icilee/icilee_contact_page.png',
            label: '',
            description: '',
            alt: 'icilee contact page'
          }
        ]
      },
      jcpenney: {
        title: 'JCPenneyInsiders.com',
        description: '',
        images: [
          {
            url: 'images/jcpenney/jcpenney1.png',
            label: '',
            description: '',
            alt: 'JCPenney home page'
          },
          {
            url: 'images/jcpenney/jcpenney2.png',
            label: '',
            description: '',
            alt: 'JCPenney points page'
          }
        ]
      },
      logicom: {
        title: 'isitdown.logicom.center',
        description: '',
        images: [
          {
            url: 'images/logicom/login_page.png',
            label: '',
            description: '',
            alt: 'Home page'
          },
          {
            url: 'images/logicom/login_page_mobile.png',
            label: '',
            description: '',
            alt: 'Home mobile page'
          },
          {
            url: 'images/logicom/admin_utilities_dark.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard_dark.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard_mobile_dark.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_ping.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/PriceBook.gif',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager_add_customer.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager_customer.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Bconfig_template_editor.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_mobile.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_ping_log.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/edit_category.gif',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/recordings_table.png',
            label: '',
            description: '',
            alt: 'Admin menu page'
          },
        ]
      },
      mycleanmusic: {
        title: 'MyCleanMusic.com',
        description: '',
        images: [
          {
            url: 'images/mycleanmusic/home_page.png',
            label: '',
            description: '',
            alt: 'MyCleanMusic landing page'
          },
          {
            url: 'images/mycleanmusic/songs_page.png',
            label: '',
            description: '',
            alt: 'MyCleanMusic songs page'
          }
        ]
      },
      text_app: {
        title: 'Text Message Web App',
        description: '',
        images: [
          {
            url: 'images/text_app/text_web_app.png',
            label: '',
            description: '',
            alt: 'chat app main page'
          }
        ]
      },
      tile_tanks: {
        title: 'Tile Tanks Online',
        description: '',
        images: [
          {
            url: 'images/tile_tanks/tile_tanks9.png',
            label: '',
            description: '',
            alt: 'tile tanks gameplay'
          },
          {
            url: 'images/tile_tanks/tile_tanks4.png',
            label: '',
            description: '',
            alt: 'tile tanks gameplay'
          },
          {
            url: 'images/tile_tanks/tile_tanks_menu.png',
            label: '',
            description: '',
            alt: 'tile tanks menu'
          },
          {
            url: 'images/tile_tanks/tile_tanks7.png',
            label: '',
            description: '',
            alt: 'tile tanks gameplay'
          },
          {
            url: 'images/tile_tanks/tile_tanks5.png',
            label: '',
            description: '',
            alt: 'tile tanks gameplay'
          }
        ]
      },
      game_portfolio: {
        title: 'Video game style portfolio',
        description: '',
        images: [
          {
            url: 'images/portfolio2/mario_game_portfolio.png',
            label: '',
            description: '',
            alt: 'Video game portfolio image 1'
          },
          {
            url: 'images/portfolio2/mario_game_portfolio2.png',
            label: '',
            description: '',
            alt: 'Video game portfolio image 2'
          },
          {
            url: 'images/portfolio2/mario_game_portfolio3.png',
            label: '',
            description: '',
            alt: 'Video game portfolio image 3'
          }
        ]
      },
    }


    createParticles();
    //createBanner();
    observer.observe();

    //add event listeners
    window.addEventListener('scroll', activateSections);
    Array.from(document.getElementsByClassName('btn-project')).forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        let html = '';
        //adds carousel items to modal
        projects[btn.getAttribute('data-project')].images.forEach((image, i)=>{
          html += `<div class="carousel-item ${i == 0 ? 'active' : ''}">
                    <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${image.label}</h5>
                      <p>${image.description}</p>
                    </div>
                   </div>`;
        });
        
        $('#carouselProjectsCaptions').carousel(0);
        document.getElementById('projectsModalLabel').innerHTML = projects[btn.getAttribute('data-project')].title;
        document.querySelector('#projectsModal .carousel-inner').innerHTML = html;
       
      });
    });
  
    Array.from(document.getElementsByClassName('btn-section-scroll')).forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        smoothScrollTo(btn.getAttribute('data-scrollTo'), window.scrollY);
      });
    });
    Array.from(document.getElementsByClassName('nav-link')).forEach((link)=>{
      link.addEventListener('click', ()=>{
        fastScrollTo(link.getAttribute('data-scrollTo'), window.scrollY);
      });
    });
  
  
    //bootstrap tooltips
    $('#uncp_btn').tooltip();
    
  
    //run animations
    anime({
        targets: '#welcomeText1',
        opacity: 1
    });
    anime({
        targets: '#welcomeText1 .letter',
        opacity: [0,1],
        scale: [14,1],
        translateY: [100,0],
        easing: 'easeInOutBack',
        duration: 1800,
        delay: anime.stagger(100, {start: 800}),
        rotate: '1turn'
    });
  
    anime({
        targets: '#welcomeText2, #intro-button, .fa-arrow-down',
        opacity: [0,1],
        translateY: [100,0],
        easing: 'easeInOutBack',
        duration: 1000,
        delay: anime.stagger(100, {start: 5000}),
    });
  
    anime({
        targets: '.fa-arrow-down',
        translateY: 50,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
  }
  //particles
  anime({
    targets: '.particle',
    opacity: [0.1, 0.6],
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    duration: 2600
  });
  anime({
    targets: '.particle',
    translateX: function() {
      return [anime.random(0, 150), anime.random(0, 150)];
    },
    translateY: function() {
      return [anime.random(0, 150), anime.random(0, 150)];
    },
    easing: 'easeInOutSine',
    duration: 5000,
    complete: particleMovement
  });
  
  
  function smoothScrollTo(elementId, currentY){
      let section = document.getElementById(elementId);
      let scrollSpeed = 0;
      let accelerate = true;
      let decelerate = false;
  
      let scrollDown = setInterval(function(){
          currentY += scrollSpeed;  
          window.scrollTo(0, currentY);
          if(currentY >= section.offsetTop){
              clearInterval(scrollDown);
          }
          else if(scrollSpeed < 5 && accelerate == true){
            //scrollSpeed += 0.1;
            scrollSpeed += 0.1;
          }
          else{
            accelerate = false;
            decelerate = true;
          }
  
          if(currentY >= (section.offsetTop - 250) && decelerate == true){
            if(scrollSpeed > 1){
              scrollSpeed -= 0.05;
            }
            else
              decelerate = false;
          }
        }, 5);
  }
  function fastScrollTo(elementId, currentY){
    let section = document.getElementById(elementId);
    let scrollSpeed = 0;
    let accelerate = true;
    let decelerate = false;

    let scrollDown = setInterval(function(){
        currentY += scrollSpeed;  
        window.scrollTo(0, currentY);
        if(currentY >= section.offsetTop){
            clearInterval(scrollDown);
        }
        else if(scrollSpeed < 40 && accelerate == true){
          scrollSpeed += 0.1;
        }
        else{
          accelerate = false;
          decelerate = true;
        }

        if(currentY >= (section.offsetTop - 250) && decelerate == true){
          if(scrollSpeed > 1){
            scrollSpeed -= 0.05;
          }
          else
            decelerate = false;
        }
      }, 5);
}
    
  function activateSections(e){
      let section_intro = document.getElementById('intro');
      let section_skills = document.getElementById('skills');
      let section_projects = document.getElementById('projects');
      let section_edu = document.getElementById('education');
      let section_emp = document.getElementById('employment');
      let section_ref = document.getElementById('references');
  
      // skills
      if(window.scrollY >= (section_skills.offsetTop - (section_skills.clientHeight / 2)) && section_skills.getAttribute('data-activated') === 'false'){
          anime({
            targets: '.skill-circle circle, .skill-year, .skill-level',
            strokeDashoffset: [anime.setDashoffset, (element, i) => element.getAttribute('data-experience')],
            opacity: 1,
            easing: 'easeInOutSine',
            duration: 1500,
            delay: anime.stagger(100),
            direction: 'normal',
            loop: false
          });
          anime({
            targets: '#skills h2',
            opacity: 1,
            translateX: [200, 0],
            easing: 'easeInOutSine',
            duration: 300,
            delay: anime.stagger(180),
            direction: 'normal',
            loop: false
          });
  
          section_skills.setAttribute('data-activated', 'true');
      }
  
      // projects
      if(window.scrollY >= (section_projects.offsetTop - (section_projects.clientHeight / 2)) && section_projects.getAttribute('data-activated') === 'false'){
        anime({
          targets: '#projects .card',
          opacity: 1,
          translateY: [100, 0],
          easing: 'easeInOutSine',
          duration: 500,
          delay: anime.stagger(200),
          direction: 'normal',
          loop: false
        });
  
        section_projects.setAttribute('data-activated', 'true');
      }
  
      // education
      if(window.scrollY >= (section_edu.offsetTop - (section_edu.clientHeight / 2)) && section_edu.getAttribute('data-activated') === 'false'){
        anime({
          targets: '#education .edu-info, #edu-button',
          opacity: 0.95,
          easing: 'easeInOutSine',
          duration: 800,
          direction: 'normal',
          loop: false
        });
  
        section_edu.setAttribute('data-activated', 'true');
      }
  
      // references
      if(window.scrollY >= (section_ref.offsetTop - (section_ref.clientHeight / 2)) && section_ref.getAttribute('data-activated') === 'false'){
        anime({
          targets: '#references .card',
          opacity: 1,
          translateY: [100, 0],
          easing: 'easeInOutSine',
          duration: 500,
          delay: anime.stagger(200),
          direction: 'normal',
          loop: false
        });
  
        section_ref.setAttribute('data-activated', 'true');
      }
  
      /**
       let sections = document.getElementsByTagName('section');
      for (let i = 0; i < sections.length; i++){
          if(window.scrollY >= section[i].offsetTop && section[i].data-activated == false){
              
          }
      }
      **/
      
  }
  
  function createParticles(){
    var section_intro = document.getElementById("intro");
    //var amount_of_particles = 100;
    var particle;
    var particle_y = 100;
    var particle_x = 0;
  
    while (particle_y < window.innerHeight){
      particle = document.createElement("div");
      particle.className = "particle";
      particle.style.position = "absolute";
      particle.style.top = particle_y + 'px';
      particle.style.left = particle_x + 'px';
      section_intro.appendChild(particle);

      particle_x +=  250;

      if (particle_x > window.innerWidth){
        particle_x = 0;
        particle_y += 80;
      }
    }
    
  }
  function particleMovement(){
    anime({
      targets: '.particle',
      translateX: function() {
        return anime.random(0, 150);
      },
      translateY: function() {
        return anime.random(0, 150);
      },
      easing: 'easeInOutSine',
      duration: 5000,

      complete: particleMovement
    });
  }
  function createBanner(){
    var banner = document.createElement("img");
    var section_skills = document.getElementById("skills");
    //banner.src = "images/banner.png";
    banner.setAttribute('data-src', "images/banner.png");
    banner.className = "lozad";
    banner.style.position = "absolute";
    banner.style.right = 0;
    banner.style.maxWidth = '155px';
    section_skills.appendChild(banner);
  }
  function generateSkills(){
     let html = '<div class="col skill-css">' +
        '<h2>CSS</h2>' +
        '<svg class="skill-circle" width="100" height="100">' +
            '<circle cx="50" cy="50" r="40" stroke="gold" stroke-width="15" fill="transparent" />' +
            '<text class="skill-year" x="35" y="55" fill="mediumturquoise" stroke-width="300">5 yrs</text>' +
        '</svg>' +
        '<p class="skill-level">Advanced</p>' +
      '</div>'
  
  }
  function addSkillYear(){
    let svg_txt = document.querySelectorAll('.skill-year');
  /** 
    for (let i = 0; i < svg_txt.length; i++){
      let textTag = document.createElement('text');
      let textNode = document.createTextNode('5 yrs');
      textTag.setAttribute('x', 35);
      textTag.setAttribute('y', 55);
      textTag.setAttribute('fill', 'mediumturquoise');
      textTag.setAttribute('stroke-width', 300);
      textTag.appendChild(textNode);
      svg[i].appendChild(textTag);
      svg_txt[i].innerHTML = 'd';
      
    }**/
  }
  })(jQuery);




  function sendEmail(form){
    var resquest_data = {
      'first_name': form.fName.value,
      'last_name': form.lName.value,
      'email': form.email.value,
      'message': form.message.value
    };
    var loader = `<div class="loader spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>`;
    var submitBtn = form.submit;

    submitBtn.outerHTML = loader;

    fetch('/php/email.php', {
      method: 'POST',
      body: JSON.stringify(resquest_data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success){
        document.querySelector('#contactForm .loader').outerHTML = `<div class="text-success">Email Sent!</div>`;
      }else {
        document.querySelector('#contactForm .loader').outerHTML = `<div class="text-danger">Sorry, an error has occured.</div>`;
      }
      
      return data;
    })
    .catch(err => {
      document.querySelector('#contactForm .loader').outerHTML = `<div class="text-danger">Sorry, an error has occured.</div>`;
      return err;
    });
  }
  
   