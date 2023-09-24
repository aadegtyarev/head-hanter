<template>
    <div>
        <test-doc-card :test_doc="test_doc" />
    </div>
</template>

<script>
import TestDocCard from "@/components/TestDocCard.vue";
import useGetTestDoc from "@/hooks/useGetTestDoc"
import { useRoute } from 'vue-router'

export default {
    components: {
        TestDocCard
    },
    data() {
        return {
        };
    },
    setup(props) {
        const route = useRoute()
        const TestDocId = route.params.id
        const { test_doc } = useGetTestDoc(TestDocId);

        return {
            test_doc
        }
    }
};
</script>

<style scoped></style>
