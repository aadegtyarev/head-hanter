<template>
    <div>
        <response-card
            :response="response"
            :jobs_list="jobs_list"
            @interview="showDialog"
        />

        <my-dialog v-model:show="dialogVisible">
            <interview-create-form
                :response="response"
                :users_list="users_list"
                @create="createInterview"
                @cancel="hideDialog"
            />
        </my-dialog>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from 'vue-router'
import ResponseCard from "@/components/ResponseCard.vue";
import useGetResponse from "@/hooks/useGetResponse"
import InterviewCreateForm from "@/components/InterviewCreateForm.vue";
import useCreateInterview from "@/hooks/useCreateInterview"
import useJobs from "@/hooks/useJobs"
import useUsers from "@/hooks/useUsers"

export default {

    components: {
        ResponseCard,
        InterviewCreateForm
    },
    data() {
        return {

        };
    },
    setup(props) {
        const route = useRoute()
        const responseId = route.params.id
        const { response } = useGetResponse(responseId);
        const { jobs_list } = useJobs(50);
        const { users_list } = useUsers(50);
        const { createInterview, hideDialog, showDialog, dialogVisible } = useCreateInterview()

        return {
            response,
            createInterview,
            hideDialog,
            showDialog,
            dialogVisible,
            jobs_list,
            users_list
        }
    }
};
</script>

<style scoped></style>
