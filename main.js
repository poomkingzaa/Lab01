const product = 'Socks'
const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            info: 'test',
            image: './assets/images/socks_green.jpg',
            web: 'https://www.camt.cmu.ac.th/index.php/th/',
            inStock: true,
            onSale: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
