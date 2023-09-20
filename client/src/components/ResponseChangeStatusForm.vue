<template>
    <span class="label-left">Статус</span>
    <my-select
        v-focus
        v-model="response.status"
        :options="response_statuses_list"
        @changeOption="changeOption"
    />
</template>

<script>
import useResponseStatuses from "@/hooks/useResponseStatuses"
import useEditResponse from "@/hooks/useEditResponse"


export default {
    data() {
        return {
        }
    },
    methods: {
        changeOption() {
            this.editResponse(this.response)
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
        const { editResponse } = useEditResponse();

        return {
            response_statuses_list,
            editResponse
        }
    }
}
</script>

<style scoped></style>
