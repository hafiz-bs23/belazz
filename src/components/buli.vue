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
  <div class="hero-container">
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
    <div class="position-absolute bottom-0 end-0">
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AboutModal">
        <font-awesome-icon icon="fa-solid fa-circle-info" />
        আমাদের তথ্য
      </button>
    </div>
    <div class="position-absolute bottom-0 start-0">
      <button type="button" class="btn btn-success d-block" data-bs-toggle="modal" data-bs-target="#SourceModal">
        <font-awesome-icon icon="fa-solid fa-circle-question" />
        উৎস
      </button>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade" id="SourceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header mx-auto">
          <h4 class="modal-title text-center" id="exampleModalLabel">তথ্য উৎস</h4>
        </div>
        <div class="modal-body">
          <img src="/src/assets/images/icons/data-network.png" class="rounded mx-auto d-block mb-3"  height="150" alt="Source">
          <p>
            বাংলা ভাষা ব্যবহার কারির তুলনায় অনলাইনে বাংলা ভাষার ডিজিটাল সম্পদ খুবই কম। ভাষা নিয়ে কাজ করা লোকে বাঙলা ভাষার কঠিন দিক গূলোকে আঙ্গুল দিয়ে দেখিয়ে দেন এবং নিজের আপন ভাষা থেকে দূরে থাকেন।
            এতো কিছু এর পরও গুটিকয়েক লোকজন এখনো বিনা পারিশ্রমিকে নিজের ভাষা এর জন্য কাজ করে যাচ্ছেন। নিজেদের উদ্যোগে বাংলা ভাষা এর ডিজিটাল সম্পপদ এর উন্নতি সাধন করছেন। এমন কিছু মানুষের সেই অমূল্য
            সম্পদ এর সামান্য ই এখানে তুলে ধরা হয়েছে।
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">বন্ধ করুন</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="AboutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header mx-auto">
          <h4 class="modal-title text-center" id="exampleModalLabel">আমাদের তথ্য</h4>
        </div>
        <div class="modal-body mx-auto">
          <img src="/src/assets/images/icons/card.png" class="rounded mx-auto d-block mb-3"  height="150" alt="About">
          <p><b>আমিঃ </b>মোঃ হাফিজুর রহমান</p>
          <p><b>একজনঃ </b>সফটওয়্যার ক্র্যাফটম্যান</p>
          <p><b>এবংঃ </b>একজন গর্বিত <b>বাংলাদেশী</b></p>
          <p><b>মেইল করুনঃ </b>mdrahmanamin@gmail.com</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">বন্ধ করুন</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
}
.collapse{
  border-bottom-color: #e43c5c;
}
.details-button{

}
</style>