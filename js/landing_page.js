(function (jQuery){
    window.$ = jQuery.noConflict();
    /* init variables */
    let video = document.querySelector('#videoHero video');
    let isMobile = window.matchMedia("(max-width: 767px)").matches;
    let isTablet = window.matchMedia("(max-width: 1024px)").matches;
    let navWebDev = document.getElementById("navWebDev");
    let navContact = document.querySelector("#menuRight button");
    let vidOneSecLeft = false;
    let modal = new bootstrap.Modal(document.getElementById('modal'), {
        keyboard: false
    })

    /* Control Flow */
    start();
    


    /* Event Listeners */
    video.addEventListener('timeupdate', function(e) {
        let time = e.target.currentTime;
        
        if (time >= 29 && !vidOneSecLeft) {
            vidOneSecLeft = true;
            anime({
                targets: '#videoHero',
                opacity: [1,0],
                easing: 'easeInOutSine',
                duration: 500,
            });
        }else if (time <= 1 && vidOneSecLeft) {
            vidOneSecLeft = false;
            anime({
                targets: '#videoHero',
                opacity: [0,1],
                easing: 'easeInOutSine',
                duration: 500,
            });
        }
    });
    navWebDev.addEventListener('click', ()=>{
        modal.show();
    })
    navContact.addEventListener('click', ()=>{
        modal.show();
    })

    /* Functions */
    function start(){
        /* run animations */
        anime({
            targets: '#videoHero',
            opacity: [0,1],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: 500,
        });
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