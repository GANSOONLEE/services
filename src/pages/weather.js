import { createApp } from 'vue';
import '../style.css';

import Weather from './Weather.vue';

const app = createApp(Weather);
app.mount('#app')

// createApp(App).mount('#app')
