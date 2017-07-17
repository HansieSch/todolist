angular.module('backendService', []).factory('List', function ($http) {
    
    var list = {};
    
    list.createItem = function (itemData) {
        return $http.post('/item', itemData);
    };
    
    list.deleteItem = function (item_id) {
        return $http.delete('/item/' + item_id);
    };
    
    list.updateItem = function (itemData) {
        return $http.put('/item', itemData);
    };
    
    list.getItem = function (item_id) {
        return $http.get('/item/' + item_id);
    };

    list.getAll = function () {
        return $http.get('/item');
    };
    
    return list;
});