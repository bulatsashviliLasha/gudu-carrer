<template>
  <header
    class="w-full text-sm headerHeightClass h-16"
    :class="{ 'h-32': isLoggedIn && this.$route.name === 'job-results' }"
  >
    <div class="fixed z-50 top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Gudu Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              class="h-full ml-9 first:ml-0"
              v-for="menuItem in menuItems"
              :key="menuItem"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button
            type="primary"
            text="Sign in"
            @click="LOGIN_USER"
            v-else
          />
        </div>
      </div>
      <sab-nav v-if="isLoggedIn && this.$route.name === 'job-results'" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ActionButton from "@/components/shared/ActionButton.vue";
import ProfileImage from "@/components/navigation/ProfileImage.vue";
import SabNav from "@/components/navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SabNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Gudu", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn && false,
      };
    },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations(["LOGIN_USER"]),
  },
};
</script>

<style scoped></style>
