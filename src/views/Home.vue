<template>
  <div class="home">
    
      <div class="content">
        <div class="link-wrapper" v-for="(item,key) in getData" :key="key">
          <router-link :to="'/'+item.id">
            <coinLink :isPositive="item.percent_change_24h>0">
              <template slot="linkimg"><img width="40%" :src="'/static/'+item.url+'_large_logo.png'" /></template>
              <template slot="linktitle">{{item.name}}</template>
              <template slot="linkprice">{{ '$'+Number(item.price_usd).toFixed(2) }}</template>
              <template slot="linkchange">{{item.percent_change_24h+'%'}}</template>
            </coinLink>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import coinLink from "@/components/CoinLink.vue";

export default {
  name: "home",
  components: {
    coinLink
  },
  computed: {
    getData: function() {
      return this.$store.getters.returnData;
    }
  }
};
</script>

<style lang="scss">
.home {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  .content {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    pointer-events: none;
    .link-wrapper {
      width: 15vw;
      height: 15vw;
      min-width: 170px;
      min-height: 170px;
      box-sizing: border-box;
      pointer-events: all;
      margin: 10px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .home {
    .content {
      display: flex;
      align-content: start;
      flex-wrap: wrap;
      overflow-y: scroll;
      pointer-events: all;
      .link-wrapper {
        margin: 10px;
      }
    }
  }
}
</style>
