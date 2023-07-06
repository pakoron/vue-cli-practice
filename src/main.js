import Vue from 'vue'
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false
// Vue.directive("border",function(el,binding){
//   // el.style.border = "solid black 2px";
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if(binding.modifiers.round){
//     el.style.borderRadius = "20px";
//   }
//   if(binding.modifiers.shadow){
//     el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
//   }
// });

Vue.filter("upperCase",function(value){
  return value.toUpperCase();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
