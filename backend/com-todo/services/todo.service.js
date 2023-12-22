class TodoService {
    static async get() {
        try{
            const productList = [{
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner1.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'Autumn Winter',
                sub_title:'New men',
                image: 'm07-banner2.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner3.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner4.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner5.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner6.jpg',
                link: 'shop-sidebar.html'
            }
        ];
            return Promise.resolve(productList);
        } catch(error) {
            return Promise.reject(error);
        }
    }
    static async getTrending() {
        try{
            const productList = [{
                title: 'Limited edition v-neck t-shirt',
                image: ['prod-20-1.jpg','prod-20-2.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
            {
                title: 'Hig-Rise Skinny Jean',
                image: ['prod-19-4.jpg','prod-19-1.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
            {
                title: 'Limited edition v-neck t-shirt',
                image: ['prod-20-1.jpg','prod-20-2.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
            {
                title: 'Limited edition v-neck t-shirt',
                image: ['prod-20-1.jpg','prod-20-2.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
            {
                title: 'Limited edition v-neck t-shirt',
                image: ['prod-20-1.jpg','prod-20-2.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
            {
                title: 'Limited edition v-neck t-shirt',
                image: ['prod-20-1.jpg','prod-20-2.jpg'],
                link: 'shop-sidebar.html',
                price: '$49.00',
                oldPrice: '$60.00'
            },
        ];
            return Promise.resolve(productList);
        } catch(error) {
            return Promise.reject(error);
        }
    }
}
export default TodoService;