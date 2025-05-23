<template>
  <div id="app">
    <button @click="openSelector">打开发票选择器</button>
    <invoice-selector ref="selector" enterpriseid="" token=""></invoice-selector>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  mounted() {
    this.$nextTick(() => {
      const selector = this.$refs.selector;
      if (selector) {
        selector.addEventListener("onConfirm", (event) => {
          console.log("选中的发票:", event.detail);
        });
        selector.addEventListener("onCancel", () => {
          console.log("关闭事件");
        });
        selector.addEventListener("onError", (event) => {
          console.log("错误信息:", event.detail);
        });
      }
    });
  },
  methods: {
    openSelector() {
      this.$nextTick(() => {
        const selector = this.$refs.selector;
        if (selector && typeof selector.open === "function") {
          selector.open();
        } else {
          console.warn("invoice-selector 还未初始化或没有 open 方法");
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
