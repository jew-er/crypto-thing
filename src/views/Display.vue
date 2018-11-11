<template>
    <div class="display">
        
        <coinDisplay />
    </div>
</template>

<script>
import coinDisplay from "@/components/CoinDisplay.vue";
export default {
  name: "Display",
  components: {
    coinDisplay
  }
};
</script>


<style lang="scss">
.display {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;
}
</style>
