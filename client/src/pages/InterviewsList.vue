<template>
    <div>
        <h1>Заявки на интервью</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Имя соискателя, интервьювера или название вакансии для поиска"
            @input="fetchingInterviews"
            v-focus
        />

        <!-- <div class="app-btns">
            <my-button>Добавить заявку на интервью</my-button>
        </div> -->
        <!-- <my-dialog v-model:show="dialogVisible">
            <interview-form
                :jobs_list="jobs_list"
                @create="createInterview"
            />
        </my-dialog> -->
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
import InterviewForm from "@/components/InterviewForm.vue";
import InterviewsList from "@/components/InterviewsList.vue";
import useInterviews from "@/hooks/useInterviews"
import useJobs from "@/hooks/useJobs"
// import useRemoveJob from "@/hooks/useRemoveJob"
// import useCreateInterview from "@/hooks/useCreateInterview"

import { ref } from 'vue'

export default {
    components: {
        InterviewForm,
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
        const { jobs_list } = useJobs(50);
        // const { removeJob } = useRemoveJob(interviews)
        // const { createInterview, showDialog, dialogVisible } = useCreateInterview(interviews)


        return {
            interviews,
            isInterviewsLoading,
            searchQuery,
            fetchingInterviews,
            loadMoreInterviews,
            // createInterview,
            // showDialog,
            // dialogVisible,
            jobs_list
        }
    }
};
</script>

<style></style>
