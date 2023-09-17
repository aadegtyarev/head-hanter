<template>
    <div>
        <h1>Отклики</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Имя соискателя для поиска"
            @input="fetchingResponses"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="showDialog">Добавить отклик</my-button>
        </div>
        <!-- <my-dialog v-model:show="dialogVisible">
            <job-form @create="createJob" />
        </my-dialog> -->
        <responses-list
            :responses="responses"
            @remove="removeJob"
            v-if="!isResponsesLoading"
        />
        <div v-else>Идёт загрузка...</div>
        <div
            v-intersection="loadMoreResponses"
            class="observer"
        ></div>
    </div>
</template>

<script>
// import JobForm from "@/components/JobForm.vue";
import ResponsesList from "@/components/ResponsesList.vue";
import useResponses from "@/hooks/useResponses"
// import useRemoveJob from "@/hooks/useRemoveJob"
// import useCreateJob from "@/hooks/useCreateJob"

import { ref } from 'vue'

export default {
    components: {
        // JobForm,
        ResponsesList,
    },
    data() {
        return {
        };
    },
    setup(props) {
        const { searchQuery, responses, isResponsesLoading, loadMoreResponses, fetchingResponses } = useResponses(50);
        // const { removeJob } = useRemoveJob(responses)
        // const { createJob, showDialog, dialogVisible } = useCreateJob(responses)


        return {
            responses,
            isResponsesLoading,
            searchQuery,
            fetchingResponses,
            loadMoreResponses,
            // removeJob,
            // createJob,
            // showDialog,
            // dialogVisible
        }
    }
};
</script>

<style></style>
