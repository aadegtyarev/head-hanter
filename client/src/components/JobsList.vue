<template>
    <div v-if="jobs.length > 0">
        <h3>Вакансии</h3>
        <job-item
            v-for="job in jobs"
            :job="job"
            :key="job.id"
            @remove="$emit('remove', job)"
            @edit="$emit('edit', job)"
        />
    </div>
    <h4
        v-else
        style="color: red"
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

<style scoped>
.job-list-item {
    display: inline-block;
    margin-right: 10px;
}
</style>
