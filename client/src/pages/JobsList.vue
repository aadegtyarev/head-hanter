<template>
    <div>
        <h1>Вакансии</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingJobs"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="showDialog">Создать вакансию</my-button>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <job-form @create="createJob" />
        </my-dialog>
        <jobs-list
            :jobs="jobs"
            @remove="removeJob"
            v-if="!isJobsLoading"
        />
        <div v-else>Идёт загрузка...</div>
        <div
            v-intersection="loadMoreJobs"
            class="observer"
        ></div>
    </div>
</template>

<script>
import JobForm from "@/components/JobForm.vue";
import JobsList from "@/components/JobsList.vue";
import useJobs from "@/hooks/useJobs"
import useRemoveJob from "@/hooks/useRemoveJob"
import useCreateJob from "@/hooks/useCreateJob"

import { ref } from 'vue'

export default {
    components: {
        JobForm,
        JobsList,
    },
    data() {
        return {
        };
    },
    setup(props) {
        const { searchQuery, jobs, isJobsLoading, loadMoreJobs, fetchingJobs } = useJobs(50);
        const { removeJob } = useRemoveJob(jobs)
        const { createJob, showDialog, dialogVisible } = useCreateJob(jobs)


        return {
            jobs,
            isJobsLoading,
            searchQuery,
            fetchingJobs,
            loadMoreJobs,
            removeJob,
            createJob,
            showDialog,
            dialogVisible
        }
    }
};
</script>

<style></style>
