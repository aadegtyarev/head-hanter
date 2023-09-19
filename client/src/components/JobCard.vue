<template>
    <div>
        <job-view-form
            v-if="!formEditVisible"
            :job="job"
            @edit="showEditForm"
        />

        <job-edit-form
            v-if="formEditVisible"
            :job="job"
            @save="editJob"
            @cancel="hideEditForm"
        />
    </div>
</template>

<script>
import JobEditForm from "@/components/JobEditForm.vue";
import JobViewForm from "@/components/JobViewForm.vue";
import useEditJob from "@/hooks/useEditJob"

export default {
    components: {
        JobEditForm,
        JobViewForm
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { editJob, hideEditForm, showEditForm, formEditVisible } = useEditJob()
        return {
            editJob,
            hideEditForm,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
