<template>
    <div>
        <div>
            <h1>Хочет работать «{{ job.job_title }}»</h1>
            <h2>{{ response.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
            <div v-if="response.interview_id > 0">
                <p class="green-text">Назначено интервью {{ response.interview_date_human }}, детали: {{
                    response.interview_detail
                }}</p>
            </div>
            <div>
                <p><a :href="`mailo:${response.email}`">{{ response.email }}</a></p>
                <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
                <p><strong>Заметки: </strong>{{ response.description }}</p>
                <h3>Зарплата</h3>
                <p><strong>Предлагаем </strong>от {{ job.salary_from }} до {{ job.salary_to }} руб</p>
                <p><strong>Хочет: </strong>{{ response.salary_desired }} руб</p>
                <h3>Образование</h3>
                <p><strong>Надо: </strong>{{ job.education }}</p>
                <p><strong>Есть: </strong>{{ response.education }}</p>
                <h3>Опыт</h3>
                <p><strong>Надо: </strong>{{ job.experience }}</p>
                <p><strong>Есть: </strong>{{ response.experience }}</p>
                <h3>Навыки</h3>
                <p><strong>Надо: </strong>{{ job.skills }}</p>
                <p><strong>Есть: </strong>{{ response.skills }}</p>
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                v-if="!response.interview_id > 0"
                @click="interview"
            >Пригласить на интервью</my-button>
            <my-button>Отказать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
import useGetJob from "@/hooks/useGetJob"

export default {
    methods: {
        edit() {
            this.$emit('edit', this.response)
        },
        interview() {
            this.$emit('interview', this.response)
        }
    },
    props: {
        response: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { job } = useGetJob(props.response.job_id)

        return {
            job
        }
    }
}
</script>

<style scoped></style>
