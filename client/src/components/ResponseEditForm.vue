<template>
    <div>
        <h1>Редактирование отклика «{{ job.job_title }}»</h1>
        <form @submit.prevent>
            <response-form :response="response" />
            <label class="label-top">Решение</label>
            <my-textarea
                v-model="response.result"
                class="editor"
                placeholder="Берём на работу с испытательным сроком 3 месяца и зарплатой 90к/мес на руки."
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
import useGetJob from "@/hooks/useGetJob"
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
    props: {
        response: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { cloneObj } = useMyFunction()
        const { job } = useGetJob(props.response.job_id)

        cloneObj(props.response, response_undo)
        return {
            cloneObj,
            job
        }
    }
}
</script>

<style scoped></style>
