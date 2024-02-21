
var app = new Vue({
    el: '#app',
    data:{
        brand:'Vue Masterfull',
        product: 'Socks',
        SelectedVariant: 0,
        inventory:10,
        details: ["80% cotton", "20% polyestesr", "Gender-neutral"],

        variants:[
          
            {
                variantId: 2235,
                variantColor: 'green',
                variantImage:'./assets/vmSocks-green.jpg',
                variantQuantity: 0
            },
            {
                variantId: 2234,
                variantColor: 'blue',
                variantImage:'./assets/vmSocks-blue.jpg',
                variantQuantity:10
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
                    this.inventory -=1
                }else{
                    window.alert('CARRINHO ZERADO')
                }
            },
            updateProduct(index){
                this.SelectedVariant = index
                console.log(index)
                {{index}}
            },
                  
        },

        computed: {
            title() {
                return this.brand + ' '+ this.product
            },
            image(){
                return this.variants[this.SelectedVariant].variantImage
            },
            inStock(){
                return this.variants [this.SelectedVariant].variantQuantity
            }
        }
    
})
