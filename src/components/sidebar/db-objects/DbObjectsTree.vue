<template>
    <QTree
        :nodes="simple"
        dense
        node-key="label"
    />
</template>

<script setup>

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