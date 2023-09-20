<template>
    <span class="label-top">Название</span>
    <my-input
        v-focus
        v-model="job.job_title"
        type="text"
        placeholder="Эникейщик"
    />
    <span class="label-top">Зарплата, руб</span>
    <div class="flex">
        <span class="label-left">от</span>
        <my-input
            v-model="job.salary_from"
            type="number"
            placeholder="80000"
        />
        <span class="label-left">до</span>
        <my-input
            v-model="job.salary_to"
            type="number"
            placeholder="90000"
        />
    </div>
    <span class="label-top">Навыки</span>
    <my-input
        v-model="job.skills"
        type="text"
        placeholder="Linux, хорошо ладит с людьми"
    />
    <span class="label-top">Образование</span>
    <my-input
        v-model="job.education"
        type="text"
        placeholder="техническое высшее, радиоинженер"
    />
    <span class="label-top">Требуемый опыт</span>
    <my-input
        v-model="job.experience"
        type="text"
        placeholder="от 1 года"
    />
    <span class="label-top">Тестовое задание</span>
    <my-select
        v-focus
        v-model="job.test_doc_id"
        :options="test_docs_list"
        placeholder="Вакансия"
    />
    <span class="label-top">Описание</span>
    <my-textarea
        v-model="job.detail"
        placeholder="#Заголовок&#10;&#10;Какой-то текст, а теперь список:&#10;- первый элемент списка;&#10;- второй элемент списка."
        type="text"
    />
</template>

<script>
import useTestDocs from "@/hooks/useTestDocs"
export default {
    data() {
        return {
        }
    },
    props: {
        job: {
            type: Object,
            required: true,
        }
    },
    methods: {
    },
    setup(props) {
        const { test_docs_list } = useTestDocs()

        return {
            test_docs_list
        }
    }
}
</script>

<style scoped></style>
