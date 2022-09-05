<template>
  <splitpanes horizontal>
    <pane>
      <div style="background-color: #ffffff;height: 100%;">
        <MonacoDemo></MonacoDemo>
      </div>
      <!--                    <Demo></Demo>-->
      <!--                    <MonacoDemo></MonacoDemo>-->
    </pane>
    <pane>
      <TableDemo></TableDemo>
    </pane>
  </splitpanes>
</template>

<script setup>
import MonacoDemo from '/src/components/MonacoDemo.vue';
import TableDemo from '/src/components/TableDemo.vue'
</script>

<style scoped>

</style>