<template>
    <div>
        <h1>Вход</h1>
        <login-form @log_in="log_in" />
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import useAuth from "@/hooks/useAuth"

export default {
    components: {
        LoginForm,
    },
    methods: {
        log_in(auth) {
            if (this.login(auth)) {
                this.$store.state.auth.isAuth = true
                this.$router.push('/')
            }
        }
    },
    setup(props) {
        const { login } = useAuth()

        return {
            login
        }
    }

}
</script>

<style scoped></style>
