<template>
  <div>
    <p>{{timer}}</p>
    <p>{{a}}</p>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('c')
export default {
  computed:{
    ...mapState(['timer','a']),
  },
  methods:{
    
  }
}
</script>