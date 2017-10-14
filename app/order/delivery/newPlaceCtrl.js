orderApp.controller('newPlaceCtrl', function($scope, Map, $location) {
    
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
               console.log(res.geometry.location.lng());

               var loc1 = new google.maps.LatLng(56.329549, 44.026211);
               var loc2 = new google.maps.LatLng(res.geometry.location.lat(), res.geometry.location.lng());
               var dist=google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2);

               $scope.place.destination = Math.round(dist);
              $scope.place.delivery = Map.deliv(dist);
           
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
        
    Map.init();

 //time and date picker

    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 1;
      
 
  $scope.today = function() {
     $scope.dt = new Date();
   };
   $scope.today();
 
    $scope.clear = function() {
     $scope.mytime = null;
     $scope.dt = null;
     $scope.place.destination = null;
     $scope.place.delivery = null;
     $scope.place.name = null;
   };
 
  $scope.inlineOptions = {
     customClass: getDayClass,
    minDate: tomorrow,
     showWeeks: false
   };
 
   $scope.dateOptions = {
     formatYear: 'yy',
     maxDate: new Date(2029, 7, 09),
     minDate: new Date(),
    startingDay: 1
   };
 
   
   $scope.toggleMin = function() {
     $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
     $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
   };
 
   $scope.toggleMin();
 
   $scope.open1 = function() {
     $scope.popup1.opened = true;
   };
 
    $scope.setDate = function(year, month, day) {
     $scope.dt = new Date(year, month, day);
   };
 
   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
   $scope.format = $scope.formats[0];
   $scope.altInputFormats = ['M!/d!/yyyy'];
 
   $scope.popup1 = {
     opened: false
   };
 
   
   var tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   var afterTomorrow = new Date();
   afterTomorrow.setDate(tomorrow.getDate() + 1);
   $scope.events = [
     {
       date: tomorrow,
       status: 'full'
     },
     {
       date: afterTomorrow,
       status: 'partially'
     }
   ];
 
   function getDayClass(data) {
     var date = data.date,
       mode = data.mode;
     if (mode === 'day') {
       var dayToCheck = new Date(date).setHours(0,0,0,0);
 
       for (var i = 0; i < $scope.events.length; i++) {
         var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
 
         if (dayToCheck === currentDay) {
           return $scope.events[i].status;
         }
       }
     }
 
     return '';
   }
 $scope.toMenuGallery = function(){
   $location.path("/menuGallery");
 }

  });
