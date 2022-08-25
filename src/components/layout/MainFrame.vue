<template>
  <div class="main-frame flex-box flex-column fill-height">
    <div class="top-area" style="background-color: #7594af">
      top
      <slot name="topBar"></slot>
    </div>
    <div class="middle-area flex-box fill-height">
      <div class="left-bar" style="background-color: #c49fdc">
        left
      </div>
      <div class="main-area fill-width">
        <splitpanes class="default-theme" horizontal style="height: 100%">
          <pane>
            <splitpanes>
              <pane size="10">1</pane>
              <pane>
                <Demo></Demo>
                <TableDemo></TableDemo>
              </pane>
              <pane size="10">3</pane>
            </splitpanes>
          </pane>
          <pane size="10">4</pane>
        </splitpanes>
      </div>
      <div class="right-bar" style="background-color: #c2a1b8">
        right
      </div>
    </div>
    <div class="bottom-area" style="background-color: #e388a3">
      bottom
      <slot name="buttonArea"></slot>
    </div>
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