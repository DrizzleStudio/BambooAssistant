<template>
<!--  <SidebarItemFrame title="Objects">-->
    <QInput outlined v-model="model" label="Filter" clearable dense></QInput>
    <QOptionGroup
        v-model="group"
        :options="options"
        type="checkbox"
        dense
        inline
    />
    <QTree
        :nodes="simple"
        dense
        node-key="label"
    />
<!--  </SidebarItemFrame>-->
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

let simple = [
  {
    label: "table",
    icon: "sym_o_grid_on",
    children: [
      {
        label: 'sys_user'
      }, {
        label: 'sys_role'
      }, {
        label: 'sys_role_user'
      }, {
        label: 'sys_permission'
      }, {
        label: 'sys_role_permission'
      }
    ]
  }, {
    label: "views",
    icon: "sym_o_wysiwyg",
    children: [
      {
        label: 'v_user_role'
      }, {
        label: 'v_role_permission'
      }
    ]
  }, {
    label: "index",
    icon: "sym_o_pin_drop",
    children: [
      {
        label: 'i_user'
      }, {
        label: 'i_role'
      }
    ]
  }
]

</script>

<style scoped>

</style>