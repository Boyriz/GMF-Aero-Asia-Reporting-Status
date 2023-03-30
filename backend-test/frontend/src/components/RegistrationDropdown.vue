<template>
    <label for="registration" class="block font-mediam text-sm text-grey-70">
        Registration
    </label>
    <select name="registration" id="selectRegistration" v-model="registration">
        <option value="" selected>-- Choose Registration --</option>
        <option v-for="Registration in list" v-bind:key="Registration.id">
            {{ Registration.registration }}
        </option>
    </select>
</template>

<script lang="ts">
    import Vue from 'vue';
    import axios from 'axios';

    interface Registration {
        id: number;
        registration: string;
    }

    export default {
        name: "RegistartionDropdown",
        data(): { list: Registration[] | undefined} {
            return {list:undefined}
        },

        mounted() {
            axios.get('http://localhost:5000/api/registrations')
            .then( res => {
                this.list = res.data;
                console.warn(res.data)
            })
        },

        methods: {
            selectRegistration(): Registration {
                return {
                    id: 1,
                    registration: ""
                }
            }
        }
    } as Vue.ComponentOptions<any>;
</script>