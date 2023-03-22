<template>
  <div>
    <span>haha</span>
    <!-- <img :src="imgUrl" alt="" />
    <input
      type="file"
      accept="image/*"
      capture="environment"
      style="display: none"
      @change="onRead"
    /> -->
    上传
 <input type="file" multiple="multiple" accept="image/*" placeholder="相册" @change="onRead($event)">
 <input type="file" multiple="multiple" accept="image/*" capture="camera" placeholder="拍照" @change="onRead($event)">
 预览
<div v-show="fileList.length<9" v-for="(item,index) in fileList" :key='index'>
     <img :src="item">
     <i @click="delImg(index)">X</i>
</div>
  </div>
</template>
<script>
import EXIF from 'exif-js';
export default {
  data() {
    return {
      imgUrl: "",
      fileList:[]
    };
  },
 methods:{
    delImg(index) {
        this.fileList.splice(index, 1);
    },
     //相册拍照功能 fileList九张图片
     onRead(e) {
         var fileList = e.target.files;
      console.log('fileList',fileList);
         if (this.fileList.length < 9) {
             for (var i = 0; i < fileList.length; i++) {
              if (i + this.fileList.length > 8) {
                  //Toast('不允许超过九张张片'); 
              }
              var file = fileList[i];
              this.imgReverse(file, e); 
             }
         }
     },
     //处理图片翻转 仅处理安卓机 安卓机一般Orientation == 6
     imgReverse(file) {
         var that = this
         EXIF.getData(file, ()=> {
             var Orientation = EXIF.getTag(file, "Orientation");
             console.log('Orientation',Orientation);
             var reader = new FileReader();
             reader.readAsDataURL(file);
            //  var imgUrl = null;
             reader.onload = function (e) {
                 var image = new Image(),
                     canvas = document.createElement("canvas"),
                     ctx = canvas.getContext("2d");
                 image.src = e.target.result;
                 this.imgUrl = e.target.result;
                 image.onload = function () {
                     var w = image.naturalWidth,
                         h = image.naturalHeight;
                     if (w > 1000) {
                     h = h * 1000 / w;
                     w = 1000;
                     } 
                     // 6、顺时针90   8、逆时针90   3、180度
                     if (Orientation == 6) {
                         //IOS不旋转 安卓旋转
                         if (that.isiOS()) {
                             canvas.width = w;
                             canvas.height = h;
                             ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, w, h);
                         } else {
                             canvas.width = h;
                             canvas.height = w;
                             ctx.rotate(Math.PI / 2);
                             ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, -h, w, h);
                         }
                     } else if (Orientation == 3) {
                         canvas.width = w;
                         canvas.height = h;
                         ctx.rotate(Math.PI);
                         ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, -w, -h, w, h);
                     } else if (Orientation == 8) {
                         canvas.width = h;
                         canvas.height = w;
                         ctx.rotate(3 * Math.PI / 2);
                         ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, -w, 0, w, h);
                     } else {
                         canvas.width = w;
                         canvas.height = h;
                         ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, w, h);
                     }
                     var data = canvas.toDataURL(file.type, 1);
                     that.fileList.unshift(data);//fileList 显示的图片
                 console.log('fileList',that.fileList);
                 };
             };
             reader.onerror = function (e) {
                 console.log("读取出错",e);
             };
             reader.onabort = function (e) {
                 console.log("读取中断",e);
             };
             reader.onloadend = function (e) {
                 console.log("读取结束",e);
             };
         });
     },
     // 判断是都为ios机型
     isiOS() {
         var isiOS;
         var u = navigator.userAgent;
         isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
         return isiOS;
     },
     //把图片从file转为base64 有需要加  this.toBase64(e.srcElement.result,e.type);
     toBase64(base64, type) {
         var localData = base64.replace(/\r|\n/g, "").replace("data:image/jpg", "data:image/jpeg").replace("data:image/png", "data:image/jpeg");
         var wxdata = localData.replace("data:image/jpeg;base64,", "").replace("data:image/jpg;base64,", "");
         var it = {
             type: type,
             base64: wxdata
         };
         console.log(it);
     },
     // 将base64 图片转化为file格式 有需要加  this.base64ToFile(data)
     base64ToFile(data) {
         var bytes = atob(data.base64); //var bytes = base64;
         var bytesCode = new ArrayBuffer(bytes.length); // 转换为类型化数组
         var byteArray = new Uint8Array(bytesCode); // 将base64转换为ascii码
         for (var i = 0; i < bytes.length; i++) {
             byteArray[i] = bytes.charCodeAt(i);
         } // 生成Blob对象（文件对象）
         var name = data.name ? data.name : "default.png";
         var file = new File([bytesCode], name, {
             type: "image/png"
         });
         return file;
     }
}

};
</script>
