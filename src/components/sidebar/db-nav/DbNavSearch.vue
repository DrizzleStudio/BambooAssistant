<template>
  <QInput ref="filterRef" filled v-model="filter" label="Filter" clearable dense>
    <template v-slot:append>
      <QIcon v-if="filter !== ''" name="sym_o_close" class="cursor-pointer" @click="resetFilter"/>
    </template>
  </QInput>
</template>

<script setup>
import {ref, watch, nextTick, defineProps} from 'vue'
import { getSidebarApi } from '/src/api/sidebar-api.js'

let sidebarApi = getSidebarApi("DbNav")

const filter = ref('')
const filterRef = ref()

watch(filter, (newVal, oldVal) => {
      sidebarApi.scrollbarBody.ref.changeFilter(newVal)
    }
)

function resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}
</script>

<style scoped>

</style>