<template>
    <!-- TODO: Доделать наполнение списка вакансиями -->
    <div>
        <h1>Отклики</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Имя соискателя или название вакансии для поиска"
            @input="fetchingResponses"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="showDialog">Добавить отклик</my-button>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <response-form
                :jobs_list="jobs_list"
                @create="createResponse"
            />
        </my-dialog>
        <responses-list
            :responses="responses"
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
import ResponseForm from "@/components/ResponseForm.vue";
import ResponsesList from "@/components/ResponsesList.vue";
import useResponses from "@/hooks/useResponses"
import useJobs from "@/hooks/useJobs"
// import useRemoveJob from "@/hooks/useRemoveJob"
import useCreateResponse from "@/hooks/useCreateResponse"

import { ref } from 'vue'

export default {
    components: {
        ResponseForm,
        ResponsesList,
    },
    data() {
        return {
            // jobs_list: [
            //     { value: "1", name: "Технический писатель" },
            //     { value: "14", name: "Инженер-стажёр" }
            // ]
        };
    },
    methods: {

    },
    setup(props) {
        const { searchQuery, responses, isResponsesLoading, loadMoreResponses, fetchingResponses } = useResponses(50);
        const { jobs_list } = useJobs(50);
        // const { removeJob } = useRemoveJob(responses)
        const { createResponse, showDialog, dialogVisible } = useCreateResponse(responses)


        return {
            responses,
            isResponsesLoading,
            searchQuery,
            fetchingResponses,
            loadMoreResponses,
            // removeJob,
            createResponse,
            showDialog,
            dialogVisible,
            jobs_list
        }
    }
};
</script>

<style></style>
