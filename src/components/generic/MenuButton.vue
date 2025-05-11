<template>
  <div
    v-if="!isLoading"
    class="menu-button uk-navbar-right"
    href="#offcanvas-slide"
    uk-toggle
    @click="menuClick"
  >
    <div class="menu-button-border-container">
      <div
        class="menu-button-border"
        :class="buttonAnimationStep >= 7 ? 'spin' : null"
      />
      <div
        class="menu-button-border"
        :class="buttonAnimationStep >= 6 ? 'spin' : null"
      />
      <div
        class="menu-button-border"
        :class="buttonAnimationStep >= 5 ? 'spin' : null"
      />
      <div
        class="menu-button-border"
        :class="buttonAnimationStep >= 4 ? 'spin' : null"
      />
    </div>
    <div
      class="menu-button-line-container"
      :class="containerClass"
    >
      <div
        class="menu-button-line"
        :class="hideLine(3) ? 'hide' : null"
      />
      <div
        class="menu-button-line"
        :class="hideLine(4) ? 'hide' : null"
      />
      <div
        class="menu-button-line"
        :class="hideLine(5) ? 'hide' : null"
      />
      <div
        class="menu-button-line"
        :class="hideLine(6) ? 'hide' : null"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MenuButton',
  data: () => {
    return {
      buttonAnimationStep: 0,
      buttonAnimationIntervalRef: null,
      buttonAnimationForwards: true
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    }),
    containerClass: function () {
      let className = ''
      if (this.hideLine(7)) {
        className = 'glow-rings'
      } else if (
        this.buttonAnimationStep >= 0 &&
        this.buttonAnimationStep <= 2
      ) {
        className = 'glow-lines'
      }
      return className
    }
  },
  mounted () {
    const progressAnimation = () => {
      if (this.buttonAnimationForwards) {
        this.buttonAnimationStep++
        if (this.buttonAnimationStep >= 9) {
          this.buttonAnimationForwards = false
        }
      } else {
        this.buttonAnimationStep--
        if (this.buttonAnimationStep <= 0) {
          this.buttonAnimationForwards = true
        }
      }
    }
    setTimeout(() => {
      progressAnimation()
      this.buttonAnimationIntervalRef = setInterval(progressAnimation, 3000)
    }, 1000)
  },
  methods: {
    menuClick: function () {
      setTimeout(() => {
        this.doLoading(1)
      }, 100)
    },
    ...mapActions({
      doLoading: 'isLoading'
    }),
    hideLine: function (stepNumber) {
      stepNumber = this.buttonAnimationForwards ? stepNumber : stepNumber + 1
      return this.buttonAnimationStep >= stepNumber
    }
  }
}
</script>
