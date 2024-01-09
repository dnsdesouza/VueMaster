
var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        image: './vmSocks-green.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyestesr", "Gender-neutral"],

        variants:[
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ['34','35','36']
    }
})
