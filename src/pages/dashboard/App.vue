<template lang="pug">
  #app
    dash-frame(v-slot) dashboard
</template>

<script>
import DashFrame from '@/components/DashFrame'

export default {
  name: 'app',
  components: {
    DashFrame
  }
}
</script>
