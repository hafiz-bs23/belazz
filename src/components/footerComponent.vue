<template>

  <!-- buttons -->
  <div class="btn-about-us">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#AboutModal">
      <font-awesome-icon icon="fa-solid fa-circle-info" />
      আমাদের তথ্য
    </button>
  </div>
  <div class="btn-data-source">
    <button type="button" class="btn btn-success d-block" data-bs-toggle="modal" data-bs-target="#SourceModal">
      <font-awesome-icon icon="fa-solid fa-circle-question" />
      উৎস
    </button>
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

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped>

.btn-about-us{
  position: fixed;
  bottom: 0;
  right: 0;
}
.btn-data-source{
  position: fixed;
  bottom: 0;
}

</style>