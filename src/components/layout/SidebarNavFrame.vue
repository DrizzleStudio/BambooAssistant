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
                           @click="sidebarNavItemClick(0,activeComponentKey)"
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
                           @click="sidebarNavItemClick(1,activeComponentKey)"/>
    </QTabs>
  </div>
</template>

<script setup>
import {ref, defineProps, onMounted} from 'vue';
import componentAll from '/src/components/component-all.js';
import SidebarNavItemFrame from './SidebarNavItemFrame.vue';

let props = defineProps({
  sidebarStore: {
    required: true
  }
});

let tabValueOne = ref();
let tabValueTwo = ref();

onMounted(() => {
  props.sidebarStore.activeComponentList.forEach((name) => {
    if (props.sidebarStore.componentListOne.indexOf(name) > -1) {
      tabValueOne.value = name;
    }
    if (props.sidebarStore.componentListTwo.indexOf(name) > -1) {
      tabValueTwo.value = name;
    }
  })
})

function sidebarNavItemClick(sidebarNavIndex, componentName) {
  let sidebarStore = props.sidebarStore;
  if (sidebarStore.activeComponentList.indexOf(componentName) > -1) {
    sidebarStore.removeSidebarItem(componentName);
    if (sidebarNavIndex == 0) {
      tabValueOne.value = "";
    } else {
      tabValueTwo.value = "";
    }
  } else {
    sidebarStore.addSidebarItem(componentName);
    if (sidebarNavIndex == 0) {
      tabValueOne.value = componentName
    } else {
      tabValueTwo.value = componentName
    }
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