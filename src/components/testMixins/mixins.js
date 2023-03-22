 const myMixins={
  data(){
    return {
      data10:"10",
      data11:"11"
    }
  },
 methods:{
  fn10(){
    console.log("fn10");

  },
  fn11(){
    console.log("fn11");

  }
 },
 created(){
  // this.data10
  // console.log('this.data1',this.data1);
  // console.log('this.data2',this.data2);
  // console.log('this.data10',this.data10);
  // console.log('this.data11',this.data11);
  // this.fn10()
  // this.fn11()
  // this.fn1()
 }
}
export default myMixins
// // 定义一个混入对象
// var myMixin = {
//   created: function () {
//     this.hello()
//   },
//   methods: {
//     hello: function () {
//       console.log('hello from mixin!')
//     }
//   }
// }
// export default myMixin