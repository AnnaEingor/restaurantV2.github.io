orderApp.controller("menuGalleryCtrl", function ($scope, $http, $location, $uibModal, menuTakeAway, orderService) {
    
      $scope.orderArr = [];
      $http.get("app/data/menuTA.json").then(function (response) {
        $scope.orderArr = response.data;
        menuTakeAway.load(response.data);
      });
    
      
      $scope.cartArr = [];
      $scope.addToCart = function (order) {
        $scope.cartArr.push(order);
        orderService.addOrder(order);
      };
    
      $scope.total = orderService.total;
    
      $scope.quantityOfPosition = 0;
    
      //TO DO delete all
      $scope.removeItem = function (item) {
        $scope.cartArr.splice(item, 1);
      };
    
      $scope.changePlus = function (item) {
        var index = $scope.cartArr.indexOf(item);
        $scope.cartArr[index].quantity++;
    
      };
      $scope.changeMinus = function (item) {
        var index = $scope.cartArr.indexOf(item);
        if ($scope.cartArr[index].quantity > 0) {
          $scope.cartArr[index].quantity--;
        }
      };
    
      
     $scope.goToPayment = function () {
         $location.path("/payment");
       };
    
    var deliv = sessionStorage.getItem("myDist");
    $scope.delivery = Number(deliv);
    
    
    //   $scope.openDetails = function (order) {
    //      $uibModal.open({
    //       templateUrl: "orders/orderFood/menuSet.html",
    //       controller: "menuSetCtrl",
    //       resolve: {
    //         order: function () {
    //           return order;
    //         }
    //       }
    
    //     });
    //   };
    });