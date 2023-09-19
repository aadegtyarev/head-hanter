<template>
    <table
        class="list-table"
        style="max-width: 600px;"
    >
        <caption>Сравнение требований и возможностей</caption>

        <tr>
            <th>Что</th>
            <th>Наше</th>
            <th>Соискатель</th>
        </tr>
        <tr>
            <td>Зарплата, руб</td>
            <td>от {{ job.salary_from }} до {{ job.salary_to }}</td>
            <td>{{ response.salary_desired }} </td>
        </tr>
        <tr>
            <td>Образование</td>
            <td>{{ job.education }}</td>
            <td>{{ response.education }} </td>
        </tr>
        <tr>
            <td>Опыт</td>
            <td>{{ job.experience }}</td>
            <td>{{ response.experience }} </td>
        </tr>
        <tr>
            <td>Навыки</td>
            <td>{{ job.skills }}</td>
            <td>{{ response.expskillserience }} </td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
        response: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
