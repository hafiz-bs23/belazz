<template>
  <nav class="navbar bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand d-md-none" href="/">
        <img src="/src/assets/logo.png" alt="" width="75"  class="d-inline-block align-text-top">
      </a>
      <a class="navbar-brand d-none d-md-block d-lg-none " href="/">
        <img src="/src/assets/logo.png" alt="" width="150"  class="d-inline-block align-text-top">
      </a>
      <a class="navbar-brand d-none d-lg-block " href="/">
        <img src="/src/assets/logo.png" alt="" width="200"  class="d-inline-block align-text-top">
      </a>
    </div>
  </nav>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faHardHat} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "nav-bar",
  methods: {
    faHardHat() {
      return faHardHat
    }
  },
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

</style>