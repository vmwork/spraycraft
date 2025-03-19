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
import { Databases } from 'appwrite';
import { DB } from '~/plugins/utils/appwrite';
import { DB_ID, COLLECTION_ORDERS } from '~/app.constants';
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

const orders = ref([]);
const getOrders = async () => {
  try {
    const responce = await DB.listDocuments(DB_ID, COLLECTION_ORDERS);
    orders.value = responce.documents;
  } catch (e) {
    console.log(e);
  }
};

getOrders();
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
