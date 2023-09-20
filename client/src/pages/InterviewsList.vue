<template>
    <div>
        <h1>Заявки на интервью</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Имя соискателя, интервьювера или название вакансии для поиска"
            @input="fetchingInterviews"
            v-focus
        />

        <interviews-list
            :interviews="interviews"
            v-if="!isInterviewsLoading"
        />
        <div v-else>Идёт загрузка...</div>
        <div
            v-intersection="loadMoreInterviews"
            class="observer"
        ></div>
    </div>
</template>

<script>
import InterviewsList from "@/components/InterviewsList.vue";
import useInterviews from "@/hooks/useInterviews"
import useJobs from "@/hooks/useJobs"

import { ref } from 'vue'

export default {
    components: {
        InterviewsList,
    },
    data() {
        return {
        };
    },
    methods: {

    },
    setup(props) {
        const { searchQuery, interviews, isInterviewsLoading, loadMoreInterviews, fetchingInterviews } = useInterviews(50);
        return {
            interviews,
            isInterviewsLoading,
            searchQuery,
            fetchingInterviews,
            loadMoreInterviews,
        }
    }
};
</script>

<style></style>
