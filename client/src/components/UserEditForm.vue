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
                placeholder="Логин Телеграм"
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
                <my-button @click="save">
                    Сохранить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        save() {
            this.$emit('save', this.user)
        }
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
