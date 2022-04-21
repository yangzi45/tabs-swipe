import tabsSwipe from "./tabs.vue";

const tabs_swipe = {
  install(Vue,options){
    Vue.component(tabsSwipe.name, tabsSwipe)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.tabs_swipe = tabs_swipe;
  Vue.use(tabs_swipe);
}

export default tabs_swipe;
