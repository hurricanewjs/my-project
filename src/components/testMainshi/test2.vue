<template>
<div class="father2">
<div class="left"></div>
<div class="center"></div>
<div class="right"></div>
</div>
</template>
<style scoped>
.father2 {
height: 400px;
background-color: pink;
display: flex;
}
.left {
width: 200px;
height: 300px;
background-color: yellow;
}
.right {
width: 200px;
height: 300px;
background-color: skyblue;
}
.center {
flex: 1;
background-color: blue;
}
</style>