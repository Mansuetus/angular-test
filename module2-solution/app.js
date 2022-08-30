(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuyList = this;
  tobuyList.items = ShoppingListCheckOffService.getItems();
  tobuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
  tobuyList.Error = function () {
    if ((tobuyList.items === undefined) ||
        (tobuyList.items !== undefined) && (tobuyList.items.length > 0)) {
      return "";
    }
    else {
      return "Error";
    }
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items  =  ShoppingListCheckOffService.getboughtItems();
  boughtList.Error = function () {
    if ((boughtList.items === undefined) ||
        (boughtList.items !== undefined) && (boughtList.items.length > 0)) {
      return "";
    }
    else {
      return "Error";
    }
  }

  // boughtList.items = ShoppingListService.getboughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var items = [
    {name: "cookies",quantity: 10},
    {name: "donuts",quantity: 2},
    {name: "fries",quantity: 1},
    {name: "mars",quantity: 5},
    {name: "snickers",quantity: 5}
  ];
  var boughtitems = [];

  service.buyItem = function (itemIndex) {
    boughtitems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
      return items;
  };
  service.getboughtItems = function () {
    return boughtitems;
  }
}
})();
