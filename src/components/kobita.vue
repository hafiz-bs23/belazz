<template>
  <div class="kobita-container mt-5">
    <div v-if="contetLoded" class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-1"></div>
        <div class="col-lg-8 col-sm-10 mt-5 text-center mb-5 align-self-center">
          <h1 class="text-center">{{ kobitaTitle }}</h1>
          <h3 class="text-center"> {{ kobitaAuthor }}</h3>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <div class="collapse show collapse-vertical border border-1 rounded rounded-3 border-success" id="collapseWidthExample">
                    <div class="card text-success card-body">
                      <h6 v-html="kobitaContent"></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click="showAKobita" class="btn btn-primary" type="button" >
            পরবর্তী
          </button>
        </div>
        <div class="col-lg-2 col-sm-1"></div>
      </div>
    </div>
    <div v-if="!contetLoded" class="bootstrap-loader">
      <div class="spinner-border text-success" style="width: 4rem; height: 4rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kobita",
  data(){
    return{
      kobitaTitle: '',
      kobitaAuthor: '',
      kobitaContent: '',
      localStoreKobita: null,
      recentLoadedKobita: [],
      contetLoded: false,
    }
  },
  methods:{
    showAKobita(){
      this.contetLoded = false;
      var loadedFormLocal = this.getKobitaFromLocal();
      if(!loadedFormLocal) {
        this.getKobitaFromRemote();
      }
    },
    getKobitaFromLocal(){
      var nextKobita = localStorage.getItem("nextKobita");
      if(nextKobita !== null && nextKobita !== ''){
        nextKobita = JSON.parse(nextKobita);
        this.kobitaTitle = nextKobita.kobitaTitle;
        this.kobitaAuthor = nextKobita.kobitaAuthor;
        this.kobitaContent = nextKobita.kobitaContent;
        this.processKobitaUkti();
        this.contetLoded = true;
        this.setAKobitaToLocal();
        return true;
      }
      return false;
    },
    getKobitaFromRemote(){
      var currentId = this.generateRandomNumber();
      axios.get('https://belazz.herokuapp.com/omrito/buli/kobita/'+currentId)
          .then(response => {
            this.contetLoded = true;
            this.kobitaTitle = response.data.title;
            this.kobitaAuthor = "";
            this.kobitaContent = response.data.content;
            this.processKobitaUkti();
            this.setAKobitaToLocal();
          })
          .catch(error => {
            this.contetLoded = true;
            this.title='সাময়িক ভাবে সেবাটি এখন বন্ধ আছে। এ জন্য আমরা আন্তরিক ভাবে দুঃখিত। কিছু সময় পর আবার চেষ্টা করতে পারেন।'
          })
    },
    setAKobitaToLocal(){
      var currentId= this.generateRandomNumber();
      axios.get('https://belazz.herokuapp.com/omrito/buli/kobita/'+currentId)
          .then(response => {
            var localKobita ={
              kobitaTitle: response.data.title,
              kobitaAuthor: "",
              kobitaContent: response.data.content,
            };
            localStorage.setItem("nextKobita", JSON.stringify(localKobita));
          })
          .catch(error => {
            this.contetLoded = true;
            localStorage.setItem("nextKobita", '');
          })
    },
    generateRandomNumber(){
      let seed = 5;
      let randomId = 1000 + ((Math.floor((Math.random() * 100) + 1)) % 89);
      while(this.checkRecentKobita(randomId)){
        randomId = 1000 + ((Math.floor((Math.random() * 100) + 1) + seed) % 89);
        seed = randomId;
      }
      this.addToRecentKobita(randomId);
      return randomId;
    },
    processKobitaUkti(){
      this.kobitaContent = this.kobitaContent
          .replaceAll('----------','<br><br>')
          .replaceAll('*##*',';<br>')
          .replaceAll('*#*','!<br>')
          .replaceAll('**','?<br>')
          .replaceAll('*',',<br>')
          .replaceAll('#','<br>');
    },
    checkRecentKobita(id){
        return this.recentLoadedKobita.includes(id);
    },
    addToRecentKobita(id){
      this.recentLoadedKobita.unshift(id);
      if(this.recentLoadedKobita.length > 10) this.removeFromRecentKobita();
    },
    removeFromRecentKobita(){
      this.recentLoadedKobita.pop();
    },
  },
  mounted() {
    this.showAKobita();
  }
}
</script>

<style scoped>
</style>