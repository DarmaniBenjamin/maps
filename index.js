function initMap(){
    // map options
    let options = {
        zoom: 11,
        center: {lat: 12.1165, lng: -61.6790}
    }
    // new map
    let map = new 
    google.maps.Map(document.getElementById('map'), options);



    google.maps.event.addListener(map, 'click',
    function(event){
        addMarker({coords:event.latLng})
    }
    )
    
    let markers = [
        {
            coords: {lat: 12.2183, lng: -61.6392},
            //iconImgame: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: `
                        <h1>test</h1>
                        <p>how are you doing</p>
                    `
            
        },
        {
            coords:{lat: 12.1243, lng: -61.6239},
            content: `
                        <h1>one</h1>
                        <p>test</p>
                    `
        },
        {
            coords:{lat: 12.0167, lng: -61.7667},
            content: `
                        <h1>test</h1>
                        <p>how are you doing</p>
                    `
        }
    ]

    // loop through markers
    for(let i = 0; i < markers.length; i++){
        addMarker(markers[i])
    }
    

    //Add marker function
    function addMarker(probs){
        let marker = new google.maps.Marker({
        position: probs.coords,
        map: map,
        animation: google.maps.Animation.DROP
        //icon: probs.iconImgame
        })

        //check for custon icon
        if(probs.iconImgame){
            //set icon image
            marker.setIcon(probs.iconImgame)
        }

        // check content
        if(probs.content){
            let infoWindow = new google.maps.InfoWindow({
            content: probs.content
        })

        marker.addListener('click', function(){
            infoWindow.open(map, marker)
        })
        }
    }
}