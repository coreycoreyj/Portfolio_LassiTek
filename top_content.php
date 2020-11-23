
<div id="top_content">
	<header id="menu_bar">
		<div id="menu_bar_inner">
		<div id="header">
		   <img id="logo" src="/images/menu-button-hi.png" alt="" width="13%" style="padding:5px 0px 0px 0px" onclick="menu_open()" onmousedown="this.style.width = 'this.width - 100'" onmouseup="this.style.width = 'this.width + 100'"/> 
		   <a href="/index"><img id="logo_text" style="vertical-align: bottom" src="/images/logo_text5.png" alt="logo pic" width="250" /> </a>   		
		</div>
		<nav class="menu_nav">
			<a class="menu_button" id="menu_home" href="/index"><span class="menu_button_span"><img src="/images/home1.png" alt="Home" width="20px"/></span></a>
			<a class="menu_button" id="menu_request" href="/request"><span class="menu_button_span">Request for clean song</span></a>
			<a class="menu_button" id="menu_promote" href="/promote"><span class="menu_button_span">Promote</span></a>
			<a class="menu_button" id="menu_blog" href="/blog"><span class="menu_button_span">Blog</span></a>
			<a class="menu_button" id="menu_about" href ="/about"><span class="menu_button_span">About Us</span></a>
			<a class="menu_button" id="menu_contact" href="/contact"><span class="menu_button_span">Contact</span></a>
			<!--<span class="menu_button_span"><a class="menu_button" id="menu_radio" href="radio" target="_blank">Clean Radio</a></span>-->
			<a rel="nofollow" class="menu_button" href="http://eepurl.com/3dEjD"><span class="menu_button_span">Subscribe</span></a>
			<!--<span class="menu_button_span"><script type='text/javascript' src='https://ko-fi.com/widgets/widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy Me a Coffee', '#50b5c9', 'A01754NK');kofiwidget2.draw();</script></span>-->
		</nav>			   
		<nav class="social_link_group" style="float:right">
			<a rel="nofollow" target="_blank" href="https://www.facebook.com/mycleanmusic"><span class="social_link"> <img id="gray_fb" style="border:none" src="/images/icon_facebook.png" alt="fb icon" width="23" style="vertical-align: bottom;"/></span></a>
			<a rel="nofollow" target="_blank" href="https://twitter.com/MyCleanMusic"><span class="social_link"><img style="border:none" src="/images/icon_twitter.png" alt="twitter icon" width="23" style="vertical-align: bottom; "/></span></a>
			<a rel="nofollow" target="_blank" href="https://www.youtube.com/channel/UCOBGd1qxDzqE9LygI5LEbZw"><span class="social_link"> <img style="border:none" src="/images/youtube.gif" alt="youtube icon" width="23" style="vertical-align: bottom; "/></span></a>
		</nav>
	</div>
 </header>
    <div id="searchBarDiv" style="background-color:#ABB3CF">
         <script type="text/javascript">
		var url = window.location.href;
		
    	if(url == "http://localhost/index.php" || url == "https://mycleanmusic.com/"){
    		var menu = document.getElementById("menu_home");
    		menu.className += " " + "active_menu";
    	}
    	if(url == "http://localhost/mycleanmusic/request.php" || url == "https://mycleanmusic.com/request.php" || url == "https://mycleanmusic.com/request"){
    		var menu = document.getElementById("menu_request");
    		menu.className += " " + "active_menu";
    	}
    	if(url == "http://localhost/mycleanmusic/about.php" || url == "https://mycleanmusic.com/about.php" || url == "https://mycleanmusic.com/about"){
    		var menu = document.getElementById("menu_about");
    		menu.className += " " + "active_menu";
    	}
    	if(url == "http://localhost/mycleanmusic/contact.php" || url == "https://mycleanmusic.com/contact.php" || url == "https://mycleanmusic.com/contact"){
    		var menu = document.getElementById("menu_contact");
    		menu.className += " " + "active_menu";
    	}
    	if(url == "http://localhost/mycleanmusic/beats.php" || url == "https://mycleanmusic.com/beats.php" || url == "https://mycleanmusic.com/beats"){
    		var menu = document.getElementById("menu_beats");
    		menu.className += " " + "active_menu";
    	}
    	if(url == "http://localhost/mycleanmusic/featured.php" || url == "https://mycleanmusic.com/featured.php" || url == "https://mycleanmusic.com/featured"){
    		var menu = document.getElementById("menu_featured");
    		menu.className += " " + "active_menu";
    	}
		if(url == "http://localhost/mycleanmusic/edit_music.php" || url == "https://mycleanmusic.com/edit_music.php" || url == "https://mycleanmusic.com/edit_music"){
    		var menu = document.getElementById("menu_editor");
    		menu.className += " " + "active_menu";
    	}
		if(url == "http://localhost/mycleanmusic/promote.php" || url == "https://mycleanmusic.com/promote.php" || url == "https://mycleanmusic.com/promote"){
    		var menu = document.getElementById("menu_promote");
    		menu.className += " " + "active_menu";
    	}
    </script>
			

        	<div id="searchBar">
				
        		<form id="form" method="post" action="/search_results.php" >
					<input type="text" id="search" name="search" autocomplete="on" placeholder="Search: Song Title, Artist, etc...." onfocus="clearOnFocus(this)" onblur="showOnBlur(this)" />
 					<img src="/images/magni.png" alt="search icon" width="30" onclick="document.getElementById('form').submit();" onmousedown="this.style.width='25px'" onmouseup="this.style.width='30px'" onmouseout="this.style.width='30px'" onmouseover="this.style.cursor='pointer'"/>
					<span class="google_header_ad">
					</span>
					<br />
				</form>	
        	</div>
	</div>	
</div>        
