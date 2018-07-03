<template>
  <div class="cursor-drag-demo">
    <div class="demo-elements">
      <div class="left-side demo-el" :style="leftSideStyle"></div>
      <div class="splitter demo-el" :style="splitterStyle" @mousedown="startDrag"></div>
      <div class="right-side demo-el"></div>
    </div>
    <div class="window-cover" v-if="isCoverShown" @mousemove="drag" @mouseup="endDrag"></div>
  </div>
</template>

<script>
export default {
  name: 'CursorDragDemo',
  data () {
    return {
      splitterWidth: 30,
      leftSideWidth: window.innerWidth / 2 - 15,
      isCoverShown: false,
      isDragStart: false,
      startCursorX: null
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
  },
  methods: {
    startDrag (event) {
      this.isDragStart = true
      this.isCoverShown = true
      this.startCursorX = event.clientX
    },
    drag (event) {
      if (this.isDragStart) {
        let currentCursorX = event.clientX
        let offset = currentCursorX - this.startCursorX
        // update start cursor X
        this.startCursorX = currentCursorX
        this.leftSideWidth = this.leftSideWidth + offset
      }
    },
    endDrag () {
      this.isDragStart = false
      this.isCoverShown = false
    }
  }
}
</script>

<style scoped>
.cursor-drag-demo {
  width: 100%;
  height: 100%;
}

.demo-elements {
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
  cursor: col-resize;
}
.splitter:hover {
  background: yellow;
  opacity: .1;
}

.right-side {
  flex: 1;
  background: blue;
  opacity: .1;
}

.window-cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(3, 3, 3, 0.1);
}
</style>
