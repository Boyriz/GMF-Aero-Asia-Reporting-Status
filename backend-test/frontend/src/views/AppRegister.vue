<template>
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="submit">
                    <div class="form-login d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3 font-weight-bold" style="color: #0082c4;">REGISTER</p>
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
                        placeholder="Enter a valid email address" 
                        required />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-3">
                    <input
                        v-model="password"
                        type="password" 
                        id="form3Example4" 
                        class="form-control form-control-lg"
                        placeholder="Enter password" 
                        required />
                    </div>

                    <!-- role input -->
                    <div class="form-outline mb-3">
                    <input
                        v-model="role"
                        type="role" 
                        id="form3Example4" 
                        class="form-control form-control-lg"
                        placeholder="Enter Admin or User" 
                        required />
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    </div>
                    <button 
                        class="w-100 btn btn-lg btn-primary"
                        
                        >
                        Sign-Up
                    </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import {reactive} from 'vue'
import { useRouter } from 'vue-router';

export default {
    name: "AppRegister",
    data() {
        return {
            email: '',
            password: '',
            role: ''
        }
    },

    methods: {
        async submit() {
           const response = await axios.post('auth/signup', {
                email: this.email,
                password: this.password,
                role: this.role
            });

            console.log(response);
            this.$router.push('/');
        }
    }

    // setup() {
    //     const data = reactive({
    //         email: '',
    //         password: '',
    //         role: ''
    //     });

    //     const router = useRouter();

    //     const submit = async () => {
    //         await fetch('http://localhost:5000/api/auth/signup', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(data)
    //         });

    //         await router.push('/');
    //     }

    //     return {
    //         data,
    //         submit
    //     }
    // }
}

</script>

<style>
.form-login {
    padding-top: 200px;
}

</style>