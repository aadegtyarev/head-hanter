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
            <my-button @click="create">Создать вакансию</my-button>
        </div>
        <jobs-list
            :jobs="jobs"
            @close="close"
            @open="open"
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
import JobCreateForm from "@/components/JobCreateForm.vue";
import JobsList from "@/components/JobsList.vue";
import useJobs from "@/hooks/useJobs"
import useEditJob from "@/hooks/useEditJob"
import useCreateJob from "@/hooks/useCreateJob"

import { ref } from 'vue'

export default {
    components: {
        JobCreateForm,
        JobsList,
    },
    methods: {
        close(job) {
            job.closed = true
            this.editJob(job)
        },
        open(job) {
            job.closed = false
            this.editJob(job)
        },
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
        const { editJob } = useEditJob(jobs)
        const { createJob, hideDialog, showDialog, dialogVisible } = useCreateJob(jobs)


        return {
            jobs,
            isJobsLoading,
            searchQuery,
            fetchingJobs,
            loadMoreJobs,
            editJob,
            createJob,
            hideDialog,
            showDialog,
            dialogVisible
        }
    }
};
</script>

<style></style>
