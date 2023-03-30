<template>
   <label for="connector" class="block font-mediam text-sm text-grey-70">
    TestConnector
   </label>
   <select name="connector" id="selectConnector" v-model="connector">
        <option value="" selected>-- Choose Registration --</option>
        <option v-for="Connector in list" v-bind:key="Connector.warpl">
            {{ Connector.tplnr }}
        </option>
   </select>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios'

interface Connector {
    warpl: string;
    tplnr: string;
}

export default {
    name: "ConnectorDropdown",
    data(): { list: Connector[] | undefined} {
        return {list:undefined}
    },

    mounted() {
        axios.get('http://localhost:5000/api/tc')
        .then( res => {
            this.list = res.data;
            console.warn(res.data)
        })
    },

    methods: {
        selectConnector(): Connector {
            return {
                warpl: "",
                tplnr: "",
            }
        }
    }
} as Vue.ComponentOptions<any>;

</script>