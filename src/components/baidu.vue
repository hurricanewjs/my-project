<template>
<div class="box">
  <div class="left">haha</div>
  <i-tabs value="name1">
        <i-tabPane label="标签一" name="name1">标签一的内容</i-tabPane>
        <i-tabPane label="标签二" name="name2">标签二的内容</i-tabPane>
        <i-tabPane label="标签三" name="name3">标签三的内容</i-tabPane>
    </i-tabs>

       <i-breadcrumb>
        <!-- <BreadcrumbItem to="/" v-for="(item,index) in data" :key="index">
            <Icon type="ios-home-outline"></Icon> {{item.text}}
        </BreadcrumbItem>
          <BreadcrumbItem to="/" v-for="(item,index) in data" :key="index">
            <Icon type="ios-home-outline"></Icon> {{item.text}}
        </BreadcrumbItem> -->
         <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Home
        </BreadcrumbItem>
           <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Home
        </BreadcrumbItem>
    </i-breadcrumb>
</div>
</template>
<script>
export default {
  data(){
    return {
      data:[
        {
          type:"ios-home-outline",
          text:"Home",
        },
         {
          type:"ios-home-outline",
          text:"Home",
        }, 
        {
          type:"ios-home-outline",
          text:"Home",
        },
      ]
    }
  },
  methods: {
    deepcopy1() {
      const obj1 = { name: "张三", obj: { sex: "男" } };
      const obj2 = JSON.parse(JSON.stringify(obj1));
      obj1.obj.sex = "haha";
      console.log(obj1);
      console.log(obj2);
    },
    cheapcopy2() {
      const obj1 = { name: "张三", obj: { sex: "男" } };
      const obj2 = Object.assign({}, obj1);
      obj1.obj.sex = "haha";
      console.log(obj1);
      console.log(obj2);
    },
    cheapcopy3() {
      const obj1 = { name: "张三", obj: { sex: "男" } };
      const obj2 = { ...obj1 };
      obj1.obj.sex = "haha";
      console.log(obj1);
      console.log(obj2);
    }
  },
  created() {
    console.log("111");
    this.cheapcopy3();
  }
};
</script>
<style scoped>
.box{
overflow: hidden;
}
  .left{
    float:left;
width: 100px;
height: 100px;
background-color: skyblue;
  }
  .right{
    float:right;
    width: 100px;
    padding-left: 10px;
height: 100px;
box-sizing: border-box;
width:calc(100% - 120px);
background-color: green;
    
  }
</style>
