<template>
  <splitpanes ref="_splitpanesRef" v-bind="$attrs">
    <slot></slot>
  </splitpanes>
</template>

<script setup>
import {provide, ref, nextTick} from 'vue';

let paneNameList = []
let paneListObj = {}
provide("registerPane", (pane) => {
  paneNameList.push(pane.name);
  paneListObj[pane.name] = pane;
})

let _splitpanesRef = ref()

function getLengthName() {
  if (_splitpanesRef.value.horizontal) {
    return "height";
  } else {
    return "width";
  }
}

/**
 * 关闭Pane需要两个操作
 * 1、隐藏后面的 splitter，如果当前 pane位于最后，则隐藏前一个。同时需要将splitter的长度给后一个或前一个 pane
 * 实现：通过在当前元素或前一个（pane位于最后时）添加 class：hide-splitter ，并设置 display：none。
 *
 * 2、将当前目标 pane宽度或高度（后面统称长度）设为 0，并将目标元素的长度分配给其余 closeFix=false 的 pane。
 *
 */
provide("closePane", (name) => {
  let lengthName = getLengthName();
  let index = paneNameList.indexOf(name);

  let modifyClassItem;
  let addLengthItem;
  if (index == paneNameList.length) {
    modifyClassItem = paneListObj[paneNameList[index - 1]];
    addLengthItem = modifyClassItem;
  } else {
    modifyClassItem = paneListObj[name];
    addLengthItem = paneListObj[paneNameList[index + 1]];
  }
  modifyClassItem._class.value = "hide-splitter";

  paneNameList.splice(index, 1);
  // 计算并修改长度
  let targetItem = paneListObj[name];
  let targetItemLength = parseLengthStr(targetItem._ref.value.$data.style[lengthName]);

  let modifyNum = 0;
  let pane;
  let modifyPaneList = [];
  paneNameList.forEach((paneName) => {
    pane = paneListObj[paneName];
    if (!pane.closeFix) {
      modifyPaneList.push(pane)
      modifyNum++
    }
  })
  let addLength = targetItemLength / modifyNum;
  let length;

  nextTick(() => {
    modifyPaneList.forEach((modifyPane) => {
      length = parseLengthStr(modifyPane._ref.value.$data.style[lengthName]);
      if (addLengthItem.name === modifyPane.name) {
        modifyPane._ref.value.$data.style[lengthName] = `calc(${length + addLength}% + 7px)`;
      } else {
        modifyPane._ref.value.$data.style[lengthName] = `${length + addLength}%`;
      }
    })
  })

  _splitpanesRef.value.panes[index].size = 0
})


// TODO
function parseLengthStr(lengthStr) {
  let index = lengthStr.indexOf("%");
  let result = lengthStr.substring(0, index);
  return Number.parseFloat(result);
}

</script>

<style>

.hide-splitter + .splitpanes__splitter {
  display: none;
}

</style>