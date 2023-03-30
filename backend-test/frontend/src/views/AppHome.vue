<template>
<AppNavbar />
    <main>
        <div>
            <section class="section-details-header"></section>
                <section class="section-details-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 pl-lg-0">
                                <div class="card card-details" style="background-color: #1e2a33;">
                                <h1>The Best Way to Showcase Your Report</h1>
                                <div class="gallery">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img :src="require('../assets/gmf hangar.jpg')" class="d-block w-100" alt="hangar 1">
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card card-details card-right" id="searchDocument" style="background-color: #ffffff;">
                                    <h2>Search Document</h2>
                                   
                                    <div class="col-md-3">&nbsp;</div>
                                    <OperatorDropdown />
                                    <div class="col-md-3">&nbsp;</div>
                                    <ActypeDropdown />
                                    <div class="col-md-3">&nbsp;</div>
                                    <RegistrationDropdownVue />
                                    <div class="col-md-3">&nbsp;</div>
                                    <!-- <ConnectorDropdownVue /> -->
                                    <!-- <div class="col-md-3">&nbsp;</div> -->
                                    <ComponentDropdownVue />
                                    <div class="col-md-3">&nbsp;</div>
                                    <div class="join-container">
                                        <router-link 
                                            to="/tcComponent"
                                            id="searchButton"
                                            type="button"
                                            class="btn btn-primary btn-search btn-lg"
                                            style="display: block:margin: 1rem auto">Search
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </main>
<AppFooter />
</template>

<script lang="ts">
import axios from 'axios';
// import { Component, Vue } from 'vue-property-decorator';
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import OperatorDropdown from '@/components/OperatorDropdown.vue';
import ActypeDropdown from '@/components/ActypeDropdown.vue';
import RegistrationDropdownVue from '@/components/RegistrationDropdown.vue';
import ComponentDropdownVue from '@/components/ComponentDropdown.vue';
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

    export default {
        components: {
            AppNavbar,
            AppFooter,
            OperatorDropdown,
            ActypeDropdown,
            RegistrationDropdownVue,
            ComponentDropdownVue,

        },
        name: "AppHome",
        props: ['user']
        // setup() {
        //     const message = ref('You are not logged in!');
        //     const store = useStore();

        //     onMounted(async () => {
        //       try {
        //         const response = await fetch('http://localhost:5000/api/users', {
        //             headers: {'Content-Type': 'application/json'},
                 
        //         });

        //         const content = await response.json();

        //         await store.dispatch('setAuth', true);

        //     } catch(e) {
        //         await store.dispatch('setAuth', false);
        //     }
        //     });

        //     return {
        //         message
        //     }
        // }


        // data: () => ({
        //  operator: []
        // }),


        // mounted() {
        //     this.selectOperator();
        // },

        // methods: {
        //     selectOperator: function () {
        //         axios.get('http://localhost:5000/api/operators')
        //             .then( res => {
        //                 this.operator = res.data;
        //             })
        //             .catch(err => {
        //                 console.log(err);
        //             })
        //     }
        // },

        // methods: {
        //     initData: function() {
        //         // axios / http disini
        //         axios.get('/url')
        //         .then( res => {
        //             this.operator = res.data;
        //         })
        //     }
        // }

        // data() {
        //     re
        // },
        // created: function () {
        //     this.selectOperator()
        // },
        // methods: {
        //     selectOperator: function () {
        //         axios.get('http://localhost:5000/api/operators')
        //             .then(response => this.Operator = response.data.Operator)
        //             .catch(err => {
        //                 console.log(err);
        //             })
        //     }
        // },
    }
</script>

<style>
    .btn-group {
  min-width: 160px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
}
.btn-group a:hover {
  text-decoration: none;
}

.dropdown-toggle {
  color: #636b6f;
  min-width: 160px;
  padding: 10px 20px 10px 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dropdown-toggle:hover {
  background: #e1e1e1;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: #409FCB;
}

.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}

.caret {
  width: 0;
  position: absolute;
  top: 19px;
  height: 0;
  margin-left: -24px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  right: 10px;
}

li {
    list-style: none;
}
</style>