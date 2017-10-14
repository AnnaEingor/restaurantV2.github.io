orderApp.factory("orderService", function () {
    var orderArr = [];

    var addOrder = function (order) {
        orderArr.push(order);
    }

    var getAllOrders = function () {
        return orderArr;
    }

    var total = function () {
        var sum = 0;
        for (var i = 0; i < orderArr.length; i++) {
            var price = orderArr[i].price;
            sum += orderArr[i].quantity * price;
        }
        return sum;
    };

    return {
        addOrder: addOrder,
        getAllOrders: getAllOrders,
        total: total
    }
});