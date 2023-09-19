<template>
    <div>
        <response-card
            :response="response"
            @interview="showDialog"
        />

        <my-dialog v-model:show="dialogVisible">
            <interview-form
                :response="response"
                @create="createInterview"
            />
        </my-dialog>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from 'vue-router'
import ResponseCard from "@/components/ResponseCard.vue";
import useGetResponse from "@/hooks/useGetResponse"
import InterviewForm from "@/components/InterviewForm.vue";
import useCreateInterview from "@/hooks/useCreateInterview"

export default {

    components: {
        ResponseCard,
        InterviewForm
    },
    data() {
        return {

        };
    },
    setup(props) {
        const route = useRoute()
        const responseId = route.params.id
        const { response } = useGetResponse(responseId);

        const { createInterview, showDialog, dialogVisible } = useCreateInterview()

        return {
            response,
            createInterview,
            showDialog,
            dialogVisible
        }
    }
};
</script>

<style scoped></style>
