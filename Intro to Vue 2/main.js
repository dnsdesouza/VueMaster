
var app = new Vue({
    el: '#app',
    data:{
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyestesr", "Gender-neutral"],

        variants:[
          
            {
                variantId: 2235,
                variantColor: 'green',
                variantImage:'./assets/vmSocks-green.jpg'
            },
            {
                variantId: 2234,
                variantColor: 'blue',
                variantImage:'./assets/vmSocks-blue.jpg'
            }
        ],
       
        sizes: ['34','35','36']
        ,
       
        cart:0
    },

        methods: {
            addToCart(){
                this.cart +=1
            },
            takeOutCart(){
                if(this.cart > 0 ){
                    this.cart -=1
                }else{
                    window.alert('CARRINHO ZERADO')
                }
            },
            updateProduct(variantImage){
                this.image = variantImage
            }
        }
    
})
