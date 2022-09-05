<template>
  <SideBarFrame title="Databases">
    <template #scrollbarTop>
      <QInput ref="filterRef" filled v-model="filter" label="Filter" clearable dense>
        <!--        <template v-slot:append>-->
        <!--          <QIcon v-if="filter !== ''" name="sym_o_close" class="cursor-pointer" @click="resetFilter"/>-->
        <!--        </template>-->
      </QInput>
    </template>

    <QTree
        :nodes="simple"
        node-key="nodeId"
        :filter="filter"
        label-key="label"
        v-model:selected="selected"
        v-model:expanded="expanded"
    />
  </SideBarFrame>
</template>

<script setup lang="ts">
import {ref, watch, nextTick} from 'vue'

const filter = ref('')
const filterRef = ref()
const selected = ref(null)

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

function resetFilter() {
  filter.value = ''
  filterRef.value.focus()
}
</script>

<style scoped>

</style>