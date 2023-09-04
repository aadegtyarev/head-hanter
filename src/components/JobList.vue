<template>
    <div v-if="jobs.length > 0">
        <h3>Вакансии</h3>
        <transition-group name="job-list">
            <job-item
                v-for="job in jobs"
                :job="job"
                :key="job.id"
                @remove="$emit('remove', job)"
            />
        </transition-group>
    </div>
    <h3
        v-else
        style="color: red"
    >Нет вакансий, подходящих под условие поиска</h3>
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

/* .job-list-enter-active,
.job-list-leave-active {
    transition: all 0.4s ease;
}

.job-list-enter-from,
.job-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.job-list-move {
  transition: transform 0.4s ease;
} */

</style>
