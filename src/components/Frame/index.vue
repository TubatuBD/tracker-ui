<template>
  <div class="tr-frame">
    <div class="tr-navbar"></div>
    <div class="tr-sidebar"></div>
    <div class="tr-main">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="stylus">
.tr-navbar
  height: 55px
  width: calc(100% - 63px)
  margin-left: 63px
  transition: all .2s ease
  color: #475669
  box-shadow: 0 1px 1px 0 rgba(166,166,166,.2)

.tr-sidebar
  z-index: 1020
  width: 240px
  height: 100%
  background: #35404F
  position: fixed
  top: 0
  left: 0
  padding: 0 0 50px
  transition: width .2s,left .2s
  box-shadow: 2px 0 10px 0 rgba(166,166,166,.5)
</style>
