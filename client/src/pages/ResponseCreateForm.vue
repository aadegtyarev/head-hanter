<template>
    <div>
        <response-create-form
            :response="response"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import ResponseCreateForm from "@/components/ResponseCreateForm.vue";
import useCreateResponse from "@/hooks/useCreateResponse"

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

        return {
            createResponse
        }
    }
};
</script>

<style scoped></style>
