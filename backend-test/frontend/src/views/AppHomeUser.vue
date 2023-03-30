<template>

  <AppNavbar />
    <div>
      <section class="section-details-header"></section>
        <section class="background-radial-gradient overflow-hidden">
          <div class="container px-4 py-2 px-md-5 text-center text-lg-start my-2">
            <div class="row gx-lg-5 align-items-center mb-5">
              <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                <h1 class="my-5 display-5 fw-bold ls-tight" style="font-weight: bolder;color: hsl(0, 0%, 99%)">
                  More Efficient <br />
                  <span style="font-weight:lighter;font-style:italic;color: hsl(113, 32%, 48%)">for your business report document</span>
                </h1>
                <p class="mb-4 opacity-70" style="color: hsl(0, 0%, 75%)">
                  Here you can find Garuda & Citinlink parts based on Swift SAP Database. 
                  SWIFT or the Society for Worldwide Interbank Financial Telecommunication is 
                  a worldwide network for financial messages through which its members (i.e. financial institutions such as banks) 
                  can exchange messages related to money transfer for their customers. 
                  The messages are sent securely and reliably to the target member 
                  financial institution of SWIFT
                </p>
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
    <AppFooter />
</template>

<script lang="ts">
// import NavbarUserApp from "@/components/NavbarUserApp.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import OperatorDropdown from '@/components/OperatorDropdown.vue';
import ActypeDropdown from '@/components/ActypeDropdown.vue';
import RegistrationDropdownVue from '@/components/RegistrationDropdown.vue';
import ComponentDropdownVue from '@/components/ComponentDropdown.vue';

    export default {
        name: "AppHomeUser",
        components: {
          // NavbarUserApp
          AppNavbar,
          AppFooter,
          OperatorDropdown,
          ActypeDropdown,
          RegistrationDropdownVue,
          ComponentDropdownVue
        }
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
  color: #0082c4;
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

.card {
  margin-right: auto;
}


li {
    list-style: none;
}
</style>