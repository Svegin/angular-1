(function() {
    const app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });


    const gems = [{
            name: 'Dodecahedron',
            price: 2.95,
            description: 'lorem ipsum fgdhjska hfdjkla hfjdkslakjsf hfjdks hfdjksldjf hfjdksh jshdfjk fhdjskf.',
            canPurchase: true,
            // soldOut: true,
        },
        {
            name: 'Pentagon Gem',
            price: 5.95,
            description: 'lorem ipsum fgdhjska hfdjkla hfjdkslakjsf hfjdks hfdjksldjf hfjdksh jshdfjk fhdjskf.',
            canPurchase: false,
            // soldOut: true,
        },
    ];

})();
