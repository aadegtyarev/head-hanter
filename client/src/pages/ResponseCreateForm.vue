<template>
    <div>
        <response-create-form
            :response="response"
            :jobs_list="jobs_list"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import ResponseCreateForm from "@/components/ResponseCreateForm.vue";
import useCreateResponse from "@/hooks/useCreateResponse"
import useJobs from "@/hooks/useJobs"

export default {
    components: {
        ResponseCreateForm
    },
    methods: {
        create(response) {
            this.createResponse(response)
            this.$router.back()
        },
        cancel() {
            this.$router.back()
        },
    },
    data() {
        return {
            response: {
            }
        };
    },
    setup(props) {
        const { createResponse } = useCreateResponse()
        const { jobs_list } = useJobs(50);

        return {
            createResponse,
            jobs_list
        }
    }
};
</script>

<style scoped></style>
