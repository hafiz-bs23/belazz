<template>

  <div class="top-bar fixed-top">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between align-self-center">
            <div class="logo align-self-center">
              <a class="d-md-none" href="/">
                <img src="/src/assets/logov5.png" alt="" width="150"  class="d-inline-block align-text-top">
              </a>
              <a class="d-none d-md-block d-lg-none " href="/">
                <img src="/src/assets/logov5.png" alt="" width="200"  class="d-inline-block align-text-top">
              </a>
              <a class="d-none d-lg-block " href="/">
                <img src="/src/assets/logov5.png" alt="" width="250"  class="d-inline-block align-text-top">
              </a>
            </div>
            <div class="toggle align-self-center">
              <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"  aria-controls="offcanvasTop"><font-awesome-icon icon="fa-solid fa-bars" /></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="offcanvas-header">
            <a href="/index.html"><img src="/src/assets/logov5.png" height="50" alt="Source"></a>
            <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="d-grid gap-3 col-lg-3 col-md-6 col-12 mx-auto">
              <button class="menu-btn" type="button" @click.prevent="$emit('updateStatus','probad')" data-bs-dismiss="offcanvas">প্রবাদ-প্রবচন</button>
              <button class="menu-btn d-none" type="button" @click.prevent="$emit('updateStatus','chora')" data-bs-dismiss="offcanvas">ছড়া</button>
              <button class="menu-btn" type="button" @click.prevent="$emit('updateStatus','kobita')" data-bs-dismiss="offcanvas">কবিতা</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "nav-bar",
  methods: {
    updateStatus(contentType){

    }
  },
  emits:['updateStatus'],
  components: {FontAwesomeIcon}
}
</script>

<style scoped>
.top-bar{
  background-color: transparent;
}
.top-bar .logo {

 }
.top-bar .toggle a{
  font-size: 2rem;
  color: var(--bs-white);
  display: inline;
}
.offcanvas{
  background: rgba(0, 0, 0, 0.8 );
}
.offcanvas .btn-close{
  color: white;
}
.offcanvas.offcanvas-top{
  height: auto;
}
.menu-btn{
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  background: linear-gradient(60deg, rgba(255, 0, 59, 0.79) 0%, #000000 100%);
  padding: 2px 22px;
  border-top: solid black 1px;
  border-left: solid black 1px;
  border-right: solid white 1px;
  border-bottom: solid white 2px;
  border-radius: 50px 0px;
  transition : 300ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-transform: lowercase;
}

.menu-btn:hover{
  transition : 300ms;
  padding: 3px 30px;
  transform : translateY(-0px);
  background: black;
  color: #ffffff;
  border-top: solid white 1px;
  border-left: solid white 1px;
  border-right: solid black 1px;
  border-bottom: solid black 2px;
}

</style>