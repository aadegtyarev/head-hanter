<template>
    <navbar @log_out="log_out"></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import useAuth from "@/hooks/useAuth"

import "@/styles/main.css"

export default {
    components: {
        Navbar
    },
    methods: {
        log_out() {
            this.$store.state.auth.isAuth = false
            this.logout()
            this.$router.push('/login')
        },
    },
    setup(props) {
        const { logout } = useAuth()
        return {
            logout
        }
    },
}
</script>

<style></style>
