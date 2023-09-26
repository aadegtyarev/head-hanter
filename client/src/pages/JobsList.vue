<template>
    <div>
        <h1>Вакансии</h1>
        <my-input
            class="search-input"
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingJobs"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Создать вакансию</my-button>
        </div>
        <jobs-list
            :jobs="jobs"
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
import JobsList from "@/components/JobsList.vue";
import useJobs from "@/hooks/useJobs"
import useCreateJob from "@/hooks/useCreateJob"

import { ref } from 'vue'

export default {
    components: {
        JobsList,
    },
    methods: {
        create() {
            this.$router.push('/job-create')
        }
    },
    data() {
        return {
            job: {
                job_title: ''
            },
        };
    },
    setup(props) {
        const { searchQuery, jobs, isJobsLoading, loadMoreJobs, fetchingJobs } = useJobs(50);
        const { createJob, hideDialog, showDialog, dialogVisible } = useCreateJob(jobs)

        return {
            jobs,
            isJobsLoading,
            searchQuery,
            fetchingJobs,
            loadMoreJobs,
            createJob,
            hideDialog,
            showDialog,
            dialogVisible
        }
    }
};
</script>

<style></style>
