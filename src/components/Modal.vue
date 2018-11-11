<template>
    <div class="modal-box">
        <button v-on:click="showModal" class="modal-btn">
            What's this?
        </button>
        <transition name="fade">
        <div v-on:click.self="showModal" v-if="show" class="modal-cover">
            <div class="modal-content">
                <h3> CryptoApp </h3>
                <p>Cryptocurrencies emerged in 2009
                    with the first decentralized
                    cryptocurrency - <a href="https://bitcoin.org/en/">Bitcoin</a>.
                    As of today - more than 700 digital
                    currencies exist with a total market
                    capitalization greater than 100 billion 
                    USD.
                 </p>

                 <p>
                <span>CryptoApp</span> is a real-time dashboard that 
                  displays the top 10 cryptocurrencies based 
                  on currency price, market capitalization and 
                  overall circulating supply - obtained from the 
                  leading cryptocurrency resource CoinMarketCap.   
                </p>

                <p>
                    This project was built over a weekend with <a href="https://vuejs.org/">Vue</a> 
                    it serves as a great introduction to Vuex and working with a global store and vue-router.

                </p>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "modal",
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    showModal() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
.modal-box {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  pointer-events: none;
  z-index: 4;

  .modal-btn {
    color: white;
    transition: 0.2s ease-in;
    border: 1px solid white;
    padding: 15px;
    position: absolute;
    top: 15px;
    right: 15px;
    user-select: none;
    -moz-user-select: none;
    border-radius: 10px;
    background: transparent;
    pointer-events: all;
    cursor: pointer;
    &:hover {
      color: mediumspringgreen;
      background: white;
    }
  }

  .modal-cover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: all;

    .modal-content {
      background: white;
      min-height: 500px;
      width: 500px;
      color: black;
      border-radius: 15px 15px 0px 0px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      padding: 30px;
      box-sizing: border-box;
      line-height: 1.4em;
      a {
        text-decoration: none;
        color: mediumspringgreen;
        font-weight: bold;
      }

      h3 {
        color: mediumspringgreen;
      }

      span {
        color: mediumspringgreen;
        font-weight: bold;
      }

      p {
        font-size: 0.9em;
        padding-top: 30px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
