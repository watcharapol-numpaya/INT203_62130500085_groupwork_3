const app = {
    data() {
        return {
            tasks: [{
                    title: 'Shiba inu',
                    src: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26114711/Shiba-Inu-standing-in-profile-outdoors.jpg',
                    detail: 'The Shiba Inu dog breed was originally bred to flush birds and small game, and was occasionally used to hunt wild boar. They’re one of Japan’s six native breeds: Akita (large), Kishu, Hokkaido, Kai, Shikoku (medium), and Shiba (small).',
                    
                    lovebor: true,
                    lovebold: false
                },
                {
                    title: 'Golden',
                    src: 'https://i.pinimg.com/originals/44/52/eb/4452eb2986b307f62b82d622f21ea90e.jpg',
                    detail: 'The Golden Retriever is one of the most popular dog breeds in the United States. The breed’s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs. ',

                    lovebor: true,
                    lovebold: false
                },
                {
                    title: 'Golden',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Mops_oct09_cropped2.jpg',
                    detail: 'The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often light brown (fawn) or black, and a compact, square body with well-developed muscles. ',

                    lovebor: true,
                    lovebold: false
                },
                {
                    title: 'Golden',
                    src: 'https://i.pinimg.com/originals/7b/7b/b8/7b7bb80169c31df6b4251aa967758020.jpg',
                    detail: 'The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds. The rounded “apple” head is a breed hallmark. The erect ears and full, luminous eyes are acutely expressive. Coats come in many colors and patterns, and can be long or short.',

                    lovebor: true,
                    lovebold: false
                }
            ]
        }
    },

    methods: {
        toggleShow(index) {
            this.tasks[index].showdetail = !this.tasks[index].showdetail
        },
        toggleLike(index) {
            this.tasks[index].lovebold = !this.tasks[index].lovebold
            this.tasks[index].lovebor = !this.tasks[index].lovebor
        },

    },
    computed: {
        countLove() {
            return this.tasks.filter(t => t.lovebold).length
        }
    }


}
Vue.createApp(app).mount('#app')