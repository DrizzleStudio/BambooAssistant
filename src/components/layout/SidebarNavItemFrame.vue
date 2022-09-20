<template>
  <QTab :name="componentInfo.id" :icon="getIconName"/>
</template>

<script setup>
import {ref, defineProps , computed} from 'vue'

let props = defineProps({
  componentInfo: {
    required: true
  }
});

let getIconName= computed(()=>{
  return 'sym_o_' + props.componentInfo.nav.icon;
})

</script>

<style scoped>
</style>