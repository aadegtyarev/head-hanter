<template>
    <div>
        <test-template-card :test_template="test_template" />
    </div>
</template>

<script>
import TestTemplateCard from "@/components/TestTemplateCard.vue";
import useGetTestTemplate from "@/hooks/useGetTestTemplate"
import { useRoute } from 'vue-router'

export default {
    components: {
        TestTemplateCard
    },
    data() {
        return {
        };
    },
    setup(props) {
        const route = useRoute()
        const testTemplateId = route.params.id
        const { test_template } = useGetTestTemplate(testTemplateId);

        return {
            test_template
        }
    }
};
</script>

<style scoped></style>
