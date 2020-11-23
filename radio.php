<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Listen to MyCleanMusic Radio. Discover new clean songs from all over the world. Promote your own songs on our radio." />
        <meta name="keywords" content="Clean Music, Download clean music, clean songs, download clean songs, edited songs, download edited songs, edited music, download edited music, download clean" />
        <meta name="author" content="Jazzy Bloopers" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Clean Music - Radio</title>
        
        <link rel="stylesheet" href="mainStyle.css" />
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
        <script type="text/javascript" src="cleanFunctions.js"></script>
           
        

        <?php include('php_templates/mysql_connect_db.php'); ?>

<script type="text/javascript">
 searchBar_home();
 mobile_searchBar_home();


</script>
<script type="text/javascript" >
        $(document).ready(function(){
            $('.your-class').slick({
                slidesToShow: 5,
                slidesToScroll: 3,
                autoplay: false,
                autoplaySpeed: 4000,
                vertical: false,
                dots: true,
                speed:1000
                
            });
        });
    </script>

        <style type="text/css">
        
            .subhead{
                color:#993366;  
                display:inline;
                font-weight: bold;
                font-style: italic;
                font-size: large;
            }
            
            .subhead_content{
                color:#47476B;
                font-weight:bold;
                
            }
            h2{
                color:#369;
                border-bottom:solid 2px black;
            }
            
            
        </style>
        
        

    </head>
    <body>
    <div id="all_content">
            
        <div id="desktop_top_content">
            <?php include('php_templates/top_content.php'); ?>
        </div>
        <div id="mobile_top_content">
            <?php include('php_templates/mobile_top_content.php'); ?>     
        </div>
            
        <div id="inner_content" class="contact_inner_content">
            <h2 style="display:inline">Clean Radio</h2>
     
      	<iframe id="radio_frame"  src="http://www.filmon.tv/tv/channel/export?channel_id=1358&affid=227514Lw" frameborder="0" allowfullscreen></iframe>
            <br />
           
           <!--Slick carousel-->
               <div id="slick_carousel" class="your-class" style="width: 100%;margin-top:10px">
        <?php
                    $result = mysqli_query($con,"SELECT * FROM Songs ORDER BY RAND() LIMIT 20");
                    

                    while($row = mysqli_fetch_array($result)) {
                     if($row['Artist2'] != ''){
                        $artist2 = ", " . $row['Artist2'] . " ";
                        }
                        else{
                            $artist2 = "";
                        }
                     if($row['Featuring'] != ''){
                        $feat = "(ft. " . $row['Featuring'] . ")";
                        }
                        else{
                            $feat = "";
                        }
                        
                     echo "<div class='' style='text-align:center; border-right:solid black 1px'>
                                    <a  href='songs/" . $row['page'] . "' > <img style='padding-left:65px' src='songs/cover_art/" . $row['CoverArt'] . "' width='100' height='100' alt='song pic'/> </a>
                                
                                    <a  style='text-decoration:none' href='" . $row['page'] . "' >" . $row['Name'] . " - " . $row['Artist'] . " " . $artist2 . $feat . "</a> 
                                </div>";
                     
                     
                    }
                    
?> 
    </div>
    <!--end slick carousel--> 
        </div>
        
        
    
        <div id="desktop_footer">
            <?php include('php_templates/footer.php'); ?>
        </div>
        <div id="mobile_footer">
            <?php include('php_templates/mobile_footer.php'); ?>    
        </div>
        
        </div>
    
    
        
    </body>
    <?php
                // THIS WHOLE THING ADDS VIEWS TO PAGE.
                    $result = mysqli_query($con,"SELECT * FROM Webpages WHERE PageName ='contact'");

                    while($row = mysqli_fetch_array($result)) {
                     
                     $views = $row['views'];
                     echo "<input style='display:none' type='text' value='" . $views . "' />";
                     
                     $addView = $views + 1;
                     echo "<input style='display:none' type='text' value='" . $addView . "' />";
                     
                    }
                     mysqli_query($con,"UPDATE Webpages SET views =" . $addView . " WHERE PageName ='contact'"); 
                     
                    ?>  
    
<!--close database connection-->
    <?php include('php_templates/mysql_close_db.php'); ?>

</html>
