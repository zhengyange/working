<script>
    import vueArea from './vue-area.vue';
    export default {
        //data:function(){}，下面是es6写法
        data () {
            return {
                result: null,
                show: false
            }
        },
        methods: {
          handleAreaSelect(result){
            console.log(result)
            this.show = false;
          }
        },
        components: {
          vueArea
        }
        

    }
</script>
<template>
  <div>
    <div>
      <img src="../assets/logo.png" height="200" width="200">
      <a href="javascript:;" @click="show = true">Hello Vue.js!</a>
      <!-- <p v-cloak>省：{{result.province.name}} {{result.province.code}}</p>
      <p v-cloak>市：{{result.city.name}} {{result.city.code}}</p>
      <p v-cloak>区：{{result.area.name}} {{result.area.code}}</p> -->
    
    </div>
    <vue-area :show="show" @select-submit="handleAreaSelect"></vue-area>
  </div>
</template>
<style lang="sass" scoped>

</style>