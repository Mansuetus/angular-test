(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('BoughtController', BoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var tobuyList = this;
  tobuyList.items = ShoppingListService.getItems();
  tobuyList.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
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

BoughtController.$inject = ['ShoppingListService'];
function BoughtController(ShoppingListService) {
  var boughtList = this;
  boughtList.items  =  ShoppingListService.getboughtItems();
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


function ShoppingListService() {
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
