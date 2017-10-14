//одна менюшка
orderApp.factory("MenuTA", function(){
    function MenuTA(plainObject) {
        this.name = plainObject.name;
        this.set = plainObject.set;
        this.number = plainObject.number;
        this.photo = plainObject.photo;
        this.price = plainObject.price;
       };

    return MenuTA;
});
//массив менюшек
orderApp.factory("menuTakeAway", function(MenuTA) {
    var orderArr = [];

    var addToList = function(posMenu) {
        orderArr.push(posMenu);
    }

    var removeFromList = function(index) {
        orderArr.splice(index, 1);
    }

    var changeOrder = function(posMenu, index){
        orderArr[index] = posMenu;   
    }

// admin
    var load = function(plainObjectArr) {
        for (var i = 0; i < plainObjectArr.length; i++) {
            orderArr.push(new MenuTA(plainObjectArr[i]))
        }
    }

    var getAllList = function() {
        return orderArr;
    }

    var getPosMenu = function(index) {
        return orderArr[index];
    }

    var removeAll = function() {
        orderArr = [];
    }

    return {
        addToList: addToList,
        removeFromList: removeFromList,
        changeOrder: changeOrder,
        load: load,
        getAllList: getAllList,
        getPosMenu: getPosMenu,
        removeAll: removeAll
    }
})