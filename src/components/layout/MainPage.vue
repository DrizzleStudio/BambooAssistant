<template>
  <QTabs
      v-model="tab"
      dense
      align="left"
      class="text-primary"
      outside-arrows
  >
    <QTab name="mails" label="新建查询-01"/>
    <QTab name="alarms" label="sys_user"/>
    <QTab name="movies" label="sys_permission"/>
    <QTab name="movies1" label="sys_role"/>
    <QTab name="movies2" label="sys_user_role"/>
    <QTab name="movies3" label="sys_role_permission"/>
    <QTab name="movies4" label="Movies4"/>
    <QTab name="movies5" label="Movies5"/>
    <QTab name="movies6" label="Movies6"/>
    <QTab name="movies7" label="Movies7"/>
    <QTab name="movies8" label="Movies8"/>
    <QTab name="movies9" label="Movies9"/>
    <QTab name="movies10" label="Movies10"/>
    <QTab name="movies11" label="Movies11"/>
    <QTab name="movies12" label="Movies12"/>
    <QTab name="movies13" label="Movies13"/>
    <QTab name="movies14" label="Movies14"/>
    <QTab name="movies15" label="Movies15"/>
    <QTab name="movies16" label="Movies16"/>
    <QTab name="movies17" label="Movies17"/>
    <QTab name="movies18" label="Movies18"/>
    <QTab name="movies19" label="Movies19"/>
  </QTabs>

  <div style="background-color: #ffffff;height: calc(100% - 48px)">
    <MonacoDemo></MonacoDemo>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import MonacoDemo from '/src/components/MonacoDemo.vue';

let tab = ref('mails');


</script>

<style scoped>

</style>