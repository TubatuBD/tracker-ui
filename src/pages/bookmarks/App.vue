<template lang="pug">
  #app
    frame(v-slot)
      img(src='@/assets/logo.png')
</template>
</template>


<script>
import Frame from '@/components/Frame'

export default {
  name: 'app',
  components: {
    Frame
  }
}
</script>
