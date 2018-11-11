<template>
  <div id="app">
    <modal />
    <vue-particles
        color="#21ff94"
        :particleOpacity="0.5"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="2"
        linesColor="#21ff94"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
      <transition name="fade">
        <router-view/>
      </transition>
  </div>
</template>
<script>
import modal from "@/components/Modal.vue";
export default {
  components: {
    modal
  },
  created() {
    this.$store.dispatch("loadData");
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
img {
  pointer-events: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  background: linear-gradient(to top, #360033, #0b8793);
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-leave-active {
    pointer-events: none;
  }

  .fade-enter-active {
    pointer-events: all;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
