<template>
    <div>
         <h1>Страница с вакансиями</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            v-focus 
        />

        <div class="app_btns">
            <my-button @click="showDialog">Создать вакансию</my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <job-form @create="createJob" />
        </my-dialog>
        <job-list
            :jobs="sortedAndSearchedJobs"
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
import JobList from "@/components/JobList.vue";
import useJobs from "@/hooks/useJobs"
import useSortedJobs from "@/hooks/useSortedJobs"
import useSortedAndSearchedJobs from "@/hooks/useSortedAndSearchedJobs"
import useRemoveJob from "@/hooks/useRemoveJob"
import useCreateJob from "@/hooks/useCreateJob"

import {ref} from 'vue'

export default {
    components: {
        JobForm,
        JobList,
    },
    data() {
        return {
            sortOptions: [
                { value: "title", name: "По названию" },
                { value: "body", name: "По содержимому" },
            ]
        };
    },
    setup(props) {
        const {jobs, totalPages, isJobsLoading, loadMoreJobs} = useJobs(10);
        const {sortedJobs, selectedSort} = useSortedJobs(jobs);
        const {searchQuery, sortedAndSearchedJobs} = useSortedAndSearchedJobs(sortedJobs)
        const {removeJob} = useRemoveJob(jobs)
        const {createJob, showDialog, dialogVisible} = useCreateJob(jobs)


        return {
            jobs,
            totalPages,
            isJobsLoading,
            sortedJobs,
            selectedSort,
            searchQuery,
            sortedAndSearchedJobs,
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

.observer {
    height: 30px;
    background: green;
}
</style>
