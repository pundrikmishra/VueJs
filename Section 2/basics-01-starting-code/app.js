const app = Vue.createApp({
    data(){
        return{
            courseGoal:'Finish the course and learn Vue!',
            vueLink: "https://www.google.com"
            // courseGoal: {"Name":"pm"}
            // courseGoal:true
        };
    },
    method:{
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 'Learn Vue!';
            } else{
                return 'Master Vue!';
            }
        }
    }

});

app.mount('#user-goal');