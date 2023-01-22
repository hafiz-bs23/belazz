<script setup>

import NavBar from "@/components/nav-bar.vue";
import Buli from "@/components/buli.vue";
import FooterComponent from "@/components/footerComponent.vue";
import Kobita from "@/components/kobita.vue";
import axios from "axios";

</script>
<script>
export default {
  data(){
    return{
      showBuli: true,
      showKobita: false,
      showChora: false,
    }
  },
  methods:{
    updateContentStatus(param){
      this.showBuli = param === 'probad';
      this.showKobita = param === 'kobita';
      this.showChora = param === 'chora';
    }
  },
}
</script>

<template>
  <header>
    <NavBar @updateStatus="updateContentStatus"/>
  </header>
  <Buli v-if="showBuli" ></Buli>
  <Kobita v-if="showKobita"></Kobita>
  <FooterComponent />
</template>

<style scoped>


</style>
