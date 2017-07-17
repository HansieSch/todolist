angular.module('mainCtrl', ['backendService']).controller('mainController', function(List) {

    var vm = this;

    vm.todo_list = null;

    List.getAll().then(function (data) {
        vm.todo_list = data.data.list_items;
    });

    vm.toggleDone = function (item_id, done_value) {
        if (done_value) {
            List.updateItem({ id: item_id, done: false }).then(function (data) {
                vm.todo_list.forEach((item) => {
                    
                    // Update the todo_list to reflect the change
                    if (item._id === item_id) {
                        item.done = false;
                    }
                });
            });
        } else {
            List.updateItem({ id: item_id, done: true }).then(function (data) {
                vm.todo_list.forEach((item) => {

                    // Update the todo_list to reflect the change
                    if (item._id === item_id) {
                        item.done = true;
                    }
                });
            });
        }
    };

    vm.deleteItem = function (item_id) {
        List.deleteItem(item_id).then(function (data) {
            vm.todo_list.forEach((item) => {
                if (item._id === item_id) {
                    document.querySelector('#id' + item_id).style.display = 'none';
                }
            });
        });
    };
});