angular.module('itemCtrl', ['backendService']).controller('newItemController', function (List, $location) {

    var vm = this;

    vm.newItemData = {};

    vm.createNewItem = function () {
        if (vm.newItemData.item) {
            List.createItem(vm.newItemData).then(function (data) {
                if (data.data.success) {
                    $location.path('/');
                }
            });
        }
    };

});

angular.module('itemCtrl').controller('editItemController', function (List, $location, $routeParams) {

    var vm = this;

    vm.itemBeingEditted = null;

    List.getItem($routeParams.id).then(function (data) {
        vm.itemBeingEditted = data.data.list_item;
        var inputElement = document.querySelector('#description');
        inputElement.value = vm.itemBeingEditted.item;
    });

    vm.log = function () {
        
        // Will not evaluate to true when item description isn't changed.
        if (vm.editItemData.description) {
            List.updateItem({ id: vm.itemBeingEditted._id, item: vm.editItemData.description })
                .then(function (data) {
                    if (data.data.success) {
                        $location.path('/');
                    }
                });
        }
    };

    console.log($routeParams.id);
});