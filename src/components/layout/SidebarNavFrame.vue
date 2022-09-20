<template>
  <div class="box-flex box-column">
    <QTabs
        v-model="tabValueOne"
        vertical
        dense
        switch-indicator
    >
      <SidebarNavItemFrame v-for="(activeComponentKey) in sidebarStore.activeComponentListOne" :component-info="componentAll[activeComponentKey]"/>
    </QTabs>
    <QTabs
        class="sidebar-nav-two"
        v-model="tabValueOne"
        vertical
        dense
        switch-indicator
    >
      <SidebarNavItemFrame v-for="(activeComponentKey) in sidebarStore.activeComponentListTwo" :component-info="componentAll[activeComponentKey]"/>
    </QTabs>
  </div>
</template>

<script setup>
import {ref , defineProps} from 'vue';
import componentAll from '/src/components/component-all.js';
import SidebarNavItemFrame from './SidebarNavItemFrame.vue';

let props = defineProps({
  sidebarStore: {
    required: true
  }
});

let tabValueOne = ref();
let tabValueTwo = ref();


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