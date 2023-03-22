<template>
  <div style="height: 300px; width: 600px">
    <video
      ref="video"
      id="video"
      width="300px"
      height="300px"
      autoplay="autoplay"
    ></video>
    <canvas class="zp" id="canvas" width="300px" height="300px"> </canvas>
    <el-button type="primary" @click="getVido">11打开摄像头</el-button><br />
    <el-button type="primary" @click="takePhoto()">拍照</el-button><br />
    <el-button type="primary" @click="cancalCloseVideo()">关闭摄像头</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: this.$refs["video"]
    };
  },

  methods: {
    // 打开摄像头
    getVido() {
      // const video = document.getElementsByTagName("video")
      const video = this.$refs["video"];

      this.yincang = true;
      let constraints = {
        video: { width: 500, height: 500 }
        //audio: true //开启麦克风
      };
      /*
          这里介绍新的方法:H5新媒体接口 navigator.mediaDevices.getUserMedia()
          这个方法会提示用户是否允许媒体输入,(媒体输入主要包括相机,视频采集设备,屏幕共享服务,麦克风,A/D转换器等)
          返回的是一个Promise对象。
          如果用户同意使用权限,则会将 MediaStream对象作为resolve()的参数传给then()
          如果用户拒绝使用权限,或者请求的媒体资源不可用,则会将 PermissionDeniedError作为reject()的参数传给catch()
      */
      let _this = this;
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      // var _this=this
      promise
        .then(function (MediaStream) {
          // video.srcObject = MediaStream;
          // console.log(mediaStreamTrack);

          video.srcObject = MediaStream;
          _this.MediaStreamTrack =
            typeof MediaStream.stop === "function"
              ? MediaStream
              : MediaStream.getTracks()[0];

          // video.src = window.URL.createObjectURL(MediaStream);
          // _this.MediaStreamTrack=typeof MediaStream.stop==='function'?MediaStream:MediaStream.getTracks()[0];
          video.play();
        })
        .catch(function (PermissionDeniedError) {
          console.log(PermissionDeniedError);
        });
    },
    // 注册拍照
    takePhoto() {
      //获得Canvas对象
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.drawImage(this.video, 0, 0, 300, 300);
      var photoSrc = document
        .getElementById("canvas")
        .toDataURL("image/jpeg", 0.8);

      // console.log(photoSrc, 12121)
      this.form1.img = photoSrc;
    },

    cancalCloseVideo() {
      // location.reload()
      this.MediaStreamTrack && this.MediaStreamTrack.stop();
    },
    //成功回调
    success() {
      console.log("333");
    },
    //失败回调
    error() {
      console.log("777");
    }
  },

  mounted() {

    let constraints = {
      video: { width: 500, height: 500 }
      //audio: true //开启麦克风
    };
    console.log("navigator",navigator);
    console.log("navigator.mediaDevices",navigator.mediaDevices);
    console.log("navigator.mediaDevices.getUserMedia",navigator.mediaDevices.getUserMedia);
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(this.success)
        .catch(this.error);
    } 
  },
  // 关闭摄像头
  beforeDestroy() {
    this.cancalCloseVideo();
  }
};
</script>
