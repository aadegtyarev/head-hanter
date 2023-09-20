<template>
    <div>
        <h1>Редактирование вакансии</h1>
        <form
            @submit.prevent
            style="max-width: 600px;"
        >
            <job-form :job="job" />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="save"
                >
                    Сохранить
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import JobForm from "@/components/JobForm.vue";
import useMyFunction from "@/hooks/useMyFunction";

var job_undo = {}

export default {
    components: {
        JobForm,
    },
    methods: {
        save() {
            this.$emit('save', this.job)
        },
        cancel() {
            this.cloneObj(job_undo, this.job)
            this.$emit('cancel', this.job)
        }
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.job, job_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
