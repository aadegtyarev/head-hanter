<template>
    <div>
        <h1>Отклик на «{{ response.job_title }}»</h1>
        <form @submit.prevent>
            <response-form
                :response="response"
                :jobs_list="jobs_list"
            />
            <my-input
                v-model="response.result"
                placeholder="Решение"
                type="text"
            />
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
import ResponseForm from "@/components/ResponseForm.vue";
import useMyFunction from "@/hooks/useMyFunction";

var response_undo = {}

export default {
    components: {
        ResponseForm,
    },

    methods: {
        save() {
            this.$emit('save', this.response)
        },
        cancel() {
            this.cloneObj(response_undo, this.response)
            this.$emit('cancel')
        }
    },
    data() {
        return {
        };
    },
    props: {
        jobs_list: {
            type: Array,
            required: true,
        },
        response: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.response, response_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
