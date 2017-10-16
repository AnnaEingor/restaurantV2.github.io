orderApp.controller("cakeGalleryCtrl", function($scope, $http){
    $scope.orderProp = "name";
    
   function Cake(cakeObj) {
     this.name = cakeObj.name;
     this.price = cakeObj.price;
     this.description = cakeObj.description;
     this.photo = cakeObj.photo;
     this.isSelected = false;
    }
   
   $scope.myFunc = function(actor){
    for(var i=0; i<$scope.cakes.length; i++) {
       $scope.cakes[i].isSelected = false;
     }
     cake.isSelected = true;
   };
   
   $http.get("app/data/cakesTA.json").then(function(response) {
 
       $scope.cakes = [];
       for (var i = 0; i < response.data.length; i++) {
         $scope.cakes.push(new Cake(response.data[i]));
       }
   });
   
});

