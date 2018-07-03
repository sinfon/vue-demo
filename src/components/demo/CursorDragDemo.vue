<template>
  <div class="cursor-drag-demo">
    <div class="left-side demo-el" :style="leftSideStyle"></div>
    <div class="splitter demo-el" :style="splitterStyle"></div>
    <div class="right-side demo-el"></div>
  </div>
</template>

<script>
export default {
  name: 'CursorDragDemo',
  data () {
    return {
      splitterWidth: 30,
      leftSideWidth: window.innerWidth / 2 - 15
    }
  },
  computed: {
    leftSideStyle () {
      return {
        width: this.leftSideWidth + 'px'
      }
    },
    splitterStyle () {
      return {
        width: this.splitterWidth + 'px'
      }
    }
  }
}
</script>

<style scoped>
.cursor-drag-demo {
  width: 100%;
  height: 100%;
  display: flex;
}
.demo-el {
  height: 100%;
}
.left-side {
  background: red;
  opacity: .1;
}
.splitter {
}
.right-side {
  flex: 1;
  background: blue;
  opacity: .1;
}
</style>
