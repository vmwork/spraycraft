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
        v-for="item in orders"
        :key="item.id"
        class="card-button"
        @click="setIsOrder(item)"
      >
        <UiOrderCard :item="item" />
      </button>
    </div>
    <div v-else>
      <UiGoods :order="order" @close-goods="isOpenFullCart = false" />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Ortders',
});
type IorderItem = {
  id: number;
  transaction_id: string;
  date: string;
  status: string;
  game_name: string;
  game_id: number;
  amount: string;
};
const isOpenFullCart = ref(false);
const order = ref({});
const setIsOrder = (item: IorderItem) => {
  order.value = item;
  isOpenFullCart.value = true;
};
const orders = ref([
  {
    id: 1,
    transaction_id: '15326',
    date: '12.06.2024',
    status: 'Success',
    game_name: 'Ernardd',
    game_id: 1523523623,
    amount: '13.26',
    goods: '279,99',
  },
  {
    id: 2,
    transaction_id: '15325',
    date: '12.06.2024',
    status: 'Success',
    game_name: 'Evetdhre',
    game_id: 1523523623,
    amount: '15343,26',
    goods: '279,99',
  },
  {
    id: 3,
    transaction_id: '12125',
    date: '12.06.2024',
    status: 'Success',
    game_name: 'Svnyum',
    game_id: 1523523623,
    amount: '1763,26',
    goods: '279,99',
  },
  {
    id: 4,
    transaction_id: '153425',
    date: '12.06.2024',
    status: 'Success',
    game_name: 'Tnuykug',
    game_id: 1523523623,
    amount: '153543,26',
    goods: '279,99',
  },
  {
    id: 5,
    transaction_id: '153215',
    date: '12.06.2024',
    status: 'Success',
    game_name: 'Ernardd',
    game_id: 1523523623,
    amount: '135,0',
    goods: '279,99',
  },
]);
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
