<template lang="pug">
  section.tr-viewer
    header
      .report-date-picker-wrap
      .report-name-wrap
        h4.report-name 用户先进行 任意事件，后进行 任意事件 的 7天流失 分析
      .report-config
    .report-no-data
      .report-no-data-msg
        h5 没有查找到数据
        p 请尝试调整时间段或筛选条件
</template>

<style lang="stylus">
.tr-viewer
  padding: 20px 12px 10px
  header
    width: 100%
    align-items: center
    margin-bottom: 12px

.report-no-data
  padding-top: 140px
  background-color: #FDFDFE
  width: 100%
  height: 400px
  position: relative

.report-no-data-msg
  margin: 0 auto
  width: 300px
  min-height: 112px
  border: 1px solid #C5C7E5
  border-radius: 4px
  padding: 26px 20px 20px 100px
  background: url(../../assets/no-data.png) 20px center no-repeat
  background-color: #eff0f8
  h5
    font-size: 14px
    margin-top: 10px
    margin-bottom: 10px
  p 
    font-size: 13px
    color: #848989
    margin: 0 0 10px

.report-date-picker-wrap
  width: 210px
  position: relative
  display: inline-block
  cursor: pointer
  font-size: 14px

.report-name-wrap
  width: calc(100% - 370px)!important

.report-name
  font-size: 18px
</style>

