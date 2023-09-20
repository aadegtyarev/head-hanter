<template>
    <div>
        <h1>Пользователи</h1>
        <my-input
            class="search-input"
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingUsers"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Создать пользователя</my-button>
        </div>
        <users-list
            :users="users"
            v-if="!isUsersLoading"
        />
        <div v-else>Идёт загрузка...</div>
        <div
            v-intersection="loadMoreUsers"
            class="observer"
        ></div>
    </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import useUsers from "@/hooks/useUsers"

export default {
    components: {
        UsersList,
    },
    methods: {
        close(job) {
            job.closed = true
            this.editJob(job)
        },
        open(job) {
            job.closed = false
            this.editJob(job)
        },
        create() {
            this.$router.push('/user-create')
        }
    },
    data() {
        return {
        };
    },
    setup(props) {
        const { searchQuery, users, isUsersLoading, loadMoreUsers, fetchingUsers } = useUsers();

        return {
            users,
            isUsersLoading,
            searchQuery,
            fetchingUsers,
            loadMoreUsers,
        }
    }
};
</script>

<style></style>
