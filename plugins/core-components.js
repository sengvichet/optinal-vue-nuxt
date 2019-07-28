import Vue from 'vue'

import AppButton from "@/components/UI/AppButton"
import AppButtonLink from "@/components/UI/AppButtonLink"
import AppControlInput from "@/components/UI/AppControlInput";
import PostList from '@/components/Posts/PostList';
import Breabcrumbs from 'vue-2-breadcrumbs';



Vue.use(Breabcrumbs);

// import AppHero from "@/components/UI/AppHero";



Vue.component('AppButton', AppButton)
Vue.component('AppButtonLink', AppButtonLink)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)
// Vue.component('AppHero', AppHero)





 