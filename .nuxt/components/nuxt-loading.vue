<template>
  <div class="nuxt-progress" :style="{
    'width': percent + '%',
    'height': height,
    'background-color': canSuccess ? color : failedColor,
    'opacity': show ? 1 : 0
  }"></div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'nuxt-loading',
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      throttle: 200,
      duration: 5000,
      height: '2px',
      color: 'rgba(0, 210, 128, 1)',
      failedColor: 'red',
    }
  },
  methods: {
    start () {
      this.canSuccess = true
      if (this._throttle) {
        clearTimeout(this._throttle)
      }
      if (this._timer) {
        clearInterval(this._timer)
        this._timer = null
        this.percent = 0
      }
      this._throttle = setTimeout(() => {
        this.show = true
        this._cut = 10000 / Math.floor(this.duration)
        this._timer = setInterval(() => {
          this.increase(this._cut * Math.random())
          if (this.percent > 95) {
            this.finish()
          }
        }, 100)
      }, this.throttle)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      clearTimeout(this._throttle)
      this._throttle = null
      setTimeout(() => {
        this.show = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style>
.nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
}
</style>
