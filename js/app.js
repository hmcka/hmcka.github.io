//the hamburger menu
$('.hamburger').on('click', function() {
	$('.showUpMenu').addClass('.open');

	if($('.showUpMenu').hasClass('.open')) {
		$('.showUpMenu').removeClass('.open');
	} else {
		$('.showUpMenu').addClass('.open');
	}
});


//Sliding down the section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


//Carousel
var i = 0;
var images = [];
var time = 3000;

images[0] = './images/sloth-bear.jpg';
images[1] = './images/crystal-ball.jpg';
images[2] = './images/shelter.jpg';

function changeImg() {
	document.slide.src = images[i];

	if(i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
}


//modal box on logo
var alertYou = document.getElementById('alert');
alertYou.onclick = function() {
    alert('HMcKA = 1 chick that likes to build applications')
}

