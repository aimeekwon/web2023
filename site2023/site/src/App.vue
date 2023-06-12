<template>
  <div>
    <div>
      <HeaderCont attr="header__wrap nanum7 bg-blue" />
      <router-view />
      <FooterCont />
    </div>

  </div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue'
import FooterCont from '@/components/FooterCont.vue'

export default ((await import('vue')).defineComponent({
  components: {
    HeaderCont,
    FooterCont
  }
}))

</script>

<style lang="scss">
@import "index.scss"
</style>
