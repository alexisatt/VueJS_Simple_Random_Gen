
const app = Vue.createApp({
    
    data() {
        return {
            cafeName: 'Magnolia Bakery',
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture:'https://randomuser.me/api/portraits/men/11.jpg',
            
        }
    },
    methods: {
        async getUser() {
  
            const coffeeRes = await fetch('https://random-data-api.com/api/dessert/random_dessert')
            const { coffeeResults } = await coffeeRes.json()

            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            //console.log(results)
            console.log(coffeeResults)

            this.firstName =  results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            
        },
    },
})

app.mount('#app')