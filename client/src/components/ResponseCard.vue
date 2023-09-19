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
            :key="response.id"
            @save="editResponse"
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
    },
    methods: {
        showInterviewDialog() {
            this.$emit('interview', this.response)
        },
    },
    setup(props) {
        const { editResponse, showEditForm, formEditVisible } = useEditResponse()
        return {
            editResponse,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
