<template>
    <div
        class="dialog"
        v-if="show"
        @click="hideDialog"
    >
        <div
            class="dialog-content"
            @click.stop
        >
            <slot></slot>
        </div>

    </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin"
export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
    mounted() {

    }

}
</script>
<style></style>