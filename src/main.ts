import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import produceDataExternally from './data/loadDataExtern';
import { produceData } from './data/loadData';

produceDataExternally(5).then(localData => {
    (window as any).data = localData;
    createApp(App).use(router).mount('#app');
});

// (window as any).data = produceData(5);
// createApp(App).use(router).mount('#app');

