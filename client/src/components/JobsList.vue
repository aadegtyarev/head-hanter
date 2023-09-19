<template>
    <div v-if="jobs.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Название</th>
            <th>Зарплата</th>
            <th>Описание</th>
            <th>Действия</th>
            <job-item
                v-for="job in jobs"
                :job="job"
                :key="job.id"
                @close="close"
                @open="open"
            />
        </table>
    </div>
    <h4
        class="list-empty"
        v-else
    >Нет вакансий, подходящих под условие поиска</h4>
</template>

<script>
import JobItem from "@/components/JobItem.vue";
export default {
    components: { JobItem },
    methods: {
        close(job) {
            this.$emit('close', job)
        },
        open(job) {
            this.$emit('open', job)
        }
    },
    props: {
        jobs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
