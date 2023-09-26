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
                @del="del"
            />
        </table>
        <my-dialog v-model:show="dialogVisible">
            <h3>Удалить вакансию {{ job.job_title }}?</h3>
            <div class="btns">
                <my-button @click="remove">Удалить</my-button>
                <my-button
                    class="btn-primary"
                    @click="cancel"
                >Отменить</my-button>
            </div>
        </my-dialog>
    </div>
    <h4
        class="list-empty"
        v-else
    >Нет вакансий, подходящих под условие поиска</h4>
</template>

<script>
import JobItem from "@/components/JobItem.vue";
import useEditJob from "@/hooks/useEditJob"
import useRemoveJob from "@/hooks/useRemoveJob";
import MyDialog from "./UI/MyDialog.vue";

export default {
    data() {
        return {
            dialogVisible: false,
            MyDialog,
            job: {}
        }
    },
    components: { JobItem },
    methods: {
        close(job) {
            job.closed = true
            this.editJob(job)
        },
        open(job) {
            job.closed = false
            this.editJob(job)
        },
        del(job) {
            console.log("del")
            this.job = job
            this.dialogVisible = true
        },
        cancel() {
            this.dialogVisible = false
        },
        remove() {
            this.removeJob(this.job)
            this.dialogVisible = false
        }
    },
    props: {
        jobs: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const { editJob } = useEditJob(props.jobs)
        const { removeJob } = useRemoveJob()

        return {
            editJob,
            removeJob
        }
    }
};
</script>

<style scoped></style>
