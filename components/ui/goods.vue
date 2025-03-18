<template>
  <div class="mt-3 px-3 py-4">
    <div>
      <UiOrderCard />
    </div>
    <div class="text-white flex justify-between items-center mt-2">
      <div>Your Goods:</div>
      <div class="font-semibold">1 - 279,99$</div>
    </div>
    <div
      class="order-card_goods mt-2 w-full py-[19px] flex flex-col items-center justify-center"
    >
      <div class="flex items-center gap-2">
        <div class="font-semibold">40,500</div>
        <div class="plus-goods text-xs px-2 py-2 pr-3">+1,500</div>
      </div>
      <div class="flex text-sm font-semibold items-center gap-2 mt-2">
        <div class="">279,99$</div>
        <div class="over-money line-through font-semibold">749.99$</div>
      </div>
    </div>
    <div class="mt-3">
      <UiButton :button-name="'Ask ?'" />
    </div>
  </div>
</template>
<script setup lang="ts">
// const props = defineProps<{

// }>();
</script>
<style lang="scss" scoped>
.order-card_goods {
  color: $text-white;
  background-color: $bg-secondary;
  border-radius: 16px;
}
.plus-goods {
  background-color: $bg-secondary-hover;
  border-radius: 16px;
}
.over-money {
  color: $text-gray-light;
}
</style>
