<template>
      <div>
        <div>组件传参:{{uname}}</div>
        <router-view></router-view>
      </div>
</template>
<script>
export default {
  props: ['uname']
}
</script>