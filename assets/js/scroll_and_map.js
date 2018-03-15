$(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
});


function initMap() {
	var element = document.getElementById("map");
	var option = {
		zoom: 15,
		center: {lat: 49.79540855, lng: 24.00540076}
	};

	var myMap = new google.maps.Map(element, option);

	var marker = new google.maps.Marker({
		position: {lat: 49.79540855, lng: 24.00540076},
		map: myMap,
		icon: 'assets/icons/pin.png'
	});

	var InfoWindow = new google.maps.InfoWindow({
		content: '<h2>Troleibusna Street, 17, Lviv</h2>'
	});

	marker.addListener('click', function(){
		InfoWindow.open(myMap, marker);
	})
}