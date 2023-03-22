<template>
  <div class="father1">
<div class="left"></div>
<div class="center"></div>
<div class="right"></div>
</div>
</template>
<style scoped>
.father1 {
height: 400px;
background-color: pink;
position: relative;
padding: 0 200px;
}
.left,.right {
  width: 200px;
height: 300px;
background-color: yellow;
position: absolute;
top: 0;
}
.left {
left: 0;
}
.right {
right: 0;
}
.center {
background-color: blue;height: 350px;
}
</style>