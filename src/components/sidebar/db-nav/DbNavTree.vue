<template>
    <QTree
        :nodes="simple"
        node-key="nodeId"
        :filter="filter"
        label-key="label"
        v-model:selected="selected"
        v-model:expanded="expanded"
    />
</template>

<script setup>
import {ref, nextTick, defineExpose} from 'vue'

const filter = ref('')
const selected = ref(null)

defineExpose({
  changeFilter
})

function changeFilter(filterVal){
  filter.value = filterVal
}


let expanded = ref([])
nextTick(() => {
  expanded.value = ['1', '2', '21']
})
let simple = [
  {
    nodeId: '1',
    label: '数据库服务器-01',
    selectable: false,
    children: [
      {
        nodeId: '11',
        label: '数据库-01',
      },
      {
        nodeId: '12',
        label: '数据库-02',
        disabled: true,
      },
      {
        nodeId: '13',
        label: '数据库-03',
      }
    ]
  },
  {
    nodeId: '2',
    label: '数据库服务器-02',
    selectable: false,
    children: [
      {
        nodeId: '21',
        label: '数据库-02-01',
        selectable: false,
        children: [
          {
            nodeId: '211',
            label: '数据库-02-011'
          },
          {
            nodeId: '212', label: '数据库-02-021'
          },
          {
            nodeId: '213',
            label: '数据库-02-1'
          }
        ]
      },
      {
        nodeId: '22', label: '数据库-02-02'
      },
      {
        nodeId: '23',
        label: '数据库-02-03aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccddddddddddddddddddddeeeeeeeeeeeeee'
      }
    ]
  },
  {
    nodeId: '3',
    label: '数据库服务器-03',
    children: [
      {
        nodeId: '31', label: '数据库-02-01'
      },
      {nodeId: '32', label: '数据库-02-02'},
      {nodeId: '33', label: '数据库-02-03'}
    ]
  }
]
</script>

<style scoped>

</style>