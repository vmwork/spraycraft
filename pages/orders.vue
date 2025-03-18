<template>
  <div class="container-w">
    <div v-if="!isOpenFullCart" class="prodgects px-3 pb-5">
      <NuxtLink
        class="mt-3 link-to-orders hover:scale-101 flex items-center w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        to="/"
      >
        <NuxtImg src="/svg/arrow.svg" width="24" />
        <span>Orders</span>
      </NuxtLink>
      <button
        v-for="(item, i) in 10"
        :key="i"
        class="card-button"
        @click="setIsOpen(true, item)"
      >
        <UiOrderCard />
      </button>
    </div>
    <div v-else>
      <UiGoods />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Ortders',
});

const isOpenFullCart = ref(false);
</script>
<style lang="scss" scoped>
.link-to-orders {
  color: $text-white;
  span {
    font-size: 20px;
    font-weight: 700;
    font-family: Helvetica;
    line-height: 100%;
    letter-spacing: 1.5px;
  }
}
.card-button {
  width: 100%;
}
</style>
