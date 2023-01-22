<template>
  <div class="kobita-container mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-1"></div>
        <div class="col-lg-8 col-sm-10 mt-5 text-center mb-5">
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
          <button @click="updateKobita" class="btn btn-primary" type="button" >
            পরবর্তী
          </button>
        </div>
        <div class="col-lg-2 col-sm-1"></div>
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
    }
  },
  methods:{
    updateKobita(){
      axios.get('https://belazz.herokuapp.com/omrito/buli/kobita/any')
          .then(response => {
            this.kobitaTitle = response.data.title;
            this.kobitaAuthor = "";
            this.kobitaContent = response.data.content;
            this.processKobitaUkti();
          })
          .catch(error => {
            this.title='সাময়িক ভাবে সেবাটি এখন বন্ধ আছে। এ জন্য আমরা আন্তরিক ভাবে দুঃখিত। কিছু সময় পর আবার চেষ্টা করতে পারেন।'
          })
    },
    processKobitaUkti(){
      this.kobitaContent = this.kobitaContent
          .replaceAll('----------','<br><br>')
          .replaceAll('*##*',';<br>')
          .replaceAll('*#*','!<br>')
          .replaceAll('**','?<br>')
          .replaceAll('*',',<br>')
          .replaceAll('#','<br>');
    }
  },
  mounted() {
    this.updateKobita();
  }
}
</script>

<style scoped>
</style>