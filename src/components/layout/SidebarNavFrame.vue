<template>
  <div class="box-flex box-column">
    <QTabs
        v-model="tabValueOne"
        vertical
        dense
        switch-indicator
    >
      <SidebarNavItemFrame v-for="(activeComponentKey) in sidebarStore.componentListOne"
                           :component-info="componentAll[activeComponentKey]"
                           @click="sidebarNavItemClick(activeComponentKey)"
      />
    </QTabs>
    <QTabs
        class="sidebar-nav-two"
        v-model="tabValueTwo"
        vertical
        dense
        switch-indicator
    >
      <SidebarNavItemFrame v-for="(activeComponentKey) in sidebarStore.componentListTwo"
                           :component-info="componentAll[activeComponentKey]"
                           @click="sidebarNavItemClick(activeComponentKey)"/>
    </QTabs>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import componentAll from '/src/components/component-all.js';
import SidebarNavItemFrame from './SidebarNavItemFrame.vue';

let props = defineProps({
  sidebarStore: {
    required: true
  }
});

let tabValueOne = ref();
let tabValueTwo = ref();

function sidebarNavItemClick(componentName) {
  let sidebarStore = props.sidebarStore;
  if (sidebarStore.activeComponentList.indexOf(componentName) > -1) {
    sidebarStore.removeSidebarItem(componentName);
  } else {
    sidebarStore.addSidebarItem(componentName)
  }
}

</script>

<style scoped>
:deep(.sidebar-nav-two) .q-tabs__content {
  display: flex !important;
  flex-direction: column;
  justify-content: flex-end;
}

:deep(.sidebar-nav-two) .q-tab {
  max-height: 36px;
}
</style>