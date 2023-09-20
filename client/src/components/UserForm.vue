<template>
    <div>
        <form @submit.prevent>
            <my-input
                v-focus
                v-model="user.name"
                type="text"
                placeholder="Имя"
            />
            <my-input
                v-model="user.login"
                type="text"
                placeholder="Логин"
            />
            <my-input
                v-model="user.tg_login"
                type="text"
                placeholder="Логин в Телеграм"
            />
            <my-input
                v-model="user.email"
                type="email"
                placeholder="Email"
            />
            <my-input
                v-model="user.position"
                type="text"
                placeholder="Должность"
            />
        </form>
    </div>
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
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
