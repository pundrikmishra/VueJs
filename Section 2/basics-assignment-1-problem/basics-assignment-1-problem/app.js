const app = Vue.createApp(
    {
        data(){
            return{
                name:'Pundrik Mishra',
                age : 23,
                // imageLink: "/home/pundrik/Desktop/courses/VueJs/Section 2/pm.jpg"
                imageLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg"
            };
        },
        methods:{
            randomNum(){
                const randomNumber = Math.random();
                return randomNumber;
            },
            Age(){
                const AgeBig = this.age + 5;
                return AgeBig;
            }
        }
    }
);
app.mount("#assignment");