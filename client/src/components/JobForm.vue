<template>
    <label class="label-top">Название</label>
    <my-input
        v-focus
        v-model="job.job_title"
        type="text"
        placeholder="Эникейщик"
    />
    <label class="label-top">Зарплата, руб</label>
    <div class="flex">
        <label class="label-left">от</label>
        <my-input
            v-model="job.salary_from"
            type="number"
            placeholder="80000"
        />
        <label class="label-left">до</label>
        <my-input
            v-model="job.salary_to"
            type="number"
            placeholder="90000"
        />
    </div>
    <label class="label-top">Навыки</label>
    <my-input
        v-model="job.skills"
        type="text"
        placeholder="Linux, хорошо ладит с людьми"
    />
    <label class="label-top">Образование</label>
    <my-input
        v-model="job.education"
        type="text"
        placeholder="техническое высшее, радиоинженер"
    />
    <label class="label-top">Требуемый опыт</label>
    <my-input
        v-model="job.experience"
        type="text"
        placeholder="от 1 года"
    />
    <label class="label-top">Тестовое задание</label>
    <my-select
        v-focus
        v-model="job.test_doc_id"
        :options="test_docs_list"
        placeholder="Вакансия"
    />
    <label class="label-top">Описание</label>
    <my-textarea
        class="editor"
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
