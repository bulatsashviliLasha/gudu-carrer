import { computed } from "vue";
import { useRoute } from "vue-router";

const useConfirmRoute = (routerName) => {
  const route = useRoute();
  return computed(() => route.name === routerName)
};

export default useConfirmRoute;
