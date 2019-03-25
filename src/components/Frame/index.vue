<template lang="pug">
  .tr-frame
    .navbar.navbar-default.navbar-fixed-top.tr-navbar
    .tr-sidebar.sidebar-pack-up
    .tr-main.sidebar-pack-up
      slot
</template>

<style lang="stylus">
.tr-navbar
  height: 55px
  width: calc(100% - 63px)
  margin-left: 63px
  transition: all .2s ease
  color: #475669
  border: 0
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
  .sidebar-pack-up&
    width: 63px

.tr-main
  width: 100%
  height: 100%
  padding-left: 240px
  transition: padding-left .2s ease
  .sidebar-pack-up&
    padding-left: 63px
</style>
