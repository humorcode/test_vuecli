<template>
      <div>我是Counter:{{com_count}}</div>
</template>

<script> 
export default {
  name: 'Counter',
  computed: {
    com_count () {
      return this.$store.state.count
    }
  }
}
</script> 