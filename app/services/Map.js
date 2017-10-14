orderApp.service('Map', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(56.329549, 44.026211),
            zoom: 13,
            disableDefaultUI: true,
               
        }
     
        this.map = new google.maps.Map(document.getElementById("map"), options);
        this.places = new google.maps.places.PlacesService(this.map);
    }

     

    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({location:new google.maps.LatLng(56.329549, 44.026211), radius:'25000', query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }

    this.deliv = function (d){
        var deliv = 0;
     if (d < 3000) {
           deliv = 500
           }
          else if (d >= 3000 && d < 7000) {
           deliv = 700
         }
          else if(d>=7000 && d < 10000){
        deliv = 1000;
        }
          else {
             deliv = 0;
            alert("in your case, the cost of delivery will be determ by the manager");
           }
           return deliv;
     };
    
});



