<template>
    <div>
        <!-- <response-view-form :response="response" /> -->

        <response-view-form
            v-if="!formEditVisible"
            :response="response"
            @edit="showEditForm"
        />

        <response-edit-form
            v-if="formEditVisible"
            :response="response"
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
