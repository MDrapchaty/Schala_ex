// function to show/hide track music page
/*
$('#myVideo').click(function () {
    if($(this).children("#myVideo").get(0).paused){
        $(this).children("#myVideo").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children("#myVideo").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
*/
function show(target, div){
	document.getElementById(target).style.display = 'block';
	document.getElementById(div).style.display = 'none';
}


function hideSpotify(target, div){
	document.getElementById(target).style.display = 'none';
	document.getElementById(div).style.display = 'block';
}

// Video 
var myVideo = document.getElementById("myVideo"); 

// play/pause video on click home page
function playPause(){ 
if (myVideo.paused) 
  myVideo.play();
else 
  myVideo.pause();
   document.getElementById("playpause").style.display = "none"; 
  
} 



//Facebook API
window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '1479178645434581',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	    FB.AppEvents.logPageView();
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

// setup for carousel
var inc=1;

//Slick image slider about page
$(document).ready(function() {
//home page video icon





//About me image slider
$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
    });


//Music Page Carousel
$('#next').click(
				function () {
					var currentFig = "#fig" + inc;
					if (inc == 8) {
						nextFig = "#fig1";
					} else {
						nextFig = "#fig" + (inc + 1);
					}
					$(nextFig).addClass('showFig');
					$(currentFig).removeClass('showFig');	
					inc++;
					if (inc == 9) { inc = 1; } 
				}
			);	
			$('#previous').click(
				function () {
					var currentFig = "#fig" + inc;
					if (inc == 1) {
						prevFig = "#fig8";
					} else {
						prevFig = "#fig" + (inc - 1);
					}
					$(prevFig).addClass('showFig');
					$(currentFig).removeClass('showFig');	
					inc--;
					if (inc == 0) { inc = 8; } 
				}
			);	

//Night Sky 
		
		function showNightSky(){
	      document.getElementById('nightSkyLi').style.display = 'block';
        }

        function hideNightSky(){
	      document.getElementById('nightSkyLi').style.display = 'none';
        }

        function playNightSky(){
				document.getElementById('playNightSky').style.display = 'block';
				document.getElementById('nightSky').style.display = 'none';
		}

		//$('#nightSky').on('mouseover',showNightSky);
		//$('#nightSky').on('mouseout',hideNightSky);
		$('#nightSky').on('click',playNightSky); 

//Chalice 
		
		function showChalice(){
	      document.getElementById('chaliceLi').style.display = 'block';
        }

        function hideChalice(){
	      document.getElementById('chaliceLi').style.display = 'none';
        }

        function playChalice(){
				document.getElementById('playChalice').style.display = 'block';
				document.getElementById('chalice').style.display = 'none';
		}

		
		$('#chalice').on('click',playChalice); 		


//Alpha
		
		function showAlpha(){
	      document.getElementById('alphaLi').style.display = 'block';
        }

        function hideAlpha(){
	      document.getElementById('alphaLi').style.display = 'none';
        }

        function playAlpha(){
				document.getElementById('playAlpha').style.display = 'block';
				document.getElementById('alpha').style.display = 'none';
		}

	
		$('#alpha').on('click',playAlpha);		



//Algorithm
		
		function showAlgorithm(){
	      document.getElementById('algorithmLi').style.display = 'block';
        }

        function hideAlgorithm(){
	      document.getElementById('algorithmLi').style.display = 'none';
        }

        function playAlgorithm(){
				document.getElementById('playAlgorithm').style.display = 'block';
				document.getElementById('algorithm').style.display = 'none';
		}

		
		$('#algorithm').on('click',playAlgorithm);		


//Recourse
		
		function showRecourse(){
	      document.getElementById('recourseLi').style.display = 'block';
        }

        function hideRecourse(){
	      document.getElementById('recourseLi').style.display = 'none';
        }

        function playRecourse(){
				document.getElementById('playRecourse').style.display = 'block';
				document.getElementById('recourse').style.display = 'none';
		}

		
		$('#recourse').on('click',playRecourse);		

//Labyrinth
		
		function showLabyrinth(){
	      document.getElementById('labyrinthLi').style.display = 'block';
        }

        function hideLabyrinth(){
	      document.getElementById('labyrinthLi').style.display = 'none';
        }

        function playLabyrinth(){
				document.getElementById('playLabyrinth').style.display = 'block';
				document.getElementById('labyrinth').style.display = 'none';
		}

		
		$('#labyrinth').on('click',playLabyrinth);		

//Labyrinth
		
		function showTwoWorlds(){
	      document.getElementById('twoWorldsLi').style.display = 'block';
        }

        function hideTwoWorlds(){
	      document.getElementById('twoWorldsLi').style.display = 'none';
        }

        function playTwoWorlds(){
				document.getElementById('playTwoWorlds').style.display = 'block';
				document.getElementById('twoWorlds').style.display = 'none';
		}


		$('#twoWorlds').on('click',playTwoWorlds);		

//Resort
		
		function showResort(){
	      document.getElementById('resortLi').style.display = 'block';
        }

        function hideResort(){
	      document.getElementById('resortLi').style.display = 'none';
        }

        function playResort(){
				document.getElementById('playResort').style.display = 'block';
				document.getElementById('resort').style.display = 'none';
		}

		$('#resort').on('click',playResort);		



});