import Vue from "vue";
import VueI18n from "vue-i18n";
// import 可以直接到导入 json 文件并使用
import zh from "./zh.js";
import en from "./en.js";
Vue.use(VueI18n); // VueI18n 必须在下方 VueI18n 创建 实例前进行安装
var i18n = new VueI18n({
    locale: "zh",
    messages: {
        zh: zh,
        en:en
    },
});
export default i18n; // 安装后导出到 main.js 中在容器的 Vue 容器实例中进行使用 new Vue({i18n})

