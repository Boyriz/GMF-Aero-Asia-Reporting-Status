<template lang="">
    <div>
        <section class="vh-100">
            <div class="container-fluid h-custom">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img :src="require('../assets/white_logo-removebg-preview.png')"
                    class="img-fluid" alt="GMF image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                        <div class="form-login d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3" style="font-weight:bolder;font-style:italic;color: rgb(14, 172, 35);">LOGIN</p>
                        </div>
                        <div class="divider d-flex align-items-center my-4">
                        
                        </div>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                        <label class="form-label" for="form3Example3"></label>
                        </div>
            
                        <!-- Password input -->
                        <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" class="form-control form-control-lg"
                            placeholder="Enter password" />
                        <label class="form-label" for="form3Example4"></label>
                        </div>
            
                        <div class="d-flex justify-content-between align-items-center">
                        <!-- Checkbox -->
                        </div>
                        <div class="join-container">
                            <router-link 
                                to="/home-user"
                                type="button"
                                class="btn btn-primary btn-search btn-lg btn-block">LOGIN
                            </router-link>
                        </div>
                    </form>
                    </div>
              </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:"AppLoginUser"   
    }
</script>

<style lang="">
    
</style>