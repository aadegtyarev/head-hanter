import { onMounted, ref } from "vue";
import axios from "axios";

export default function useUsers() {
    const users = ref([]);
    const users_list = ref([]);
    const isUsersLoading = ref(false);
    const page = ref(1);
    const searchQuery = ref("");

    const fetchingUsers = async () => {
        try {
            isUsersLoading.value = true;
            page.value = 1;
            const response = await axios.get("/users", {
                params: {
                    search: searchQuery.value,
                },
            });
            users.value = response.data;
            fillUsersArray();
        } catch (error) {
            console.log(error);
        } finally {
            isUsersLoading.value = false;
        }
    };

    const fillUsersArray = async () => {
        try {
            users.value.forEach((element) => {
                if (!element.closed) {
                    users_list.value.push({
                        value: String(element.id),
                        name: element.name,
                    });
                }
            });
        } catch (error) { }
    };

    onMounted(fetchingUsers);

    return {
        users,
        users_list,
        isUsersLoading,
        searchQuery,
        fetchingUsers,
    };
}
