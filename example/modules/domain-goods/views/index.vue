<template>
  <div>商品域{{ test }}</div>
</template>

<script>
import { test } from '^domain-goods/const/path.js'
export default {
  layout: 'test',

  data () {
    return {
      test
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
