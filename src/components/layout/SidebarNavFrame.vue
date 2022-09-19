<template>
  <div class="box-flex box-column">
    <QTabs
        v-model="tabValueOne"
        vertical
        dense
        switch-indicator
    >
      <QTab name="mails" icon="sym_o_mail"  />
      <QTab name="alarms" icon="sym_o_alarm" />
      <QTab name="movies" icon="sym_o_movie"  />
    </QTabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let tabValueOne = ref();
let tabValueTwo = ref();


</script>

<style scoped>

</style>