<template>
  <div class="order-card mt-3 px-3 py-4">
    <div class="order-card-header flex items-center justify-between pb-3">
      <div>
        <div class="order-card-header__title">Transaction ID</div>
        <div class="order-card-header__data">#15325</div>
      </div>
      <div>
        <div class="order-card-header__title">Date</div>
        <div class="order-card-header__data">12.06.2024</div>
      </div>
      <div>
        <div class="order-card-header__title">Status</div>
        <div class="order-card-header__data flex">
          <div class="order-status flex justify-center items-center">
            <div class="order-statusinner"></div>
          </div>
          <span>Success</span>
        </div>
      </div>
    </div>
    <div class="order-card-footer flex items-center justify-between mt-3">
      <div>
        <div class="order-card-header__title">Game Name</div>
        <div class="order-card-header__data">Ernardd</div>
      </div>
      <div>
        <div class="order-card-header__title">Game ID</div>
        <div class="order-card-header__data">1523523623</div>
      </div>
      <div>
        <div class="order-card-header__title">Ammount</div>
        <div class="order-card-header__data">$153,26</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// const props = defineProps<{

// }>();
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
  }
  .order-card-header__data {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 1px;
    margin-top: 4px;
  }
  .order-status {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(74, 196, 149, 1);
    margin-right: 4px;
  }
  .order-statusinner {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(17, 177, 116, 1);
  }
}
</style>
