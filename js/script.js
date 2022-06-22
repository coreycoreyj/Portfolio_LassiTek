(function (jQuery){
  
  window.$ = jQuery.noConflict();
  portfolioStart();
  
  function portfolioStart(){
    let welcomeText1 = document.getElementById('welcomeText1');
    let welcomeText2 = document.getElementById('welcomeText2');
    welcomeText1.innerHTML = welcomeText1.textContent.replace(/([^\x00-\x80]|\w|[!]|[.]|[']|[,])/g, "<span class='letter'>$&</span>");
    var isMobile = window.matchMedia("(max-width: 767px)").matches;
    var isTablet = window.matchMedia("(max-width: 1024px)").matches;
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    const projects = {
      '323design': {
        title: 'Website Development for 323Design',
        description: '',
        images: [
          {
            url: 'images/323design/advantageshutters.com_home.png',
            label: 'https://advantageshutters.com',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/ashworthfirm.com_home.png',
            label: 'https://ashworthfirm.com',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/icechrown.us_home.png',
            label: 'https://www.icecrown.us',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/simpsonbuilderstn.com_home.png',
            label: 'https://www.simpsonbuilderstn.com',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/pbgtn.com_home.png',
            label: 'https://www.pbgtn.com',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/shinephotos.org_home.png',
            label: 'https://shinephotos.org',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/simpsonbuilderstn.com_home.png',
            label: 'https://www.simpsonbuilderstn.com',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/323design/visionpoolstn.com_home.png',
            label: 'http://visionpoolstn.com',
            description: '',
            alt: 'home page'
          }
        ]
      },
      aep: {
        title: 'AepInsightPanel.com',
        description: '',
        images: [
          {
            url: 'images/aep/aep1.png',
            label: 'Home page',
            description: '',
            alt: 'AEP home page'
          },
          {
            url: 'images/aep/aep2.png',
            label: 'User page',
            description: '',
            alt: 'AEP page'
          },
          {
            url: 'images/aep/aep3.png',
            label: 'Revisions',
            description: '',
            alt: 'AEP mobile page'
          },
          {
            url: 'images/aep/aep4.png',
            label: 'Revisions',
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
      catdogcoupons: {
        title: 'Cat Dog Coupons',
        description: 'Home Page',
        images: [
          {
            url: 'images/catdogcoupons/Home Page.png',
            label: '',
            description: '',
            alt: 'CatDogCoupons.com home page'
          },
          {
            url: 'images/catdogcoupons/Coupon1.png',
            label: 'Coupon Page',
            description: '',
            alt: 'Coupon page'
          },
          {
            url: 'images/catdogcoupons/Coupon2.png',
            label: 'Coupon Page',
            description: '',
            alt: 'Coupon page'
          },
          {
            url: 'images/catdogcoupons/Home Page2.png',
            label: 'Coupon List',
            description: '',
            alt: 'CatDogCoupons.com home page 2'
          },
        ]
      },
      celadon: {
        title: 'Celadon',
        description: '',
        images: [
          {
            url: 'images/celadon/demo_home_1200.gif',
            label: 'Home Page',
            description: '',
            alt: 'Celadon home page'
          },
          {
            url: 'images/celadon/demo_collections.gif',
            label: 'Products Page',
            description: '',
            alt: 'Celadon'
          },
          {
            url: 'images/celadon/demo_slide_cart.gif',
            label: 'Slide out cart demo',
            description: '',
            alt: 'Celadon'
          },
          {
            url: 'images/celadon/custom-01.png',
            label: 'Design files',
            description: '',
            alt: 'Celadon'
          },
          {
            url: 'images/celadon/custom-02.png',
            label: 'About page',
            description: '',
            alt: 'Celadon'
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
      codemecorrect_courses: {
        title: 'Courses dashboard - CodeMeCorrect.com',
        description: '',
        images: [
          {
            url: 'images/codemecorrect_courses/charts_page_1.png',
            label: '',
            description: '',
            alt: 'Chart page 1'
          },
          {
            url: 'images/codemecorrect_courses/dashboard_preview.gif',
            label: '',
            description: '',
            alt: 'Dashboard Demo'
          },
          {
            url: 'images/codemecorrect_courses/charts_page_2.png',
            label: '',
            description: '',
            alt: 'Chart page 1'
          }
        ]
      },
      cosh_hamilton: {
        title: 'CoshHamilton.com',
        description: '',
        images: [
          {
            url: 'images/cosh_hamilton/Home Page.png',
            label: '',
            description: '',
            alt: 'Home page'
          },
          {
            url: 'images/cosh_hamilton/Home Page2.png',
            label: '',
            description: '',
            alt: 'Home page 2'
          },
          {
            url: 'images/cosh_hamilton/dresses.png',
            label: '',
            description: '',
            alt: 'Products Page'
          }
        ]
      },
      dododelivery: {
        title: 'Dodo Delivery Wordpress site',
        description: '',
        images: [
          {
            url: 'images/dododelivery/demo.gif',
            label: '',
            description: '',
            alt: 'Demo'
          }
        ]
      },
      earnguard_plaid: {
        title: 'Plaid Integration',
        description: '',
        images: [
          {
            url: 'images/earnguard_plaid/plaid_demo.gif',
            label: '',
            description: '',
            alt: 'plaid demo'
          }
        ]
      },
      emails: {
        title: 'Email Development',
        description: '',
        images: [
          {
            url: 'images/emails/bordered/LSUE_email2.png',
            label: 'LSUE student email coded with html (outlook ready)',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/LSUE_email4.png',
            label: 'LSUE student email',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/LSUE_email1.png',
            label: 'LSUE student email',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/SCTCC_email_template_1_part 1.png',
            label: 'SCTCC student email',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/boston_market1.png',
            label: 'Bostom Market email',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/email_mcm_verify.png',
            label: 'verification email',
            description: '',
            alt: 'email'
          },
          {
            url: 'images/emails/bordered/bellomy_tshirt_email.png',
            label: 'bellomy brand refresh email',
            description: '',
            alt: 'email'
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
      catfishsearch: {
        title: 'CatfishSearch.com',
        description: '',
        images: [
          {
            url: 'images/catfishsearch/FFP_home3.png',
            label: '',
            description: '',
            alt: 'home page'
          },
          {
            url: 'images/catfishsearch/ffp_david.png',
            label: '',
            description: '',
            alt: 'reported profile page'
          },
          {
            url: 'images/catfishsearch/ffp_comments.png',
            label: '',
            description: '',
            alt: 'post comments'
          },
          {
            url: 'images/catfishsearch/FFP_submit.png',
            label: '',
            description: '',
            alt: 'submit fake profile page'
          },
          {
            url: 'images/catfishsearch/ffp_twitter.png',
            label: '',
            description: 'reported profiles from Twitter page',
            alt: ''
          },
          {
            url: 'images/catfishsearch/ffp_profile.png',
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
      gsap_helix: {
        title: 'Helix animation using GSAP',
        description: '',
        images: [
          {
            url: 'images/gsap_helix/helix_demo.gif',
            label: '',
            description: '',
            alt: 'helix animation'
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
            label: 'Admin login page',
            description: '',
            alt: 'Home page'
          },
          {
            url: 'images/logicom/login_page_mobile.png',
            label: 'Admin login page mobile',
            description: '',
            alt: 'Home mobile page'
          },
          {
            url: 'images/logicom/admin_utilities_dark.png',
            label: 'Admin utilities',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager.png',
            label: 'Accounts manager',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard.png',
            label: 'Dashboard',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard_dark.png',
            label: 'Dashboard dark mode',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/dashboard_mobile_dark.png',
            label: 'Dashboard mobile',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_ping.png',
            label: 'Device Uptime Module',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/PriceBook.gif',
            label: 'Pricebook',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager_add_customer.png',
            label: 'Accounts manager - add customer',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Accounts_Manager_customer.png',
            label: 'Customer - Details',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Bconfig_template_editor.png',
            label: 'Bconfig template editor',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_mobile.png',
            label: 'Device Uptime Module mobile',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/Uptime_ping_log.png',
            label: 'Device Uptime Logs',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/edit_category.gif',
            label: 'Bconfig - edit categories',
            description: '',
            alt: 'Admin menu page'
          },
          {
            url: 'images/logicom/recordings_table.png',
            label: 'Recordings Table',
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
            label: 'Landing Page',
            description: '',
            alt: 'MyCleanMusic landing page'
          },
          {
            url: 'images/mycleanmusic/songs_page.png',
            label: 'Songs Page',
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
      travelistic: {
        title: 'Travelistic - Landing Page',
        description: '',
        images: [
          {
            url: 'images/travelistic/home2.gif',
            label: '',
            description: '',
            alt: 'Landing page'
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
      vidtimestamp: {
        title: 'VidTimeStamp',
        description: 'Home Page - Minimalistic style',
        images: [
          {
            url: 'images/vidtimestamp/demo.gif',
            label: '',
            description: '',
            alt: 'Home Page'
          }
        ]
      },
      webmosquito: {
        title: 'Web Mosquito',
        description: '',
        images: [
          {
            url: 'images/webmosquito/Home1.png',
            label: 'Home Page with List of Tools',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/webmosquito/demo1.png',
            label: 'Interactive Covid Heat Map',
            description: '',
            alt: 'Home Page'
          }
        ]
      },
      hosting: {
        title: 'Hosting Website',
        description: '',
        images: [
          {
            url: 'images/hosting/home.gif',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          }
        ]
      },
      design1: {
        title: 'Booking/Appointment Website',
        description: '',
        images: [
          {
            url: 'images/design1/Demo_Booking1.gif',
            label: 'Demo of booking functionality',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home1.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home_about.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home2.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home3.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home4.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home5.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home_Booking1.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home_Booking2.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          },
          {
            url: 'images/design1/Home_Booking3.png',
            label: 'Home Page',
            description: '',
            alt: 'Home Page'
          }
        ]
      },
    }


    //createParticles();
    //createBanner();
    observer.observe();

    //add event listeners
    window.addEventListener('scroll', activateSections);
    Array.from(document.getElementsByClassName('btn-project')).forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        let html = '';
        //adds carousel items to modal
        projects[btn.getAttribute('data-project')].images.forEach((image, i)=>{
          html += `
                    <div class="carousel-item ${i == 0 ? 'active' : ''}">
                      <p>${image.label}</p>
                      <img src="${image.url}" class="d-block w-100" alt="${image.alt}">
                      <div class="carousel-caption d-none d-md-block">
                        <p>${image.description}</p>
                      </div>
                   </div>`;
        });
        
        new bootstrap.Carousel($('#carouselProjectsCaptions'));
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

    window.addEventListener('scroll', ()=>{
      if (!isTablet) {
        if (window.pageYOffset > 50){
          shrinkNavBar();
        }else {
          expandNavBar();
        }
      }
    })
  
  
    //bootstrap tooltips
    new bootstrap.Tooltip($('#uncp_btn'));
    
  
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
    if (!isMobile) {
      anime({
          targets: '.nav-link',
          opacity: [0,1],
          translateX: [500,0],
          easing: 'easeInOutSine',
          duration: 1000,
          delay: anime.stagger(100, {start: 5500}),
      })
    }
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
    if (currentY < section.offsetTop) {
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
    }else {
      let scrollUp = setInterval(function(){
        currentY -= scrollSpeed;  
        window.scrollTo(0, currentY);
        if(currentY <= section.offsetTop){
            clearInterval(scrollUp);
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
      if(window.scrollY >= (section_projects.offsetTop - 200) && section_projects.getAttribute('data-activated') === 'false'){
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
  
  function shrinkNavBar() {
    let navbar = document.querySelector("nav.navbar");
    navbar.classList.add('scroll');
  }
  function expandNavBar() {
    let navbar = document.querySelector("nav.navbar");
    navbar.classList.remove('scroll');
  }
   