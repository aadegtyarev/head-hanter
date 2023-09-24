<template>
    <div>
        <h1>Отклики</h1>
        <my-input
            class="search-input"
            v-model="searchQuery"
            placeholder="Имя соискателя или название вакансии для поиска"
            @input="fetchingResponses"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Добавить отклик</my-button>
        </div>
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
import ResponsesList from "@/components/ResponsesList.vue";
import useResponses from "@/hooks/useResponses"

import { ref } from 'vue'

export default {
    components: {
        ResponsesList,
    },
    data() {
        return {
            response: {
                applicant_name: ''
            },
        };
    },
    methods: {
        create() {
            this.$router.push('/response-create')
        }
    },
    setup(props) {
        const { searchQuery, responses, isResponsesLoading, loadMoreResponses, fetchingResponses } = useResponses(50);

        return {
            responses,
            isResponsesLoading,
            searchQuery,
            fetchingResponses,
            loadMoreResponses
        }
    }
};
</script>

<style></style>
