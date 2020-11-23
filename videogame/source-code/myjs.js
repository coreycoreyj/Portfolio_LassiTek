"use strict";
(function(){
	/** Global Variables **/
	var skyElement = document.getElementById("sky");
	var groundElement = document.getElementById("ground");
	var menuElement = document.getElementsByClassName("navbar")[0];
	var coreyElement = document.getElementById("corey");
	var enemyElement = document.getElementById("enemy");
	var textContainerElement = document.getElementById("text-container");
	var chatAppElement = document.getElementById("chat_application");
	var menu_intro = document.getElementById("sec-intro");
	var menu_skills = document.getElementById("sec-skills");
	var menu_employoment = document.getElementById("sec-employoment");
	var menu_projects1 = document.getElementById("sec-projects1");
	var menu_projects = document.getElementById("sec-projects");
	var menu_end = document.getElementById("sec-end");
	var walkDuration = 3;
	var groundXAmount = -450;
	var cityXAmount = -25;
	var groundX = groundXAmount;
	var cityX = cityXAmount;
	var castleXOffset = 150;
	var corey; //person object
	var enemy; //enemy object
	var chatBubble; //chatBubble object
	var timeline = new TimelineMax();
	
	
	
	/** Start Animation Show **/
	function start(){
		
		$(document).ready(function(){
	
			var cloud = new Cloud(120, 80, 300, 300, "assets/cloud6.png");
			var cloud2 = new Cloud(140, 60, 300, 300, "assets/cloud11.png");
			var castle = new Castle(280, 336, window.innerWidth + castleXOffset, -336, "assets/castle.png");
			var flag = new Flag(109, 439, window.innerWidth, -439, "assets/flag.png");
			var block = new Block(100, 100, window.innerWidth, -300, "assets/block.jpg");
			var block2 = new Block(100, 100, window.innerWidth + 200, -300, "assets/block.jpg");
			var mysteryBlock = new Block(100, 100, window.innerWidth + 100, -300, "assets/mystery_block.jpg");
			var textSpeed = 7;
			var textClasses = 'text';
			var introHtml = '<div class="' + textClasses + '"><h2>Hi! My name is Corey Lassiter. <small class="badge badge-warning" style="margin-top: 5px;">*Please use a desktop & Chrome before proceeding.</small></h2>' +
			'<br> This is a short, lighthearted portfolio that I developed to show a little more about me and my work. <br /> <ul style="text-align: left;">' + 
			'<li>I am an IT professional.</li> <li>I live in Winston-Salem, North Carolina.</li>' +
			'<li>I built this portfolio from scratch using HTML, Javascript, CSS, and libraries including Bootstrap, JQuery, and GreenSock.</li>' + 
			'<li>I believe that my work ethic, efficiency, and reliability will be of good use for any company. </li>' +
			'<li>I work in an agile environment with scrums & sprints. But I can also work independently.</li>' +
			'<li>I am a quick learner, detail-oriented and easy to work with.</li>' +
			'</ul>';
			
			var skillsHtml = '<div class="' + textClasses + '"><h2>My skills include</h2> <ul>' + 
				'<li>4 professional years using HTML, CSS, JavaScript, JQuery.</li>' +
				'<li>2 professional years using SQL, JSON & Linux.</li>' +
				'<li>2 professional years in a help desk technical support role for our internal company workers.</li>' +
				'<li>4 unprofessional years using PHP.</li>' + 
				'<li>I have experience using Wordpress, BootStrap, SASS, Android development, REST, Dreamweaver, Photoshop, Construct 2&3, FileZilla, Adobe XD, Gimp, MYQL, SQL Server Management Studio, Jira, Confluence, Telligent, PhoneGap, XML, CPanel/web hosting, IIS, Apache, Firebase, Greensock, & Oxwall. I am also going to teach myself ReactJS.</li>' +
				'</ul>' +
				'<br> <a href="https://www.uncp.edu/" target="_blank" ><i class="fas fa-graduation-cap"></i></a>I graduated from the <a href="https://www.uncp.edu/" target="_blank" >University of North Carolina at Pembroke</a> in 2013. I have my Bachelor of Science degree in Information Technology. <br>'; 
			
			var employmentHtml = '<div class="' + textClasses + '">I currently work at Bellomy Research as a <b>Technical Operations Specialist</b>. I have been there since May 2016 (over 3 years).	Some responsibilities include: <ul>' +
				'<li>Programming online surveys, tables, charts, and modules on the client\'s portal website.</li>' +
				'<li>Resolving tech support tickets, creating documentation, monitoring servers and restarting services when necessary.</li>' + 
				'<li>Front-end development for our community websites by the web designer\'s request.</li>' + 
				'<li>Create/edit email templates with HTML.</li>' +
				'</ul><b>Languages include:</b> Javascript, JSON, HTML, CSS, SQL, VBScript, slight ASP.NET, TML(tabular markup language)<br><br>' +
				'I also worked at Moore Regional Hospital as a JavaScript Programmer for over 2 years: Nov 2013 – Dec 2015. I developed web-based physician order forms for the hospital and other various task. Physicians use them to order medicine, determine diagnosis, set up appointments, set up x-rays, determine wound care, and many other healthcare related things.<br>' +
				'<b>Languages included:</b> Javascript, HTML, CSS, VGR scripting(back-end), some JQuery, slight linux. &nbsp; &nbsp;';
			
			var projectsHtml = '<div class="' + textClasses + '">Here are a few personal projects that I have been working on during my free time.  <ul>' +
				'<li>Ecommerce Wordpress website: <a href="https://icilee.com" target="_blank">icilee.com</a></li>' +
				'<li>Wordpress site to report fake profiles: <a href="https://findfakeprofiles.com" target="_blank">FindFakeProiles.com</a></li>' +
				'<li>Wordpress site for my borther\'s business: <a href="https://fxglitch.000webhostapp.com/" target="_blank">FXGlitch</a></li>' +
				'<li>Music/Beats showcase website: <a href="https://citybizbeats.com" target="_blank">CityBizBeats.com</a></li>' +
				'<li>Multiplayer android gaming app created with Construct 3: <a href="https://play.google.com/store/apps/details?id=com.TileTanks.TileTanks" target="_blank">Tile Tanks Online</a></li>' +
				'<li>Some of the source code for this portfolio: <a href="source-code/" target="_blank">lassiter-nc/source-code</a></li>' +
				'</ul>';
			
			var endHtml = '<div class="' + textClasses + '"><h2>The End!</h2> Thank you for for walking with me through this Mario-like world! I hope you enjoyed. Here are some extra links just in case you would like to view them. Also if you want to jump to different sections of my portfolio, just click on the menu above.<ul>' +
			'<li>Linkedin: <a href="https://linkedin.com/in/corey-lassiter-b5703172/" target="_blank">linkedin.com/in/corey-lassiter-b5703172/</a></li>' +
			'<li>GitHub: <a href="https://github.com/cjl014" target="_blank">github.com/cjl014</a></li>' +
			'<li>Email: COREYUNCP@GMAIL.COM</li>' +
			'</ul></div>';
			
			var buttonHtml = '<button class="button next">Continue</button></div>';
			
			
			chatBubble.setup();
					
			/************* Intro *************/
			//Clouds
			cloud.create(false, 0);
			cloud2.create(false, 1);
			cloud.create(false, 2);
			cloud2.create(false, 3);
			
			//Castle
			castle.create(false);
			
			//Flag
			flag.create(false);
			
			//Blocks
			block.create(false, "block1");
			block2.create(false, "block2");
			mysteryBlock.create(false, "mysteryBlock");
	
			//Nav Bar
			timeline.to(".navbar", 1, {opacity: 1, delay: 0.1}, "navAndSun")
			timeline.from(".navbar", 1, {scale: 0.05, ease: Back.easeInOut.config(0.8)}, "navAndSun");
			
			//Sun
			//timeline.from("#sun", 1, {y:-500, rotation:180, ease: Elastic.easeOut.config(1, 0.3)}, "navAndSun")
			timeline.to("#sun", 0.5, {opacity: 1, onComplete:coreyRun}, "navAndSun");
			
			//Corey
			corey.speedLines();
			timeline.from("#corey", 2, {x: -window.innerWidth / 2, ease: Power3.easeIn, onComplete:coreyStand}, "corey")
			timeline.to("#corey", 0.1, {opacity: 1}, "corey");
			
			//Chat Text
			timeline.from(textContainerElement, 1.5, { scaleY: 0, delay: 1, ease: Elastic.easeOut.config(1, 0.75), onComplete:setMenuButtonListener });
			timeline.to(textContainerElement, textSpeed, {text:{value: introHtml + buttonHtml, delimiter: ""}, ease:Linear.easeNone, onComplete: onSectionComplete });
			
			
			/************* Skills *************/
			timeline.to("", 0.1, {onComplete: coreyWalk }, "skills");
			timeline.to("", 0.1, {onComplete: clearChatBubbleText }, "skills");
			timeline.to(textContainerElement, 1, {opacity: 0, scaleY: 0 }, "skills");
			timeline.to(skyElement, walkDuration, {backgroundPositionX: cityX + "px", ease: Linear.easeNone, delay: 0.3}, "skills");
			timeline.to(groundElement, walkDuration, {backgroundPositionX: groundX + "px", ease: Linear.easeNone, onComplete:coreyStand, delay: 0.3}, "skills");
			
			//Chat Text
			timeline.to(textContainerElement, 1, {opacity: 1});
			timeline.to(textContainerElement, 1.5, { scaleY: 1, ease: Elastic.easeOut.config(1, 0.75)});
			timeline.to(textContainerElement, 0.001, {text:{value: "", delimiter: ""}, ease:Linear.easeNone });
			timeline.to(textContainerElement, textSpeed, {text:{value: skillsHtml + buttonHtml, delimiter: ""}, ease:Linear.easeNone, onComplete: onSectionComplete });
			
			cityX += cityXAmount;
			groundX += groundXAmount;
				
			
			/************* Employment *************/
			timeline.to("", 0.1, {onComplete: coreyWalk }, "employment");
			timeline.to("", 0.1, {onComplete: function(){enemy.walk(0.1)} }, "employment");
			timeline.to("", 0.1, {onComplete: clearChatBubbleText }, "employment");
			timeline.to(textContainerElement, 1, {opacity: 0, scaleY: 0 }, "employment");
			timeline.to(skyElement, walkDuration, {backgroundPositionX: cityX + "px", ease: Linear.easeNone, delay: 0.3}, "employment");
			timeline.to(groundElement, walkDuration, {backgroundPositionX: groundX + "px", ease: Linear.easeNone, onComplete:coreyStand, delay: 0.3}, "employment");
			
			//enemy
			timeline.to("#enemy", 3.8, {onComplete: function(){enemy.stand()}}, "employment");
			timeline.to("#enemy", 4, {x: (-window.innerWidth / 2) + (coreyElement.clientWidth / 4) - 128, ease: Linear.easeNone}, "employment");
			timeline.to("#enemy_stand", 0.001, {opacity: 0, ease: Linear.easeNone}, "employment+=4");
			timeline.to("#enemy_walk", 0.001, {opacity: 0, ease: Linear.easeNone}, "employment+=4");
			timeline.to("#enemy_shell", 0.001, {opacity: 1, ease: Linear.easeNone}, "employment+=4");
			timeline.to("#enemy", 5.5, {x: -5000, ease: Linear.easeNone});
		
			//corey jump
			timeline.to("#corey_stand", 0.001, {alpha:0}, "employment+=3.6");
			timeline.to("#corey_walk", 0.001, {alpha:1}, "employment+=3.6");
			timeline.to("#corey", 0.2, {y: -100, ease:Linear.easeNone}, "employment+=3.6");
			timeline.to("#corey", 0.2, {y: -60, ease:Linear.easeNone}, "employment+=3.8");
			timeline.to("#corey", 0.2, {y: -100, ease:Linear.easeNone}, "employment+=4");
			timeline.to("#corey", 0.2, {y: 0, ease:Linear.easeNone}, "employment+=4.2");
			timeline.to("#corey_stand", 0.001, {alpha:1}, "employment+=4.4");
			timeline.to("#corey_walk", 0.001, {alpha:0}, "employment+=4.4");
				
			//Chat Text
			timeline.to(textContainerElement, 1, {opacity: 1}, "employment+=3.4");
			timeline.to(textContainerElement, 1.5, { scaleY: 1, ease: Elastic.easeOut.config(1, 0.75)}, "employment+=3.4");
			timeline.to(textContainerElement, 0.001, {text:{value: "", delimiter: ""}, ease:Linear.easeNone }, "employment+=3.4");
			timeline.to(textContainerElement, textSpeed, {text:{value: employmentHtml + buttonHtml, delimiter: ""}, ease:Linear.easeNone, onComplete: onSectionComplete }, "employment+=3.4");
			
			cityX += cityXAmount;
			groundX += groundXAmount;
			
			
			
			/************* Projects 1 *************/
			timeline.to("", 0.1, {onComplete: coreyWalk }, "projects1");
			timeline.to("", 0.1, {onComplete: clearChatBubbleText }, "projects1");
			timeline.call(block.move, ["block1"], "projects1");
			timeline.call(block2.move, ["block2"], "projects1");
			timeline.call(mysteryBlock.move, ["mysteryBlock"], "projects1");
			timeline.to(textContainerElement, 1, {opacity: 0, scaleY: 0 }, "projects1");
			timeline.to(skyElement, walkDuration, {backgroundPositionX: cityX + "px", ease: Linear.easeNone, delay: 0.3}, "projects1");
			timeline.to(groundElement, walkDuration, {backgroundPositionX: groundX + "px", ease: Linear.easeNone, onComplete:coreyStand, delay: 0.3}, "projects1");
			
			//corey jump to hit block
			timeline.to("#corey_stand", 0.001, {alpha:0}, "projects1+=3.6");
			timeline.to("#corey_walk", 0.001, {alpha:1}, "projects1+=3.6");
			timeline.to("#corey", 0.2, {y: -100, ease:Linear.easeNone}, "projects1+=3.6");
			timeline.call(mysteryBlock.hit, ["mysteryBlock"], "projects1+=3.6");
			timeline.to("#corey", 0.2, {y: 0, ease:Linear.easeNone}, "projects1+=3.8");
			timeline.to("#corey_stand", 0.001, {alpha:1}, "projects1+=4");
			timeline.to("#corey_walk", 0.001, {alpha:0}, "projects1+=4");
			
			//Chat Text
			timeline.to(textContainerElement, 1, {opacity: 1});
			timeline.to(textContainerElement, 1.5, { scaleY: 1, ease: Elastic.easeOut.config(1, 0.75)});
			timeline.to(textContainerElement, 0.001, {text:{value: "", delimiter: ""}, ease:Linear.easeNone });
			timeline.to(textContainerElement, textSpeed, {text:{value: projectsHtml + buttonHtml, delimiter: ""}, ease:Linear.easeNone, onComplete: onSectionComplete });
			
			cityX += cityXAmount;
			groundX += groundXAmount;
			
			
			
			
			/************* Projects 2*************/
			timeline.to("", 0.1, {onComplete: coreyWalk }, "projects");
			timeline.to("", 0.1, {onComplete: clearChatBubbleText }, "projects");
			timeline.call(block.move2, ["block1"], "projects1");
			timeline.call(block2.move2, ["block2"], "projects1");
			timeline.call(mysteryBlock.move2, ["mysteryBlock"], "projects1");
			timeline.to(textContainerElement, 1, {opacity: 0, scaleY: 0 }, "projects");
			timeline.to(skyElement, walkDuration, {backgroundPositionX: cityX + "px", ease: Linear.easeNone, delay: 0.3}, "projects");
			timeline.to(groundElement, walkDuration, {backgroundPositionX: groundX + "px", ease: Linear.easeNone, onComplete:coreyStand, delay: 0.3}, "projects");
			
			//Open Modal
			timeline.to("", 0.01, {onComplete: openModal});
			timeline.to("", 0.01, {onComplete: onSectionComplete});
			
			cityX += cityXAmount;
			groundX += groundXAmount;
			
			
			
			/************* End *************/
			timeline.to("", 0.1, {onComplete: coreyWalk }, "end");
			timeline.to("", 0.1, {onComplete: clearChatBubbleText }, "end");			timeline.to(textContainerElement, 1, {opacity: 0, scaleY: 0 }, "end");
			timeline.to(skyElement, walkDuration, {backgroundPositionX: cityX + "px", ease: Linear.easeNone, delay: 0.3}, "end");
			timeline.to(groundElement, walkDuration, {backgroundPositionX: groundX + "px", ease: Linear.easeNone, onComplete:coreyStand, delay: 0.3}, "end");
			
			//Castle & Flag
			timeline.to("", 0.00001, {onComplete: castle.reset}, "end");
			timeline.to("", 0.0001, {onComplete: castle.move, delay: 0.3}, "end");
			timeline.to("", 0.00001, {onComplete: flag.reset}, "end");
			timeline.to("", 0.0001, {onComplete: flag.move, delay: 0.3}, "end");

			//Chat Text
			timeline.to(textContainerElement, 1, {opacity: 1});
			timeline.to(textContainerElement, 1.5, { scaleY: 1, ease: Elastic.easeOut.config(1, 0.75)});
			timeline.to(textContainerElement, 0.001, {text:{value: "", delimiter: ""}, ease:Linear.easeNone });
			timeline.to(textContainerElement, textSpeed, {text:{value: endHtml, delimiter: ""}, ease:Linear.easeNone });	
		
		});
	}


	
	/** CHAT BUBBLE CLASS **/
	class ChatBubble {
		constructor(id){
			this.id = id;
			this.element = document.getElementById(id);
		}
		
		setup(){
			var extraHeight = 60;
			
			if(window.innerHeight < 600){
			}

			this.element.style.width = "100%";
			this.element.style.height = (window.innerHeight - groundElement.clientHeight - menuElement.clientHeight - coreyElement.clientHeight + extraHeight) + "px";
			this.element.style.top = menuElement.clientHeight + "px"; 
		}
	}
	
	
	
	/** PERSON CLASS **/
	class Person {
		constructor(){
			this.movement = "";
		}
		
		walk(speed){
			var that = this;
			this.movement = "walk";
			
			animate();

			function animate(){
				if(that.movement == "walk"){
					TweenMax.to("#corey_stand", 0.001, {opacity:0, delay: speed});
					TweenMax.to("#corey_walk", 0.001, {opacity:1, delay: speed});
					
					TweenMax.to("#corey_stand", 0.001, {opacity:1, delay: speed*2});
					TweenMax.to("#corey_walk", 0.001, {opacity:0, delay: speed*2, onComplete:animate});
				}
			}	
		}

		stand(){
			this.movement = "stand";
		}
		
		speedLines(){
			var line;
			var amount = 4;
			var x = 0;
			var y = 0;
			var lineSpacing;
			var lineThickness;
			var mobileDevices = window.matchMedia('(max-width: 992px)');
		
			//smaller screens
			if (mobileDevices.matches){
				lineSpacing = 5;
				lineThickness = 1;
				x = -90;
			}
			else{
				lineSpacing = 25;
				lineThickness = 1.4;
				x = -50;
			}
			
			for(var i=0; i<amount ; i++){
				y -= lineSpacing; 
				line = document.createElement('div');
			
				line.style.width = "100px";
				line.style.height = lineThickness + "px";
				line.style.backgroundColor = "lightblue";
				line.style.position = "relative";
				line.style.top = y + "px";
				line.style.left = x + "px";
				line.className = "speed-line";
				
				coreyElement.append(line);
				
				TweenMax.to(line, 0.1, {opacity: 1, delay: 2.1});
				TweenMax.to(line, 0.8, {repeat: 0, x: -100, opacity: 0, delay: 2.2});
				
			}
		}
	}
	
	
	class Enemy {
		constructor(x, y, width, height){
			this.movement = "";
			this.x = window.innerWidth;
			
		}
		
		walk(speed){
			var that = this;
			this.movement = "walk";
			
			animate();
			
			function animate(){
				if(that.movement == "walk"){
					
					
					TweenMax.to("#enemy_stand", 0.001, {opacity:0, delay: speed});
					TweenMax.to("#enemy_walk", 0.001, {opacity:1, delay: speed});
					
					TweenMax.to("#enemy_stand" , 0.001, {opacity:1, delay: speed*2});
					TweenMax.to("#enemy_walk", 0.001, {opacity:0, delay: speed*2, onComplete:animate});
				}
			}	
		}
		
		stand(){
			this.movement = "stand";
		}
	}

	

	/** OBJECT CLASS **/
	class Object{
		constructor(w, h, x, y, src){
			this.width = w;
			this.height = h;
			this.x = x;
			this.y = y;
			this.src = src;
		}
		
		create(flip){
	
		}
		
		move(){
		
		}
	}
	
	class Cloud extends Object {
		constructor(w, h, x, y, src) {
			super(w, h, x, y, src);
		}
		
		create(flip, cloudArea){
			var that = this;
			var image = new Image();
			var cloudArea = $(".cloud-area").eq(cloudArea);
			
			image.src = this.src;
			image.className = "cloud";
			image.width = this.width;
			image.height = this.height;
			image.style.left = (getRandomNum(cloudArea.position().left, (cloudArea.position().left + cloudArea.width()) - image.width) + "px");
			image.style.top = (getRandomNum(menuElement.clientHeight, skyElement.clientHeight - groundElement.clientHeight -image.height - 200)) + "px";
			
			//flip image
			if(flip){ 
				image.style.transform = "scaleX(-1)";
			}
			
			//append to html
			image.onload = function(){
				skyElement.prepend(image);
				that.move(image);
			}
		}
		
		move(obj){
		
			var objX = $(obj).position().left;
			var counter = 0;
			
			//obj.style.transform = "translate(" + 1 + ")";
			TweenMax.ticker.addEventListener("tick", function(event){
				obj.style.transform = "translate(" + counter + "px)";
				counter -= 0.2;
	
				if((-objX + -obj.width) > counter){
					counter = window.innerWidth - objX;
					obj.style.transform = "translate(2000px)";
				
				}
			});
		}
	}
	
	class Castle extends Object {
		constructor(w, h, x, y, src) {
			super(w, h, x, y, src);
		}
		
		create(flip){
			var image = new Image();
			
			image.src = this.src;
			image.className = "castle";
			image.id = "castle";
			image.width = this.width;
			image.height = this.height;
			image.style.position = "absolute";
			image.style.left = this.x + "px";
			image.style.top = this.y + "px";
			image.style.zIndex = 99;
			
			//flip image
			if(flip){ 
				image.style.transform = "scaleX(-1)";
			}
			
			//append to html
			image.onload = function(){
				groundElement.prepend(image);
			}
		}
		
		move(){
			TweenMax.to("#castle", walkDuration, {x: groundXAmount, ease: Linear.easeNone});
		}
		reset(){
			TweenMax.to("#castle", 0.001, {x: 0});
		}
	}
	
	class Flag extends Object {
		constructor(w, h, x, y, src) {
			super(w, h, x, y, src);
		}
		
		create(flip){
			var image = new Image();
			
			image.src = this.src;
			image.className = "flag";
			image.id = "flag";
			image.width = this.width;
			image.height = this.height;
			image.style.position = "absolute";
			image.style.left = this.x + "px";
			image.style.top = this.y + "px";
			image.style.zIndex = 99;
			
			//flip image
			if(flip){ 
				image.style.transform = "scaleX(-1)";
			}
			
			//append to html
			image.onload = function(){
				groundElement.prepend(image);
			}
		}
		
		move(){
			TweenMax.to("#flag", walkDuration, {x: groundXAmount, ease: Linear.easeNone});
		}
		reset(){
			TweenMax.to("#flag", 0.001, {x: 0});
		}
	}

	class Block extends Object {
		constructor(w, h, x, y, src) {
			super(w, h, x, y, src);
		}
		
		create(flip, id){
			var image = new Image();
			
			image.src = this.src;
			image.className = "block";
			image.id = id;
			image.width = this.width;
			image.height = this.height;
			image.style.position = "absolute";
			image.style.left = this.x + "px";
			image.style.top = this.y + "px";
			image.style.zIndex = 99;
			
			//flip image
			if(flip){ 
				image.style.transform = "scaleX(-1)";
			}
			
			//append to html
			image.onload = function(){
				groundElement.prepend(image);
			}
		}
		
		move(id){
			TweenMax.to("#" + id, walkDuration, {x: (-window.innerWidth / 2) + (coreyElement.clientWidth / 4) - 240, ease: Linear.easeNone, delay: 0.2});
		}
		move2(id){
				TweenMax.to("#" + id, walkDuration, {x: -window.innerWidth - 300, ease: Linear.easeNone, delay: 0.2});
		}
		reset(id){
				TweenMax.to("#" + id, 0.001, {x: 0});
		}
		hit(id){
			TweenMax.to("#" + id, 0.5, {y: -50});
			TweenMax.to("#" + id, 0.5, {y: 0, delay: 0.5});
		}
	}
	

	function setNextButtonListener() {
	
		var button = document.getElementsByClassName("next")[0];
		var menuName = currentMenu().getAttribute('value');
		
		button.onclick = function(){
			currentMenu().classList.remove("active");
			
			if(menuName == "intro") {
				menu_skills.className += menu_skills.className + " active";
			}
			else if (menuName == "skills") {
				menu_employoment.className += menu_employoment.className + " active";
			}
			else if (menuName == "employment") {
				menu_projects1.className += menu_projects1.className + " active";
			}
			else if (menuName == "projects1") {
				menu_projects.className += menu_projects.className + " active";
				document.getElementsByClassName("modal-footer")[0].innerHTML = '';
				$("#close-modal").click();
			}
			else if (menuName == "projects") {
				menu_end.className += menu_end.className + " active";
				document.getElementsByClassName("modal-footer")[0].innerHTML = '';
				$("#close-modal").click();
			}
				
			timeline.resume();
		}
	}
	
	function setMenuButtonListener() {
		
		menu_intro.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_intro.className += menu_intro.className + " active";
			TweenMax.to("#castle", 0.001, {x: 0}); // reset castle position
			TweenMax.to("#flag", 0.001, {x: 0}); // reset flag position
			TweenMax.to("#block1", 0.001, {x: 0}); // reset block position
			TweenMax.to("#block2", 0.001, {x: 0});
			TweenMax.to("#mysteryBlock", 0.001, {x: 0}); 
			timeline.resume();
			timeline.seek("intro");
		});
		menu_skills.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_skills.className += menu_skills.className + " active";
			TweenMax.to("#castle", 0.001, {x: 0});
			TweenMax.to("#flag", 0.001, {x: 0});
			TweenMax.to("#block1", 0.001, {x: 0}); // reset block position
			TweenMax.to("#block2", 0.001, {x: 0}); 
			TweenMax.to("#mysteryBlock", 0.001, {x: 0}); 
			timeline.resume();
			timeline.seek("skills");
		});
		menu_employoment.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_employoment.className += menu_employoment.className + " active";
			TweenMax.to("#castle", 0.001, {x: 0});
			TweenMax.to("#flag", 0.001, {x: 0});
			TweenMax.to("#block1", 0.001, {x: 0}); // reset block position
			TweenMax.to("#block2", 0.001, {x: 0}); 
			TweenMax.to("#mysteryBlock", 0.001, {x: 0}); 
			timeline.resume();
			timeline.seek("employment");
		});
		menu_projects1.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_projects1.className += menu_projects1.className + " active";
			TweenMax.to("#castle", 0.001, {x: 0});
			TweenMax.to("#flag", 0.001, {x: 0});
			TweenMax.to("#block1", 0.001, {x: 0}); // reset block position
			TweenMax.to("#block2", 0.001, {x: 0}); 
			TweenMax.to("#mysteryBlock", 0.001, {x: 0}); 
			timeline.resume();
			timeline.seek("projects1");
		});
		menu_projects.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_projects.className += menu_projects.className + " active";
			TweenMax.to("#castle", 0.001, {x: 0});
			TweenMax.to("#flag", 0.001, {x: 0});
			TweenMax.to("#block1", 0.001, {x: (-window.innerWidth / 2) + (coreyElement.clientWidth / 4) - 240}); // reset block position
			TweenMax.to("#block2", 0.001, {x: (-window.innerWidth / 2) + (coreyElement.clientWidth / 4) - 240});
			TweenMax.to("#mysteryBlock", 0.001, {x: (-window.innerWidth / 2) + (coreyElement.clientWidth / 4) - 240}); 
			timeline.resume();
			timeline.seek("projects");
		});
		menu_end.addEventListener("click", function(){
			currentMenu().classList.remove("active");
			menu_end.className += menu_end.className + " active";
			TweenMax.to("#block1", 0.001, {x: 0}); // reset block position
			TweenMax.to("#block2", 0.001, {x: 0}); 
			TweenMax.to("#mysteryBlock", 0.001, {x: 0}); 
			timeline.resume();
			timeline.seek("end");
		});
	}
	
	
	function coreyStand(){
		corey.stand();
	}
	
	function coreyWalk(){
		corey.walk(0.15); //walking action. parameter: speed
	}
	
	function coreyRun(){
		corey.walk(0.08);
	}
	
	function onSectionComplete() {
		timeline.pause();
		setNextButtonListener();
	}
	
	function clearChatBubbleText() {
		textContainerElement.innerHTML = '';
	}
	
	function openModal() {
		document.getElementsByClassName("modal-footer")[0].innerHTML = '<button class="button next">Continue</button></div>';
		document.getElementById("open-modal").click();
	}
	
	function currentMenu(){
		var currentMenu = document.querySelector(".nav-item.nav-link.active");
		
		return currentMenu;
	}
	
	function getRandomNum(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	
	corey = new Person();
	enemy = new Enemy();
	chatBubble = new ChatBubble("chat-bubble");
	
	start();
	
})();