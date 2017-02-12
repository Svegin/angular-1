(function() {
  var app = angular.module('gemStore', ['gemStore-products']);

  app.controller('StoreController', ['$http',function($http){
    var gemStore = this;
    gemStore.products =[];
    $http.get('products.json').then(function(json) {
		gemStore.products = json.data;
	 }).catch(function(err) {
		console.log(err);
    });
  }]);




  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);

      this.review = {};
    };
  });



   


})();
