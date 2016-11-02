<script>
    import vueArea from './vue-area.vue';
    export default {
        //data:function(){}，下面是es6写法
        data () {
            return {
                result: {
                  province: '',
                  city: '',
                  area: ''
                },
                show: false
            }
        },
        methods: {
          handleAreaSelect(result){
            console.log(result)
            this.show = false;
            this.result = result;
          }
        },
        components: {
          vueArea
        }
        

    }
</script>
<template>
  <div>
    <div class="wrap">
      <img src="../assets/logo.png">
      <a href="javascript:;" @click="show = true">选择地址</a>
      <p v-cloak>省：{{result.province.name}} {{result.province.code}}</p>
      <p v-cloak>市：{{result.city.name}} {{result.city.code}}</p>
      <p v-cloak>区：{{result.area.name}} {{result.area.code}}</p>
    
    </div>
    <vue-area :show="show" @select-submit="handleAreaSelect"></vue-area>
  </div>
</template>
<style lang="sass" scoped>
.wrap{text-align: center;
  img{width: 100px;margin-top: 50px;}
}
</style>