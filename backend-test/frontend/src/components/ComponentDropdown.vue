<template>
    <label for="status" class="block font-mediam text-sm text-grey-70">
        Component Status
    </label>
    <select name="status" id="selectStatus" class="block-mt-1 w-full">
        <option value="" selected>-- Choose Component Status --</option>
        <option v-for="Status in list" v-bind:key="Status.id">
            {{ Status.status }}
        </option>
    </select>
</template>

<script lang="ts">
    import Vue from 'vue';
    import axios from 'axios';

    interface Status {
        id: number;
        status: string;
    }

    export default {
        name: "ComponentDropdown",
        data(): { list: Status[] | undefined} {
            return {list:undefined}
        },

        mounted() {
            axios.get('http://localhost:5000/api/components')
            .then( res => {
                this.list = res.data;
                console.warn(res.data)
            })
        },

        methods: {
            selectStatus(): Status {
                return {
                    id: 1,
                    status: ""
                }
            }
        }
    } as Vue.ComponentOptions<any>
</script>