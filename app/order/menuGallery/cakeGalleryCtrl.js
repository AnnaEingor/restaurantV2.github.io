orderApp.controller("cakeGalleryCtrl", function($scope, $http){
    $scope.orderProp = "name";
    
   function Cake(cakeObj) {
     this.name = cakeObj.name;
     this.price = cakeObj.price;
     this.description = cakeObj.description;
     this.dough= cakeObj.dough;
     this.cream = cakeObj.cream;
     this.photo = cakeObj.photo;
    // this.isSelected = false;
    }
   
   
   
   $http.get("app/data/cakesTA.json").then(function(response) {
 
       $scope.cakes = [];
       for (var i = 0; i < response.data.length; i++) {
         $scope.cakes.push(new Cake(response.data[i]));
       }
   });

  //  $scope.myFunc = function(cake){
  //   for(var i=0; i<$scope.cakes.length; i++) {
  //      $scope.cakes[i].isSelected = false;
  //    }
  //    cake.isSelected = true;
  //  };
});

