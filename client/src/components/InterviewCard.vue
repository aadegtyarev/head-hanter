<template>
    <div>
        <interview-view-form
            v-if="!formEditVisible"
            :interview="interview"
            :key="interview.id"
            @edit="showEditForm"
        />

        <interview-edit-form
            v-if="formEditVisible"
            :interview="interview"
            :key="interview.id"
            @save="save"
        />
    </div>
</template>

<script>
import InterviewEditForm from "@/components/InterviewEditForm.vue";
import InterviewViewForm from "@/components/InterviewViewForm.vue";
import useEditInterview from "@/hooks/useEditInterview"

export default {
    components: {
        InterviewEditForm,
        InterviewViewForm
    },
    props: {
        interview: {
            type: Object,
            required: true,
        },
    },
    methods: {
        save(interview) {
            this.editInterview(interview)
        },
    },
    setup(props) {
        const { editInterview, showEditForm, formEditVisible } = useEditInterview()
        return {
            editInterview,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
