<template>
    <span class="label-top">Статус</span>
    <my-select
        v-focus
        v-model="response.status"
        :options="response_statuses_list"
        @change="save"
    />
</template>

<script>
import useResponseStatuses from "@/hooks/useResponseStatuses"

export default {
    data() {
        return {
        }
    },
    methods: {
        save(response) {
            console.log(response)
        },
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { response_statuses_list } = useResponseStatuses();

        return {
            response_statuses_list
        }
    }
}
</script>

<style scoped></style>
