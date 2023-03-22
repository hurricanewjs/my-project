<template>
  <div>
    <div>{{ $t("common.home") }}</div>
    <div>{{ $t("test") }}</div>
    <!-- <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.45/vue.cjs.js"></script> -->
    <!-- <div></div> -->
    <div @click="handleClick">打电话</div>
    <a href="sms:18888888888">发短信</a>
    <div class="box">
      <video id="video" width="300" height="300" autoplay></video>
<!-- <span>navigator.MediaDevices.getUserMedia()</span> -->
    <!-- <video src="" playinline autoplay></video> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      system: {
        win: false,

        mac: false,

        xll: false,

        ipad: false
      },
      promise:''
    };
  },
  methods: {
    handleClick() {
      if (
        this.system.win ||
        this.system.mac ||
        this.system.xll ||
        this.system.ipad
      ) {
        //如果是电脑打开
        // window.location.href = "tel:114";
        window.location.href = "sms:18888888888";

      } else {
        //如果是手机打开
        // window.location.href = "tel:114";
        window.location.href = "sms:18888888888";
      }
    }
  },
  mounted() {
    const video = document.getElementsByTagName("video")
    
   const mediaDevices=  navigator
  //  Navigator.mediaDevices.getUserMedia()
   console.log('mediaDevices: ', mediaDevices);
   navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(()=>{

    })
     this.promise = navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(()=>{
      video.play()
     })
    // let aaa = "abcd";
    // console.log(aaa.padEnd(10, "123"));
    // console.log(aaa);
    //平台、设备和操作系统

    //检测平台

//     var p = navigator.platform;
//     var w = navigator.userAgent;
//     console.log("p: ", p);
//     console.log('w: ', w);

//     this.system.win = p.indexOf("Win") == 0;

//     this.system.mac = p.indexOf("Mac") == 0;

//     this.system.x11 = p == "X11" || p.indexOf("Linux") == 0;

//     this.system.ipad =
//       navigator.userAgent.match(/iPad/i) != null ? true : false;

//     //跳转语句，如果是手机访问就自动跳转到页面
//    window.location.href = "sms:18888888888";
//    window.onerror = function (msg, url, line, col, error) {
//     console.log('msg: ', msg);
//   error.appendChild(document.createTextNode(`${url}:${line}${col}: ${msg}`))
// }

  }
};
</script>
<style scoped>
.box{
  width: 100px;
  height: 100px;

}
</style>