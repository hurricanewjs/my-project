<template>
<div>wjs
  <img src="@/assets/netDownload.png" alt="">
</div>
</template>
<script>
import myMixins from './mixins.js'
export default {
  mixins:[myMixins],
  // components:{},
  data(){
    return {
      data1:'1',
      data2:'2',
    }
  },
  methods:{
    fn1(){
      console.log("fn1");
    }
  },
  created(){
console.log('this.data1',this.data1);
  console.log('this.data2',this.data2);
  console.log('this.data10',this.data10);
  console.log('this.data11',this.data11);
  this.fn10()
  this.fn11()
  this.fn1()
  sessionStorage.getItem
  }
}
</script>
