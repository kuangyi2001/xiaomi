import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import {
    Search,
    Tab,
    Tabs,
    Tabbar,
    TabbarItem,
    Sticky,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Button,
    Icon,
    Sidebar,
    SidebarItem,
    Card,
    Image as VanImage,
    BackTop,
    Checkbox,
    CheckboxGroup,
    SwipeCell,
    Form,
    Field,
    CellGroup
} from 'vant'
import '@/mock/index.js'
import 'vant/lib/index.css'

const app = createApp(App)
app
    .use(router)
    .use(createPinia())
    .use(Search)
    .use(Tab)
    .use(Tabs)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Sticky)
    .use(Swipe)
    .use(SwipeItem)
    .use(Grid)
    .use(GridItem)
    .use(Button)
    .use(Icon)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Card)
    .use(VanImage)
    .use(BackTop)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(SwipeCell)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .mount('#app')
