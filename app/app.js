var orderApp = angular.module("orderApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

orderApp.config(function($routeProvider){
    $routeProvider
    .when("/", {
      templateUrl: "app/photoGallery/photoGallery.html",
   })

  .when("/delivery", {
     templateUrl: "app/order/delivery/delivery.html",
     controller: "newPlaceCtrl"
    })
  .when("/menuGallery", {
      templateUrl: "app/order/menuGallery/menuGallery.html",
      controller: "menuGalleryCtrl"
     })
.when("/orderCake", {
        templateUrl: "app/order/menuGallery/menuCakes.html",
        controller: "cakeGalleryCtrl"
       })
  .when("/payment", {
      templateUrl: "app/order/payment/payment.html",
      // controller: "menuGalleryCtrl"
     })
  .when("/photoGallery", {
      templateUrl: "app/photoGallery/photoGallery.html",
    });
})