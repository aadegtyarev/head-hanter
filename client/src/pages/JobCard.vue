<template>
    <div>
        <h1>Это страница вакансии с ID = {{ $route.params.id }}</h1>        
        <job-card
            :job="job"
        />
    </div>
</template>

<script>
import JobCard from "@/components/JobCard.vue";
import useGetJob from "@/hooks/useGetJob"
import { useRoute } from 'vue-router'

export default {
    components: {
        JobCard
    },
    data() {
        return {
        };
    },
    setup(props) {
        const route = useRoute()
        const jobId= route.params.id
        const {job} = useGetJob(jobId);

        return {
            job
        }
    }
};
</script>

<style scoped>

</style>
