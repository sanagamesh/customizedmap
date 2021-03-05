var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})


function initMap() {
	// Update MAP_ID with custom map ID
	 const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 12.937682,
			lng: 77.627054,
		},
		zoom: 15,
		mapTypeId: ("roadmap","satellite"),
		mapId: 'MAP_ID',
	});

	
	const markers = [
		[
			"Your Here",
			12.937682,
			77.627054,
			'flag.svg',
			38,
			31,
		],
		[
			"Your Here",
			12.938562,
			77.625423,
			'pin.svg',
			50,
			52,
		],
		
		
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		let marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			draggable: true,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
				
			},
			animation: google.maps.Animation.DROP,
		});
		marker.addListener("click", toggleBounce);



		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}