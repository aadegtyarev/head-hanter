<template>
    <div>
        <h1>{{ user.name }}</h1>
        <user-card :user="user" />
    </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import useGetUser from "@/hooks/useGetUser"
import { useRoute } from 'vue-router'

export default {
    components: {
        UserCard
    },
    data() {
        return {
        };
    },
    setup(props) {
        const route = useRoute()
        const userId = route.params.id
        const { user } = useGetUser(userId);

        return {
            user
        }
    }
};
</script>

<style scoped></style>
