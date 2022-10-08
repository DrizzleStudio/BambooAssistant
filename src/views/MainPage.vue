<template>
  <div class="main-frame box-flex box-column" style="height: 100%">
    <!-- 顶部区域 -->
    <div class="top-area" style="background-color: #7594af">
      top
      <slot name="topBar"></slot>
    </div>

    <!-- 中间区域 -->
    <div class="middle-area box-flex box-fill-height">
      <!-- 左侧图标导航 -->
      <SidebarNavFrame :sidebarStore="leftSidebarStore"></SidebarNavFrame>
      <div class="main-area box-fill-width">
        <splitpanes class="default-theme" horizontal style="height: 100%">
          <pane>
            <SplitpanesR>

              <!-- 中间左边区域 -->
              <SidebarFrame
                  ref="_leftSidebarRef"
                  name="leftSidebar"
                  isHorizontal
                  :sidebarStore="leftSidebarStore"
              ></SidebarFrame>

              <!-- 中间中心区域 -->
              <CenterArea></CenterArea>

              <!-- 中间右边区域 -->
              <PaneR :size="10" class="right-area" name="rightSidebar" :close-fix="true">
                <splitpanes horizontal>
                  <pane>
                    中间右边区域上
                  </pane>
                  <pane>
                    中间右边区域下
                  </pane>
                </splitpanes>
              </PaneR>
            </SplitpanesR>
          </pane>

          <!-- 中间底部 -->
          <pane size="10">
            <splitpanes>
              <pane>
                中间底部区域左
              </pane>
              <pane>
                中间底部区域右
              </pane>
            </splitpanes>
          </pane>
        </splitpanes>
      </div>
      <div class="right-bar" style="background-color: #c2a1b8">
        right
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="bottom-area" style="background-color: #e388a3">
      bottom
      <slot name="buttonArea"></slot>
    </div>

    <!-- 脚部区域 -->
    <div class="info-area" style="background-color: #aee7b3">
      info
      <!--    <slot name="infoArea"></slot>-->
    </div>
  </div>
</template>

<script setup>
import CenterArea from '/src/components/layout/CenterArea.vue'

import SidebarFrame from '/src/components/layout/SidebarFrame.vue';
import SidebarNavFrame from "/src/components/layout/SidebarNavFrame.vue";

import {useLeftSidebarStore} from '/src/store/sidebar/left-sidebar-store.js';

let leftSidebarStore = useLeftSidebarStore()

</script>

<style>

</style>