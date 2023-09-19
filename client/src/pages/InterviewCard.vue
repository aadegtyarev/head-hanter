<template>
    <div>
        <h1>{{ interview.name }}</h1>
        <interview-card :interview="interview" />
    </div>
</template>

<script>
import InterviewCard from "@/components/InterviewCard.vue";
import useGetInterview from "@/hooks/useGetInterview"
import { useRoute } from 'vue-router'

export default {
    components: {
        InterviewCard
    },
    data() {
        return {
        };
    },
    methods: {
    },
    setup(props) {
        const route = useRoute()
        const interviewId = route.params.id
        const { loadOneInterview, interview } = useGetInterview(interviewId);

        return {
            interview,
            loadOneInterview
        }
    }
};
</script>

<style scoped></style>
