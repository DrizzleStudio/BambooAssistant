<template>
  <PaneR ref="paneRef" :size="sidebarStore[sizeKey]" :name="name">
    <splitpanes horizontal>
      <SidebarItemFrame v-for="(activeComponentKey) in sidebarStore.activeComponentList"
                        :key="activeComponentKey"
                        :activeComponent="componentAll[activeComponentKey]"
                        @close="removeItem"
      ></SidebarItemFrame>
    </splitpanes>
  </PaneR>
</template>

<script setup>
import {defineProps, ref, onMounted} from 'vue';
import componentAll from '/src/components/component-all.js'
import SidebarItemFrame from '/src/components/layout/SidebarItemFrame.vue'

let props = defineProps({
  sidebarStore: {
    required: true
  },
  isHorizontal: {
    default: false,
    type: Boolean
  },
  sizeKey: {
    type: String,
    default: 'width'
  },
  name: {
    type: String,
    required: true
  }
})

onMounted(() => {
  initSidebarStore();
})

function initSidebarStore() {
  props.sidebarStore.addSidebarItem = addItem;
  props.sidebarStore.removeSidebarItem = removeItem;
}

let paneRef = ref()

function removeItem(id) {
  let activeComponentList = props.sidebarStore.activeComponentList;
  let index = activeComponentList.indexOf(id);
  activeComponentList.splice(index, 1);
  if (activeComponentList.length < 1) {
    paneRef.value.closePane();
  }
}

function addItem(id) {
  let sidebarStore = props.sidebarStore;
  if (sidebarStore.activeComponentList.length < 1) {
    sidebarStore.activeComponentList.push(id);
    paneRef.value.openPane();
  } else {
    let sidebarStore = props.sidebarStore;
    let sidebarList = [].concat(props.sidebarStore.componentListOne, props.sidebarStore.componentListTwo);
    let index = sidebarList.indexOf(id);
    let activeId;
    for (let activeIndex in sidebarStore.activeComponentList) {
      activeId = sidebarStore.activeComponentList[activeIndex];
      if (sidebarList.indexOf(activeId) > index) {
        sidebarStore.activeComponentList.splice(activeIndex, 0, id);
        return
      }
    }
    sidebarStore.activeComponentList.push(id);
  }
}

</script>

<style scoped>

</style>