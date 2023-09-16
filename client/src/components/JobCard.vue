<template>
    <div>
        <my-dialog v-model:show="dialogEditVisible">
            <job-edit-form
                :job="job"
                @save="editJob"
            />
        </my-dialog>
        <div class="job">
            <div>
                <p>
                <h3>{{ job.job_title }}</h3>
                </p>
                <p><strong>Зарплата от, руб: </strong>{{ job.salary_from }}</p>
                <p><strong>Зарплата до, руб: </strong>{{ job.salary_to }}</p>
                <p><strong>Навыки: </strong>{{ job.skills }}</p>
                <p><strong>Образование: </strong>{{ job.education }}</p>
                <p><strong>Требуемый опыт: </strong>{{ job.experience }}</p>
                <p><strong>Ссылка на тестовое задание: </strong>{{ job.test_doc }}</p>
                <p><strong>Описание: </strong>{{ job.detail }}</p>
            </div>
            <div class="job_btns">
                <my-button @click="showEditDialog">Редактировать</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import JobEditForm from "@/components/JobEditForm.vue";
import useEditJob from "@/hooks/useEditJob"

export default {
    components: {
        JobEditForm
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { editJob, showEditDialog, dialogEditVisible } = useEditJob()
        return {
            editJob,
            showEditDialog,
            dialogEditVisible
        }
    }
};
</script>

<style scoped>
.job {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

p {
    margin-top: 10px;
}

.job_btns {
    display: flex;
}
</style>
