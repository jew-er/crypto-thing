<template>
    <div class="coinLink">
        <div class="link-img">
           <slot name="linkimg"> </slot>
        </div>
        <div class="link-title">
            <slot name="linktitle"></slot>
        </div>
        <div class="link-info">
            
            <span class="link-price"><slot name="linkprice"></slot></span>
            <span :class="{'increasing':isPositive}" class="link-change"><slot name="linkchange"></slot></span>
        </div>
    </div>
</template>

<script>
export default {
  name: "coinLink",
  props: {
    isPositive: Boolean
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.coinLink {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in;
  &:hover {
    box-shadow: inset 0 0 60px rgba(255, 255, 255, 0.7);
  }
  .link-img {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-title {
    width: 100%;
    height: 15%;
    font-size: 1.8em;
  }

  .link-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    .link-price {
      margin: 5px;
      font-weight: bold;
    }
    .link-change {
      margin: 5px;
      color: crimson;
    }

    .increasing {
      color: springgreen;
    }
  }
}

@media only screen and (max-width: 100px) {
}
</style>
