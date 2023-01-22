<script>
import axios from 'axios'
export default {
  name: "buli",
  data(){
    return{
      title:'',
      description:'',
      showDescriptionButton: false,
      descriptionButtonLabel:'বিস্তারিত দেখুন'
    }
  },
  methods:{
    prepareTitle(){
      this.title = this.title.replaceAll('###','।<br>').replaceAll('##',',<br>').replaceAll('#','<br>');
    },
    toggleText(){
      if(this.descriptionButtonLabel === 'বিস্তারিত দেখুন'){
        this.descriptionButtonLabel = 'বন্ধ করুন';
      }else{
        this.descriptionButtonLabel = 'বিস্তারিত দেখুন';
      }
    },
    updateBuli(){
      axios.get('https://belazz.herokuapp.com/omrito/buli/provab/any')
          .then(response => {
            this.title = response.data.omrito_title;
            this.description = response.data.omrito_description;
            this.showDescriptionButton = true;
            this.prepareTitle();
          })
          .catch(error => {
            this.title='সাময়িক ভাবে সেবাটি এখন বন্ধ আছে। এ জন্য আমরা আন্তরিক ভাবে দুঃখিত। কিছু সময় পর আবার চেষ্টা করতে পারেন।'
          })
    }
  },
  mounted(){
    this.updateBuli();
  }
}

</script>

<template>
  <div class="probad-container mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-sm-1" style="height: 10vh;"></div>
        <div class="col-lg-8 col-sm-10 mt-5 text-center mb-5 align-self-center">
          <h1><div v-html="title"></div></h1>
          <div class="container text-center">
            <div class="row">
              <div class="col">
              </div>
              <div class="col-10">
                <div style="min-height: 10px;" class="mb-3">
                  <div class="collapse collapse-vertical border border-3 rounded rounded-2 border-info" id="collapseWidthExample">
                    <div class="card text-success card-body" style="width: 100%;">
                      <h5>{{ description }}</h5>
                    </div>
                  </div>
                </div>
                <div>
                  <template v-if="showDescriptionButton">
                    <button @click="toggleText" class="btn btn-success mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                      {{ descriptionButtonLabel }}
                    </button>
                  </template>
                </div>
                <div>
                  <template v-if="showDescriptionButton">
                    <button @click="updateBuli" class="btn btn-primary" type="button" >
                      পরবর্তী
                    </button>
                  </template>
                </div>
              </div>
              <div class="col">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-1" style="height: 80vh;"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.collapse{
  border-bottom-color: #e43c5c;
}
</style>