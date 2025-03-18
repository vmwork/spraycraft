<template>
  <button
    class="button balck-text-butto transition delay-150 duration-300 hover:scale-105 ease-in-out hover:-translate-y-1"
  >
    {{ buttonName }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  buttonName: string;
}>();
const { buttonName } = props;
</script>
<style lang="scss" scoped>
.button {
  background-color: $bg-button-main;
  width: 100%;
  padding: 16px;
  font-size: 12px;
  border-radius: 24px;
}
.balck-text-button {
  color: $text-main;
  font-weight: 600;
}
.gray-text-button {
  color: $text-gray;
}
</style>
