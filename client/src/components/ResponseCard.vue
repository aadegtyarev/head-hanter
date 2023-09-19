<template>
    <div>
        <!-- <response-view-form :response="response" /> -->

        <response-view-form
            v-if="!formEditVisible"
            :response="response"
            :key="response.id"
            @edit="showEditForm"
            @interview="showInterviewDialog"
        />

        <response-edit-form
            v-if="formEditVisible"
            :response="response"
            :jobs_list="jobs_list"
            :key="response.id"
            @save="editResponse"
            @cancel="hideEditForm"
        />
    </div>
</template>

<script>
import ResponseEditForm from "@/components/ResponseEditForm.vue";
import ResponseViewForm from "@/components/ResponseViewForm.vue";
import useEditResponse from "@/hooks/useEditResponse"

export default {
    components: {
        ResponseEditForm,
        ResponseViewForm
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
        jobs_list: {
            type: Array,
            required: true,
        },
    },
    methods: {
        showInterviewDialog() {
            this.$emit('interview', this.response)
        },
    },
    setup(props) {
        const { editResponse, hideEditForm, showEditForm, formEditVisible } = useEditResponse()
        return {
            editResponse,
            hideEditForm,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
