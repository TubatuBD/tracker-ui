<template lang="pug">
  article.bookmark
    header.fixed-top-bar
      .bookmark-tool-bar
        .analyse-top
          .bookmark-title-container
            span.bookmark-title 留存分析
          .report-method-container.pull-right
            span.tr-h-split
            button.btn-refresh.btn-link.btn-icon
              span.icon-refresh
            button.btn-link.btn-icon
              span.icon-download
            .more-method
              a(data-method)
                span.icon-more 
          .bookmark-content
            a.bookmark-save(data-method)
              span.icon-save
              span 保存
    .bookmark-main
      slot
</template>

<style lang="stylus">
.fixed-top-bar
  position: fixed
  top: 55px
  z-index: 99
  width: 100%
  background-color: #fff

.tr-frame .fixed-top-bar
  width: calc(100% - 240px)

.tr-frame:not(.sidebar-pack-down) .fixed-top-bar
  width: calc(100% - 63px)

.bookmark-tool-bar 
  width: 100%
  color: #475669
  border: 1px solid #EBEBEB

.analyse-top
  position: relative
  padding: 0 16px
  background: #F7F9FA

.bookmark-title-container
  display: inline-block
  vertical-align: middle

.bookmark-title
  height: 54px
  padding: 13px 0
  color: #475669
  outline: 0
  float: left
  max-width: 300px
  min-width: 30px
  overflow-x: auto
  overflow-y: hidden
  white-space: nowrap
  font-size: 20px
  font-weight: 700

.bookmark-tool-bar .bookmark-content, .bookmark-tool-bar .from-dashboard-save
  float: right
  margin-top: 16px

.bookmark-tool-bar .report-method-container
  margin-top: 13px

.bookmark-tool-bar a[data-method]
  margin: 0 10px
  color: #559FF0
  font-size: 14px
  user-select: none
  &:hover
    color: #84b9f4

.bookmark-tool-bar .icon-save
  font-size: 18px
  vertical-align: sub

.tr-h-split
  border-right: 1px solid rgba(0,0,0,.12)
  margin: 0 10px
  font-size: 14px

.pull-right
  float: right!important

.btn-link
  color: #559FF0
  transition: color .2s ease-in-out
  border: 0
  outline: 0
  background: transparent
  padding-bottom: 2px

.btn-link.btn-icon
  height: 24px
  width: 24px
  min-width: 24px
  padding: 2px

.bookmark-tool-bar button
  margin: 2px 10px 0

.bookmark-tool-bar .icon-refresh, .bookmark-tool-bar .icon-download
  color: #99A9BF
  font-size: 20px

.bookmark-tool-bar .more-method
  display: inline-block
  margin-top: 2px
  cursor: pointer

.bookmark-tool-bar .icon-more
  color: #99A9BF
  font-size: 20px
  margin-top: -8px
  display: inline-block
  vertical-align: middle

.bookmark-main
  padding-top: 56px

.btn-link span[class^=icon-]
  vertical-align: sub
</style>

