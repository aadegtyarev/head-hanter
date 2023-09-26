<template>
    <div>
        <h1>{{ interview.name }}</h1>
        <interview-card
            :interview="interview"
            :users_list="users_list"
        />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import InterviewCard from "@/components/InterviewCard.vue";
import useGetInterview from "@/hooks/useGetInterview"
import useUsers from "@/hooks/useUsers"

export default {
    components: {
        InterviewCard
    },
    setup(props) {
        const route = useRoute()
        const interviewId = route.params.id
        const { interview } = useGetInterview(interviewId);
        const { users_list } = useUsers();

        return {
            interview,
            users_list
        }
    }
};
</script>

<style scoped></style>
