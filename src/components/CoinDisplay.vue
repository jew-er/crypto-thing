<template>
    <div class="display-container">
            <router-link class="return-btn" to="/">

              <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>
              <p>return</p>
            </router-link>
            <div class="display-left">
              <img :src="'/static/'+getData.url+'_large_logo.png'" />
              <h3>{{getData.name}}</h3>
              <div class="display-rankbox">{{'Rank '+getData.rank}}</div>
              <p>{{getData.description}}</p>
              <a><svg height="80px" style="enable-background:new 0 0 80 80;"
                        version="1.1" viewBox="0 0 80 80" width="80px" xml:space="preserve" 
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g><path d="M29.298,63.471l-4.048,4.02c-3.509,3.478-9.216,3.481-12.723,0c-1.686-1.673-2.612-3.895-2.612-6.257
                           s0.927-4.585,2.611-6.258l14.9-14.783c3.088-3.062,8.897-7.571,13.131-3.372c1.943,1.93,5.081,1.917,7.01-0.025  c1.93-1.942,1.918-5.081-0.025-7.009c-7.197-7.142-17.834-5.822-27.098,3.37L5.543,47.941C1.968,51.49,0,56.21,0,61.234
                        s1.968,9.743,5.544,13.292C9.223,78.176,14.054,80,18.887,80c4.834,0,9.667-1.824,13.348-5.476l4.051-4.021
                         c1.942-1.928,1.953-5.066,0.023-7.009C34.382,61.553,31.241,61.542,29.298,63.471z M74.454,6.044
                        c-7.73-7.67-18.538-8.086-25.694-0.986l-5.046,5.009c-1.943,1.929-1.955,5.066-0.025,7.009c1.93,1.943,5.068,1.954,7.011,0.025
                        l5.044-5.006c3.707-3.681,8.561-2.155,11.727,0.986c1.688,1.673,2.615,3.896,2.615,6.258c0,2.363-0.928,4.586-2.613,6.259 
                        l-15.897,15.77c-7.269,7.212-10.679,3.827-12.134,2.383c-1.943-1.929-5.08-1.917-7.01,0.025c-1.93,1.942-1.918,5.081,0.025,7.009   c3.337,3.312,7.146,4.954,11.139,4.954c4.889,0,10.053-2.462,14.963-7.337l15.897-15.77C78.03,29.083,80,24.362,80,19.338  
                        C80,14.316,78.03,9.595,74.454,6.044z"/></g></svg></a>

            </div>

            <div class="display-right">
            <div class="display-right-box">
                <p> Current Price </p>
                <div class="display-row">
                <span class="display-numbers"> ${{Number(getData.price_usd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>
                <span :class="{'display-increase': isPositive}" class="display-percent" > ({{getData.percent_change_24h}}%) </span>
                </div>
            </div>
            <div class="display-right-box">
                <p> Market Total Supply </p>
                <span class="display-numbers">{{getData.total_supply.replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' '+ getData.symbol}}</span>
            </div>
            <div class="display-right-box">
                <p>Market Cap</p>
                <span class="display-numbers">${{getData.market_cap_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>           
            </div>
        </div>
     </div>
</template>

<script>
export default {
  name: "coinDisplay",
  computed: {
    getData: function() {
      let y = this.$route.params.id;
      return this.$store.getters.returnData.find(x => x.id == y) || "error";
    },
    isPositive: function() {
      return this.getData.percent_change_24h >= 0;
    }
  }
};
</script>

<style lang="scss">
.display-container {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  .return-btn {
    position: absolute;
    top: 35vh;
    left: 10px;
    pointer-events: all;
    p {
      color: white;
      transition: 0.2s ease-in;
    }
    &:hover {
      svg {
        fill: magenta;
      }
      p {
        color: magenta;
      }
    }
    svg {
      width: 50px;
      height: 50px;
      fill: white;
      transition: 0.2s ease-in;
    }
  }
  .display-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 40px;
    color: white;
    line-height: 1.3em;
    width: 50%;
    .display-rankbox {
      background: mediumvioletred;
      padding: 3px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 20px;
      font-size: 0.7em;
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 6px;
    }
    a svg {
      width: 30px;
      height: 30px;
      fill: white;
      transition: 0.2s ease-in;
      pointer-events: all;
      cursor: pointer;
      &:hover {
        fill: magenta;
      }
    }
    p {
      max-width: 450px;
      min-width: 300px;
      margin-bottom: 30px;
    }
    img {
      animation: rotate 60s infinite ease-in;
      transform-style: preserve-3d;
      margin-bottom: 10px;
      width: 35%;
      min-width: 300px;
    }
  }

  .display-right {
    color: white;
    display: flex;
    flex-direction: column;
    //align-items: center;
    width: 50%;
    box-sizing: border-box;
    padding: 20px;
    .display-right-box {
      box-sizing: border-box;
      margin-top: 30px;
      margin-bottom: 30px;
      .display-numbers {
        font-size: 2.5em;
      }

      .display-percent {
        font-size: 2.5em;
        color: crimson;
      }

      .display-increase {
        color: springgreen !important;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}

@media only screen and (max-width: 750px) {
  .display-container {
    flex-direction: column;
    overflow-y: scroll;
    pointer-events: all;
    justify-content: flex-start;
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 50px;
    .return-btn {
      top: calc(100vh - 100px);
      left: 10px;
      position: absolute;
    }
    .display-left {
      width: 100%;
      min-height: 400px;
      img {
        width: 100%;
        max-width: 250px;
        min-width: 0;
      }

      p {
        min-width: 200px;
      }
    }
    .display-right {
      width: 100%;
      .display-right-box {
        .display-numbers {
          font-size: 2em;
        }
        .display-percent {
          font-size: 2em;
        }
      }
    }
  }
}
</style>
