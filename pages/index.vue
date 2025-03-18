<template>
  <div class="container-w">
    <div class="button-wrapper flex flex-col justify-center items-center px-3">
      <div class="px-3 w-full flex flex-col gap-2.5">
        <UiButton :button-name="'Registration'" />
        <UiButton :button-name="'Login'" />
      </div>
      <NuxtLink
        class="link-to-orders flex flex-col justify-center hover:scale-101 items-center w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        to="/orders"
        >Orders</NuxtLink
      >
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Orders',
});
</script>
<style lang="scss" scoped>
.link-to-orders {
  background-color: $bg-button-main;
  width: 100%;
  padding: 12px;
  font-size: 12px;
  border-radius: 24px;
  font-weight: 700;
  margin-top: 40px;
}
.button-wrapper {
  min-height: 90vh;
}
</style>
