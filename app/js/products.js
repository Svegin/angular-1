(function () {
var app = angular.module('gemStore-products', []);


app.directive('productGallery', function () {
  return {
    restrict: 'E',
    templateUrl: 'product-gallery.html',
    controller:function(){
      this.current = 0;
       this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
    }, controllerAs: 'gallery'
  };
});

app.directive('productTitle', function() {
  return {
    restrict: 'A',
    templateUrl: 'product-title.html'
  };
});

app.directive('productDescription', function() {
  return {
    restrict: 'A',
    templateUrl: 'product-description.html'
  };
});

app.directive('productSpecs', function () {
  return {
    restrict: 'A',
    templateUrl: 'product-specs.html'
  };
});


app.directive('productTabs', function () {
  return {
    restrict: 'E',
    templateUrl: 'product-tabs.html',
    controller: function(){
      this.tab = 1;
      this.setTab = function(tab){
        this.tab = tab;
      };
      this.isSet = function(tab){
        return (this.tab === tab);
      };
    }, controllerAs: 'tab'
  };
});

})();
