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
      showBuli: false,
      showKobita: false,
      showChora: false,
    }
  },
  methods:{
    updateContentStatus(param){
      this.showBuli = param === 'probad';
      this.showKobita = param === 'kobita';
      this.showChora = param === 'chora';
      this.setLastSelection(param);
    },
    getLastSelection(){
      return localStorage.getItem("lastSelection");
    },
    setLastSelection(selection){
      return localStorage.setItem("lastSelection", selection)
    }
  },
  created() {
    var initialParameter = this.getLastSelection();
    if(initialParameter !== null && initialParameter !== ''){
      this.updateContentStatus(initialParameter);
    }else {
      this.updateContentStatus('probad');
    }
  }
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
