<template>
  <div class="order-card mt-3 px-3 py-4">
    <div class="order-card-header flex items-center justify-between pb-3">
      <div>
        <div class="order-card-header__title">Transaction ID</div>
        <div class="order-card-header__data">#{{ item.transaction_id }}</div>
      </div>
      <div>
        <div class="order-card-header__title">Date</div>
        <div class="order-card-header__data">{{ item.date }}</div>
      </div>
      <div>
        <div class="order-card-header__title">Status</div>
        <div class="order-card-header__data flex">
          <div class="order-status flex justify-center items-center">
            <div class="order-statusinner"></div>
          </div>
          <span>{{ item.status }}</span>
        </div>
      </div>
    </div>
    <div class="order-card-footer flex items-center justify-between mt-3">
      <div>
        <div class="order-card-header__title">Game Name</div>
        <div class="order-card-header__data">{{ item.game_name }}</div>
      </div>
      <div>
        <div class="order-card-header__title">Game ID</div>
        <div class="order-card-header__data">{{ item.game_id }}</div>
      </div>
      <div>
        <div class="order-card-header__title">Ammount</div>
        <div class="order-card-header__data">${{ item.amount }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  item: {
    id: number;
    transaction_id: string;
    date: string;
    status: string;
    game_name: string;
    game_id: number;
    amount: string;
  };
}>();
</script>
<style lang="scss" scoped>
.order-card {
  color: $text-white;
  background-color: $bg-secondary;
  border-radius: 16px;
  .order-card-header {
    border-bottom: 1px solid $border-main;
  }
  .order-card-footer {
  }
  .order-card-header__title {
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 1px;
    color: $text-gray-light;
    text-align: left;
    min-width: 100px;
  }
  .order-card-header__data {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 1px;
    margin-top: 4px;
    text-align: left;
  }
  .order-status {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(74, 196, 149, 1);
    margin-right: 4px;
    text-align: left;
  }
  .order-statusinner {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(17, 177, 116, 1);
  }
}
</style>
