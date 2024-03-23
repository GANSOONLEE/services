import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

// Page
import App from './App.vue';
import Index from './pages/Index.vue';
import Service from './pages/Service.vue';
import Weather from './pages/Weather.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/index', component: Index
        },
        {
            path: '/service', component: Service
        },
        {
            path: '/weather', component: Weather
        },
    ],
})


const app = createApp(App);
app.use(router);
app.mount('#app')

// createApp(App).mount('#app')
