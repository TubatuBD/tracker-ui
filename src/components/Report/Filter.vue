<template lang="pug">
  section.tr-filter
    .tr-filter-item 显示满足如下行为模式的用户留存情况：
    .tr-filter-item.tr-filter-item-single
      span 初始行为是
      .selector
        button.btn-selector.multiselect
          span.icon-event
          span.multiselect-selected-text 任意事件
      button.btn-link
        span.icon-add
        span 筛选条件
    .tr-filter-item
      .filter-group-control
        .filter-group-relation(style="display: block")
          .relation-topline
          button.btn 且
          .relation-bottomline
        .filter-contain
          .filter-item
            .selector.property
              button.btn-selector
                span.icon-event-property
                span.multiselect-selected-text first_id
            .selector.function
              button.btn-selector
                span.multiselect-selected-text 等于
            .input
              .string-equal.string-notEqual
                .bootstrap-tagsinput
                  span.tag.label.label-info 123
                    span.remove
                  input(style="width: 40px")
                button.btn-link
                  span.icon-edit
                span.icon-help
            button.btn.btn-danger-small.remove
              span.icon-remove
          .filter-item
            .selector.property
              button.btn-selector
                span.icon-event-property
                span.multiselect-selected-text seesion
    .tr-filter-item.tr-filter-item-single
      span 后续行为是
      .selector
        button.btn-selector.multiselect
          span.icon-event
          span.multiselect-selected-text 任意事件
      button.btn-link
        span.icon-add
        span 筛选条件
    .tr-filter-item
      span 且用户符合
      button.btn.btn-link
        span.icon-add
        span 筛选条件
</template>

<style lang="stylus">
.tr-filter
  z-index: 90
  background: #FDFDFE
  width: 100%
  position: relative

.tr-filter-item
  border-bottom: 1px solid #EBEBEB
  padding: 5px 12px

.tr-filter-item-single
  padding-top: 10px
  padding-bottom: 10px

.selector
  display: inline-block
  position: relative

  .tr-filter-item-single &
    margin-left: 8px
    margin-right: 8px

.btn-selector
  background: #f6f8fa
  border: 1px solid #a8b7c8
  padding: 6px 10px
  display: inline-block
  outline: 0
  height: 36px
  line-height: 20px
  min-width: 60px
  font-size: 14px
  transition: background .2s ease-in-out,box-shadow .2s ease-in-out
  color: #333
  vertical-align: middle
  border-radius: 3px
  padding-right: 26px
  position: relative
  text-align: left
  &:before
    content: ""
    position: absolute
    display: inline-block
    right: 8px
    top: 43%
    width: 0
    height: 0
    vertical-align: middle
    border-top: 4px dashed
    border-right: 4px solid transparent
    border-left: 4px solid transparent

.btn-selector span
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  display: inline-block

.btn-selector:hover, .btn-selector:active, .btn-selector:focus, .btn-selector:active:focus
  border: 1px solid #a8b7c8
  background: #f6f8fa
  box-shadow: 0 0 5px rgba(137,157,180,.8)
  outline: 0

.btn-link:not(.btn-icon) span[class^=icon-]
  margin-right: 4px

.btn.btn-link
  min-width: 60px
  padding: 8px 10px
  background: transparent
  border: 0;
  outline: 0;

.filter-group-control
  align-items: center
  width: 100%
  display: flex
  flex-wrap: wrap
  position: relative

.filter-group-relation
  width: 30px
  position: absolute
  height: calc(100% - 10px)
  .relation-topline
    margin: 15px 0 0 20px
    border-left: 1px solid #ccc
    border-top: 1px solid #ccc
    width: 100%
    height: calc(50% - 33px)
  .relation-bottomline
    margin: 0 0 15px 20px
    border-left: 1px solid #ccc
    border-bottom: 1px solid #ccc
    width: 100%
    height: calc(50% - 33px)

.filter-group-control .filter-contain
  width: 94%
  padding-left: 41px

.filter-group-control .filter-item .selector.property
  width: 200px

.filter-group-control .filter-item .selector.function
  min-width: 110px

.filter-group-control .filter-item .btn-selector
  width: 100%

.filter-group-control .filter-item .selector.property, .filter-group-control .filter-item .selector.event
  margin: 4px 8px

.btn-selector span[class^=icon-]
  margin-right: 4px

.filter-group-control .filter-item .input
  margin: 0 8px
  display: inline-block

.bootstrap-tagsinput
  background-color: #fff
  display: inline-block
  color: #555
  vertical-align: middle
  max-width: 100%
  line-height: 22px
  cursor: text
  min-width: 201px
  border-radius: 2px
  padding: 0 6px 0 0
  border: 1px solid #a8b7c8
  overflow: auto
  input
    border: 0
    height: 34px
    padding: 6px 10px
    border: none
    box-shadow: none
    outline: none
    background-color: transparent
    line-height: 20px
    min-width: 60px
    font-size: 14px
    transition: background .2s ease-in-out,box-shadow .2s ease-in-out
    color: #212121
    border-radius: 3px
    vertical-align: middle
  .label-info
    font-size: 12px;
    font-weight: 300;
    color: #745EC5;
    border: 1px solid #745EC5;
    background-color: #f5f4fb;
    position: relative;
    height: 24px;
    padding-right: 28px;
    padding-top: 6px;
    float: left;
    margin-bottom: 2px;
    margin-top: 5px
    margin-left: 6px
    margin-right: 2px
    span.remove
      display: inline-block
      width: 22px
      height: 23px
      font-size: 14px
      line-height: 21px
      position: absolute
      right: 0
      top: 0
      border-radius: 0 3px 3px 0
      transition: background .2s
      margin-left: 8px
      cursor: pointer
      &:hover
        color: #fff
        background: #E55B41
        border-left: 1px solid #5840b0
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05)
      &:after
        content: "x"
        padding: 0px 2px
</style>

