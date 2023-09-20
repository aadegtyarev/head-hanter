<template>
    <div>
        <h1>Пользователи</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingUsers"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Создать пользователя</my-button>
        </div>
        <!-- <my-dialog v-model:show="dialogVisible">
            <user-form @create="createUser" />
        </my-dialog> -->
        <users-list
            :users="users"
            @remove="removeUser"
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
import UserForm from "@/components/UserForm.vue";
import UsersList from "@/components/UsersList.vue";
import useUsers from "@/hooks/useUsers"
import useRemoveUser from "@/hooks/useRemoveUser"
// import useCreateUser from "@/hooks/useCreateUser"

export default {
    components: {
        UserForm,
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
        const { removeUser } = useRemoveUser(users)
        // const { createUser, showDialog, dialogVisible } = useCreateUser(users)


        return {
            users,
            isUsersLoading,
            searchQuery,
            fetchingUsers,
            loadMoreUsers,
            removeUser,
            // createUser,
            // showDialog,
            // dialogVisible
        }
    }
};
</script>

<style></style>
