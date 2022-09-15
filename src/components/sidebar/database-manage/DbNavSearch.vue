<template>
  <QInput ref="filterRef" filled v-model="filter" label="Filter" clearable dense>
    <template v-slot:append>
      <QIcon v-if="filter !== ''" name="sym_o_close" class="cursor-pointer" @click="resetFilter"/>
    </template>
  </QInput>
</template>

<script setup>
import {ref, watch, nextTick, defineProps} from 'vue'

let props = defineProps({
  sidebarApi: {
    required: true
  }
})

const filter = ref('')
const filterRef = ref()

watch(filter, (newVal, oldVal) => {
      props.sidebarApi.body.ref.changeFilter(newVal)
    }
)

function resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}
</script>

<style scoped>

</style>