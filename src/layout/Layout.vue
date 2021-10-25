<template>
  <div class="header">
    <Header/>
  </div>
  <div  class="content">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Layout',
  components: {
    Header,
  }
}
</script>

<style scoped>
.main{
  margin-top: 50px;

}
.header{
  position: relative;
  margin-top: 0px;
}
template{
  height: 100%;
  overflow: hidden;
}
</style>