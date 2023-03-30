<template>
    <main>
        <router-view :user="user" />
    </main>
</template>

<script lang="ts">
import axios from 'axios';
// import AppNavbar from "@/components/AppNavbar";
// import AppFooter from "@/components/AppFooter";

export default {
  components: {
    // AppNavbar,
    // AppFooter
  },
    data() {
        return {
            user: null
        }
    },

    async created() {
        const response = await axios.get('users');

        this.user = response.data;
    }
}
</script>

<style>
  body {
  background-color: rgb(0, 1, 26);
  font-family: "Assistant", sans-serif, "Rowdies", cursive;
  color: #05001f;
  background: url("https://media.licdn.com/dms/image/C5622AQG1BKv2ZC1XNQ/feedshare-shrink_800/0/1618577419298?e=2147483647&v=beta&t=g9riErb2jgWuvOBKyayAjdLOmviSv65w4RTxPzrG7z4") no-repeat center center fixed;
  background-size: cover;
  -o-background-size: cover;
  width: 100%;
}

.navbar-brand img {
  max-height: 40px;
  margin-left: -100px;
}

.btn-sign {
  margin-top: -50px !important;
  margin-bottom: -50px !important;
  margin-right: -120px !important;
  height: 50px;
  border-radius: 7;
}

/* .btn-navbar-right {
  margin-top: -10px !important;
  margin-bottom: -8px !important;
  margin-right: -18px !important;
  height: 70px;
  border-radius: 0;
} */

.btn-login {
  background-color: #fff;
  color: rgb(8, 3, 82);
}
.btn-login:hover {
  background-color: rgb(11, 14, 124);
  color: #fff;
}

.section-footer a {
  color: #071c4d;
}

footer {
  
  margin-bottom: -100px;
}

.section-details-content {
  margin-top: 50px;
  
}
.section-details-content #textColor {
  color: #fff;
}
.section-details-content .card-details {
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
}
.section-details-content .card-details h1 {
  font-size: 40px;
  color: #ffffff;
  font-style: italic;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.section-details-content .card-details p {
  font-size: 18px;
  color: #b1b1b1;
}
.section-details-content .card-right {
  background-color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
}
.section-details-content .card-right h2 {
  font-size: 30px;
  text-align: center;
  color: #345174;
  font-family: "Rowdies", cursive;
}
.section-details-content .card-right p {
  margin-bottom: 0px;
  font-family: "Assistant";
  color: #05001f;
  font-style: italic;
}
.section-details-content .card-right #searchButton {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
.section-details-content .card-right #searchButton:hover {
  background-color: rgb(15, 22, 209);
  color: rgb(255, 255, 255);
}
.section-details-content .card-right .btn-search {
  background-color: #f7f7f7;
  color: rgb(10, 10, 10);
  border-radius: 0;
}
.section-details-content .card-right .btn-search:hover {
  background-color: rgb(0, 1, 26);
  color: #fff;
}

.section-table .card-details h1 {
  font-style: italic;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-left: 600px;
}
.section-table #toolbar {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 5px;
}
.section-table #buttonUpdate {
  margin-left: 15px;
}
.section-table .btn-label {
  margin-left: 20cm;
}
.section-table #buttonBar {
  margin-right: auto;
}
.section-table #buttonBarUser {
  margin-left: 720px;
}
.section-table .sub-header {
  font-weight: bold;
  font-style: italic;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.section-table #compareButton {
  margin-left: 500px;
}

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
.form-login p {
  font-size: 50px;
}

.results tr[visible=false],
.no-result {
  display: none;
}

.results tr[visible=true] {
  display: table-row;
}

.counter {
  padding: 8px;
  color: #ccc;
}

.my-custom-scrollbar {
  position: relative;
  height: 350px;
  overflow: auto;
}

.table-wrapper-scroll-y {
  display: block;
}

.table-wrapper-scroll-x {
  display: block;
}

.select,
#locale {
  width: 100%;
}

.like {
  margin-right: 10px;
}

.table-content {
  width: 450px;
  margin: 50px auto;
  text-align: center;
}

td {
  width: 100px;
}

.mt-100 {
  margin-top: 100px;
}

.container-fluid {
  margin-top: 50px;
}/*# sourceMappingURL=main.css.map */

.main-title {
  font-weight: 500;
}

.trashIconContainer {
  color: #e74c3c;
}

.btn-success, .panel-success {
  background-color: #345174 !important;
  border-color: #27c24c !important;
  color: #fff !important;
}

.submit-btn {
  min-width: 150px;
  max-width: 250px;
  font-size: 1.2rem;
  height: 60px;
  margin-top: 20px;
  padding: 20px;
}

.submit-btn {
  padding-right: 10px;
}

@media (min-width: 768px) {
  .invoice-save-bottom {
    min-width: 400px;
  }
  .right-ads{
    float: left;
  }
  .left-ads{
    float: right;
  }
}
</style>
