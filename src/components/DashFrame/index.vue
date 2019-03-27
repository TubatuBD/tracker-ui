<template lang="pug">
  .tr-frame(:class="{'sidebar-pack-down': ispackdown}")
    .navbar.navbar-default.navbar-fixed-top.tr-navbar
      .tr_head_pack_up(@click.stop="ispackdown = !ispackdown")
        a
          span.icon-pack-up
    .tr-sidebar
    .tr-main
      slot
</template>

<script>
export default {
  data () {
    return {
      ispackdown: true
    }
  }
}
</script>


<style lang="stylus">
.tr-frame:not(.sidebar-pack-down) .icon-pack-up:before
    display: inline-block
    transform: rotateY(180deg)
    transition: all .3s ease

.tr-navbar
  height: 55px
  line-height: 55px;
  width: calc(100% - 63px)
  margin-left: 63px
  transition: all .2s ease
  color: #475669
  border: 0
  box-shadow: 0 1px 1px 0 rgba(166,166,166,.2)
  padding: 0
  a
    display: inline-block
    width: 100%
    color: #475669
    font-weight: 300
    height: 55px
    cursor: pointer
  .sidebar-pack-down &
    width: calc(100% - 240px);
    margin-left: 240px;
    transition: all .2s ease;

.tr_head_pack_up
  width: 54px
  display: inline-block
  position: relative
  vertical-align: top
  &:hover
    background-color: #F4F8FC
  .icon-pack-up
    padding-right: 15px
    display: inline-block
    font-size: 20px
    padding: 0 15px 0 20px
    color: #99A9BF
    border-right: 1px solid #E0E6ED

.tr-sidebar
  z-index: 1020
  width: 63px
  height: 100%
  background: #35404F
  position: fixed
  top: 0
  left: 0
  padding: 0 0 50px
  transition: width .2s,left .2s
  box-shadow: 2px 0 10px 0 rgba(166,166,166,.5)
  .sidebar-pack-down &
    width: 240px

.tr-main
  width: 100%
  height: 100%
  padding-left: 63px
  transition: padding-left .2s ease
  .sidebar-pack-down &
    padding-left: 240px
</style>
