<template>
    <QInput outlined v-model="model" label="Filter" clearable dense></QInput>
    <QOptionGroup
        v-model="group"
        :options="options"
        type="checkbox"
        dense
        inline
    />
</template>

<script setup>
import {ref} from 'vue';

let model = ref(null)

let group = ref(['op1']);

let options = ref([
  {
    label: 'table',
    value: 'table'
  },
  {
    label: 'view',
    value: 'view'
  },
  {
    label: 'user',
    value: 'user'
  },
  {
    label: 'index',
    value: 'index'
  }
])

</script>

<style scoped>

</style>