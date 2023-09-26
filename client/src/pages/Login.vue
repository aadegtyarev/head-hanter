<template>
    <div>
        <h1>Вход</h1>
        <login-form @log_in="log_in" />
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import useAuth from '@/hooks/useAuth'

export default {
    components: {
        LoginForm,
    },
    methods: {
        async log_in(auth) {
            const [response] = await Promise.all([
                this.login(auth)
            ]);

            if (response.isValid) {
                this.$store.state.auth.isAuth = true
                this.$router.push('/')

                const [token] = await Promise.all([
                    this.createToken(response.user_id)
                ]);
                console.log(token)

                $cookies.set("head-hunter", {
                    "id": response.user_id,
                    "token": token
                }, "7d")
            }
        },
    },
    setup(props) {
        const { login, createToken } = useAuth()

        return {
            login,
            createToken
        }
    }

}
</script>

<style scoped></style>
