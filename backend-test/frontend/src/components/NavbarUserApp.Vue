<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <nav class="navbar bg-body-tertiary">
            <div class="container">
                <router-link to="/home-user" class="navbar-brand">
                    <img :src="require('../assets/gmf aeroasia logo new blue.png')" alt="logo gmf" />
                </router-link>
            </div>
            </nav>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
            </ul>
            <router-link 
                            to="/login-user"
                            type="button"
                            class="btn btn-sign btn-lg">SIGN-OUT
            </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">

export default {
    name: "NavbarUserApp"
}
</script>

<style lang="css">
.navbar-brand img {
    max-height: 40px;
}

.btn-navbar-right {
    margin-top: -10px !important;
    margin-bottom: -8px !important;
    margin-right: -18px !important;
    height: 70px;
    border-radius: 0;
}

    .btn-sign {
    background-color: #fff;
    color: rgb(32, 73, 150);
    
}
    .btn-sign:hover {
    background-color: rgb(11, 14, 124);
    color: #fff;
}
</style>
