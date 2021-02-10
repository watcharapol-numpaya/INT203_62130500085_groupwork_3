const app = {
    data() {
        return {
            tasks: [{
                    title: 'Shiba inu',
                    src: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26114711/Shiba-Inu-standing-in-profile-outdoors.jpg',
                    detail: 'The Shiba Inu dog breed was originally bred to flush birds and small game, and was occasionally used to hunt wild boar. They’re one of Japan’s six native breeds: Akita (large), Kishu, Hokkaido, Kai, Shikoku (medium), and Shiba (small).',
                    show: false,
                    like: false
                },
                {
                    title: 'Golden',
                    src: 'https://i.pinimg.com/originals/44/52/eb/4452eb2986b307f62b82d622f21ea90e.jpg',
                    detail: 'The Golden Retriever is one of the most popular dog breeds in the United States. The breed’s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs. ',
                    show: false,
                    like: false
                },
                {
                    title: 'Pug',
                    src: 'https://sites.google.com/site/sunakhphanthupakthae/_/rsrc/1472878435920/home/pug-dog-02.jpg',
                    detail: 'The Pug is often described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off. ',
                    show: false,
                    like: false
                }
            ]
        }
    },
    methods: {
        toggleShow(index) {
            this.tasks[index].show = !this.tasks[index].show
        },
        toggleLike(index) {
            this.tasks[index].like = !this.tasks[index].like
        }
    }
}
Vue.createApp(app).mount('#app')