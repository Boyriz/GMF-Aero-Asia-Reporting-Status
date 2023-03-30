<template>
    <label for="actype" class="block font-mediam text-sm text-grey-70">
        AC Type
    </label>
    <select name="actype" id="selectACTypes" class="block-mt-1 w-full">
        <option value="" selected>-- Choose AC Type --</option>
        <option v-for="Aircraft in list" v-bind:key="Aircraft.id">
            {{ Aircraft.acType }}
        </option>
    </select>
</template>

<script lang="ts">
    import Vue from 'vue';
    import axios from 'axios';

    interface AircraftType {
        id: number;
        acType: string;
    }

    export default {
        name: "ActypeDropdown",
        data(): { list: AircraftType[] | undefined} {
            return {list:undefined}
        },

        mounted() {
            axios.get('http://localhost:5000/api/actypes')
            .then( res => {
                this.list = res.data;
                console.warn(res.data)
            })
        },

        methods: {
            selectAircraft(): AircraftType {
                return {
                    id: 1,
                    acType: ""
                }
            }
        }
    } as Vue.ComponentOptions<any>;
</script>