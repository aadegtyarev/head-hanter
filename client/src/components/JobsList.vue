<template>
    <div v-if="jobs.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Действия</th>
            <job-item
                v-for="job in jobs"
                :job="job"
                :key="job.id"
                @remove="$emit('remove', job)"
                @edit="$emit('edit', job)"
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
    props: {
        jobs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
