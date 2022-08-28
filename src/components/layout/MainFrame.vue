<template>
  <div class="main-frame flex-box flex-column fill-height">
    <!-- 顶部区域 -->
    <div class="top-area" style="background-color: #7594af">
      top
      <slot name="topBar"></slot>
    </div>

    <!-- 中间区域 -->
    <div class="middle-area flex-box fill-height">
      <div class="left-bar" style="background-color: #c49fdc">
        left
      </div>
      <div class="main-area fill-width">
        <splitpanes class="default-theme" horizontal style="height: 100%">
          <pane>
            <splitpanes>
              <pane size="10">
                <!-- 中间左边区域 -->
                <splitpanes horizontal>
                  <pane>
                    中间左边区域上
                  </pane>
                  <pane>
                    中间左边区域下
                  </pane>
                </splitpanes>

              </pane>

              <!-- 中间中心区域 -->
              <pane>
                <splitpanes horizontal>
                  <pane>
                    <Demo></Demo>
                  </pane>
                  <pane>
                    <TableDemo></TableDemo>
                  </pane>
                </splitpanes>
              </pane>

              <!-- 中间右边区域 -->
              <pane size="10">
                <splitpanes horizontal>
                  <pane>
                    中间右边区域上
                  </pane>
                  <pane>
                    中间右边区域下
                  </pane>
                </splitpanes>
              </pane>
            </splitpanes>
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
import Demo from '/src/components/Demo.vue'
import TableDemo from '/src/components/TableDemo.vue'


</script>

<style scoped>


</style>