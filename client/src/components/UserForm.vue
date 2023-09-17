<template>
    <div>
        <form @submit.prevent>
            <h4>Создание пользователя</h4>
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
                v-model="user.password"
                type="password"
                placeholder="Пароль"
            />
            <my-input
                v-model="user.position"
                type="text"
                placeholder="Должность"
            />
            <div class="app-btns">
                <my-button @click="create">
                    Создать
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: ''
            },
        }
    },
    methods: {
        create() {
            this.$emit('create', this.user)
        },
    },
}
</script>

<style scoped></style>
