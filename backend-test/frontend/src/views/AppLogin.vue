<template>
    <div>
        <section class="vh-100">
            <div class="container-fluid">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-9 col-lg-6 col-xl-5">
                 <img :src="require('../assets/gmf aeroasia logo new blue.png')"
                    class="img-fluid" alt="GMF image">
                </div>
                <div class="col-lg-6 col-4 offset-1">
                    <form @submit.prevent="submit">
                        <div class="form-login d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3 font-weight-bold" style="color: rgb(52, 115, 209);">LOGIN</p>
                        </div>
                        <div class="divider d-flex align-items-center my-4">
                        
                        </div>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                        <input
                            v-model="email"
                            type="email" 
                            id="form3Example3" 
                            class="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                        </div>
            
                        <!-- Password input -->
                        <div class="form-outline mb-3">
                        <input
                            v-model="password"
                            type="password" 
                            id="form3Example4" 
                            class="form-control form-control-lg"
                            placeholder="Enter password" />
                        </div>

                         <!-- role input -->
                         <div class="form-outline mb-3">
                        <input
                            v-model="role"
                            type="role" 
                            id="form3Example4" 
                            class="form-control form-control-lg"
                            placeholder="Enter role" />
                        </div>
            
                        <div class="d-flex justify-content-between align-items-center">
                        <!-- Checkbox -->
                        </div>
                            <div class="join-container">
                                <button 
                                    class="w-100 btn btn-lg btn-primary"
                                    type="submit"
                                    >
                                    LOGIN
                                </button>
                            </div>
                            <div class="join-container">
                                <router-link 
                                    to="/register"
                                    type="button"
                                    class="btn btn-light btn-search btn-lg btn-block">REGISTER
                                </router-link>
                            </div>
                    </form>
                    </div>
              </div>
            </div>
        </section>   
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import {reactive} from 'vue';
import { useRouter } from 'vue-router';

    export default {
        name: "AppLogin",
        data() {
            return {
                email: '',
                password: '',
                role: ''
            }
        },

        methods: {
            async submit() {
                const response = await axios.post('auth/signin', {
                    email: this.email,
                    password: this.password,
                    role: this.role
                });

                console.log(response);
                localStorage.setItem('token', response.data.token);
                this.$router.push('/home');
            }
        }


        // setup() {
        //     const data = reactive({
        //         email: '',
        //         password: '',
        //         // role: ''
        //     });

        //     const router = useRouter()

        //     const submit = async () => {
        //         await fetch('http://localhost:5000/api/auth/signin', {
        //             method: 'POST',
        //             headers: {'Content-Type': 'application.json'},
        //             credentials: 'include',
        //             body: JSON.stringify(data)

        //         });
        //         await router.push('/home');
        //     }

        //     return {
        //         data,
        //         submit
        //     }
        // }
    }
</script>

<style scoped>
    
</style>