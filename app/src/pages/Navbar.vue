<template>
  <div class="px-lg-4 py-lg-1 py-2 nav" :class="{ 'nav-sticky': isScroll }">
    <div class="container">
      <div class="d-flex flex-lg-row flex-column justify-content-between py-3">
        <div class="d-flex justify-content-between">
          <a class="logo" href="#">CONVERTER</a>
          <div class="d-lg-none d-flex align-items-center">
            <svg
              @click="openNav"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18H20M4 6H20H4ZM4 12H12H4Z"
                stroke="#e5e5e5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="hide-mobile" :class="{ show: isOpen }">
          <a href="#about" class="nav-link pl-lg-4">About</a>
          <a href="#faq" class="nav-link pl-lg-4">FAQ</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isScroll: false,
      isOpen: false,
    };
  },

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      this.isScroll = currentScrollPosition > 0;
    },
  },
};
</script>
<style lang="scss" scoped></style>
