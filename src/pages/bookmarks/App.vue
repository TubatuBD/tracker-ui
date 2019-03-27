<template lang="pug">
  #app
    dash-frame(v-slot)
      bookmark
        report-filter
        report-viewer
</template>

<script>
import DashFrame from '@/components/DashFrame'
import Bookmark from '@/components/Container/Bookmark'
import ReportFilter from '@/components/Report/Filter'
import ReportViewer from '@/components/Report/Viewer'

export default {
  name: 'app',
  components: {
    DashFrame,
    Bookmark,
    ReportFilter,
    ReportViewer
  }
}
</script>
