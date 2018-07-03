<template>
  <div class="cursor-drag-demo">
    <div class="left-side"></div>
    <div class="splitter"></div>
    <div class="right-side"></div>
  </div>
</template>

<script>
export default {
  name: 'CursorDragDemo'
}
</script>

<style scoped>
.cursor-drag-demo {
  width: 100%;
  height: 100%;
}
.left-side {
  background: red;
  opacity: .1;
}
.splitter {
  width: 30px;
}
.right-side {
  flex: 1;
  background: blue;
  opacity: .1;
}
</style>
