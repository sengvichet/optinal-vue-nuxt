<template>
<div class="button-wrap">
  <nuxt-link
    class="button"
    :class="btnStyle"
    :to="{ path: buttonUrl }"
    > <slot/> </nuxt-link>
    </div>
</template>

<script>
export default {
  name: 'AppButtonLink',
  props: {
    btnStyle: {
      type: String,
      default: ''
    },
    buttonUrl: {
        type: String,
    }
  }
}
</script>


<style scoped>
.button {
  position: relative;
  border-radius: 4px;
  font: inherit;
  background-color: #1DB58E;
  color: white;
  padding: 5px;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 transparent inset;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 transparent inset;
  font-weight: 700;
  padding: 7px 14px;
  font-size: 1.1rem;
  -webkit-transition: box-shadow .2s ease-out;
  -moz-transition: box-shadow .2s ease-out;
  -o-transition: box-shadow .2s ease-out;
  transition: box-shadow .2s ease-out;
  border: 2px solid #1DB58E;
}

.button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#000));
    background: linear-gradient(to bottom, #fff 0%, #000 100%);
    opacity: 0.05;
}

.button:hover,
.button:active {
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 rgba(0,0,0,0.15) inset;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 rgba(0,0,0,0.15) inset;
}

.inverted {
  background-color: #ECEDF2;
  color: rgba(33, 38, 44, 1);
  border: 0;
}

.hollow {
  background: transparent;
  border: 2px solid #1DB58E;
  color: #1DB58E;
}

.inverted:hover,
.inverted:active {

}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 rgba(0,0,0,0.15) inset;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1),0 -100px 0 rgba(0,0,0,0.15) inset;
  border: 1px solid transparent;
  color: white;
}

.button.secondary {
  background: rgb(234, 156, 81);
  border-color: rgb(234, 156, 81);
}

@media (min-width: 768px) {
.button {
    padding: 12px 20px;
}
}

</style>
