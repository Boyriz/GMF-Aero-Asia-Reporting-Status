<template>
    <label for="operator" class="block font-medium text-sm text-grey-70">
        Operator
    </label>
    <select name="operator" id="selectOperator" class="block-mt-1 w-full">
        <option value="" selected>-- Choose Operator --</option>
        <option v-for="Operator in list" v-bind:key="Operator.id">
            {{ Operator.operator }}
        </option>
    </select>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';

interface Operator {
    id: number;
    operator: string;
}

export default {
    name: "OperatorDropdown",
    data(): { list: Operator[] | undefined} {
        return {list:undefined}
    },

    mounted() {
        axios.get('http://localhost:5000/api/operators')
        .then( res => {
            this.list = res.data;
            console.warn(res.data)
        })
    },

    methods: {
        selectOperator(): Operator {
            return {
                id: 1,
                operator: ""
            }
        }
    }
} as Vue.ComponentOptions<any>;
</script>

