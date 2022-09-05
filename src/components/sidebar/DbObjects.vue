<template>
  <QSelect v-model="model" dense multiple clearable :options="options" label="filter"/>
</template>

<script setup>
import {ref} from 'vue';

let model = ref(null)
let options = ref([
  "table", "view", "user", "index"
])

</script>

<style scoped>

</style>