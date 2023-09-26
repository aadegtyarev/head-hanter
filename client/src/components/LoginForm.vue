<template>
    <div>
        <form
            class="login"
            @submit.prevent="submit"
        >
            <label>Логин</label>
            <my-input
                required
                v-model="auth.login"
                type="text"
            />
            <label>Пароль</label>
            <my-input
                required
                v-model="auth.password"
                type="password"
            />
            <div class="app-btns">
                <my-button
                    type="submit"
                    class="btn-primary"
                    @submit="submit"
                >Войти в систему</my-button>
            </div>

        </form>
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";


export default {
    components: {
        MyInput,
        MyButton
    },
    data() {
        return {
            auth: {}
        }
    },
    methods: {
        submit() {
            this.$emit('log_in', this.auth)
        }
    },
};
</script>

<style scoped></style>
