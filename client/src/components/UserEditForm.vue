<template>
    <div>
        <form @submit.prevent>
            <user-form :user="user" />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="save"
                >
                    Сохранить
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
import useMyFunction from "@/hooks/useMyFunction";
var user_undo = {}

export default {
    components: {
        UserForm,
    },

    methods: {
        save() {
            this.$emit('save', this.user)
        },
        cancel() {
            this.cloneObj(user_undo, this.user)
            this.$emit('cancel')
        }
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.user, user_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
