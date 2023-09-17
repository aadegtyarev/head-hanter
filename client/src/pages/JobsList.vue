<template>
    <div>
        <h1>Страница с вакансиями</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingJobs"
            v-focus
        />

        <div class="app_btns">
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

<style>
.app_btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}

/* .observer {
    height: 30px;
    background: green;
} */
</style>
