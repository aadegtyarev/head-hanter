<template>
    <div>
        <job-create-form
            :job="job"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import JobCreateForm from "@/components/JobCreateForm.vue";
import useCreateJob from "@/hooks/useCreateJob"

export default {
    components: {
        JobCreateForm
    },
    methods: {
        create(job) {
            this.createJob(job)
            this.$router.back()
        },
        cancel() {
            this.$router.back()
        },
    },
    data() {
        return {
            job: {
                job_title: ""
            }
        };
    },
    setup(props) {
        const { createJob } = useCreateJob()

        return {
            createJob,
        }
    }
};
</script>

<style scoped></style>
