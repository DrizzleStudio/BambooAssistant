<template>
  <splitpanes horizontal>
    <pane>
      <slot name="DbNav"></slot>
    </pane>
    <pane>
      <slot name="DbObjects"></slot>
    </pane>
  </splitpanes>
</template>

<script setup>
</script>

<style scoped>

</style>