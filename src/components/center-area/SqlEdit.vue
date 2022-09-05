<template>
  <QToolbar class="bg-grey-7 text-white" style="height: 28px;min-height: 10px;">
    <QBtn flat round dense icon="sym_o_menu" size="sm"/>
    <QToolbarTitle>
      Sql Edit
    </QToolbarTitle>
    <QBtn flat round dense icon="sym_o_more_vert" size="sm"/>
  </QToolbar>
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