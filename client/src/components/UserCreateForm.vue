<template>
    <div>
        <form @submit.prevent>
            <h1>Создание пользователя</h1>
            <user-form :user="user" />
            <my-input
                v-model="user.password"
                type="password"
                placeholder="Пароль"
            />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="create"
                >
                    Создать
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        UserForm,
    },
    data() {
        return {
            user: {
            },
        }
    },
    props: {
    },
    methods: {
        create() {
            this.$emit('create', this.user)
        },
        cancel() {
            this.$emit('cancel')
        }
    },
}
</script>

<style scoped></style>
