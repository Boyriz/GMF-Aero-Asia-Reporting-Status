<template>
    <form @submit.prevent="getData">
        <input type="submit" class="btn btn-primary" style="display: block;margin: 1rem auto;">
    </form>
    <!-- <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in data">
            {{ index+1 }}. {{ item. }}
        </li>
    </ul> -->
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

// interface Search {
//     warpl: string;
//     tplnr: string
// }

export default {
    name: "SearchButton",
    data() {
        return {
            tc : null,
            data: []
        }
    },
    methods: {
        async getData(){
            await axios
                    .get('http://localhost:5000/api/tc')
                    .then((response) => {
                        this.data = response.data;
                        console.log(this.data);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        }
    }
} as Vue.ComponentOptions<any>;

</script>