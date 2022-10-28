<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              v-model="selectedOrganizations"
              :value="organization"
              :id="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Accordion from "@/components/shared/Accordion.vue";
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters(["UNIQUE_ORGANIZATIONS"]),
  },
  methods: {
    ...mapMutations(["ADD_SELECTED_ORGANIZATIONS"]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
    },
  },
};
</script>

<style scoped></style>
