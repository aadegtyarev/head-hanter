<template>
    <div>
        <h1>{{ response.job_title }}</h1>
        <response-card :response="response" />
    </div>
</template>

<script>
import ResponseCard from "@/components/ResponseCard.vue";
import useGetResponse from "@/hooks/useGetResponse"
import { useRoute } from 'vue-router'

export default {
    components: {
        ResponseCard
    },
    data() {
        return {
        };
    },
    setup(props) {
        const route = useRoute()
        const responseId = route.params.id
        const { response } = useGetResponse(responseId);

        return {
            response
        }
    }
};
</script>

<style scoped></style>
