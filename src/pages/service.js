import { createApp } from 'vue';
import '../style.css';

import Service from './Service.vue';

const app = createApp(Service);
app.mount('#app')

// createApp(App).mount('#app')
