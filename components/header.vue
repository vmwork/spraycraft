<template>
  <div class="header w-full px-3 py-2 flex">
    <div class="header-left-block">
      <div
        class="header-avatar w-[80px] h-[36px] rounded-3xl flex justify-center items-center"
      ></div>
    </div>
    <div class="header-right-block w-full flex justify-end items-center gap-1">
      <div class="relative">
        <button
          class="header-right-block__item p-2 pr-4 rounded-3xl flex items-center"
          @click="isShowMoney = !isShowMoney"
        >
          <NuxtImg class="mr-1" src="/svg/money.svg" width="20" />
          <span class="text-xs">{{ money }}</span>
        </button>
        <div
          v-if="isShowMoney"
          class="money-list absolute z-10 rounded-xl mt-1"
        >
          <button
            v-for="item in moneyList"
            :key="item.id"
            class="flex justify-center items-center p-2 pr-4 rounded-xl"
            @click="setMoney(item.id)"
          >
            <NuxtImg class="mr-1" src="/svg/money.svg" width="20" />
            <span class="text-xs">{{ item.name }}</span>
          </button>
        </div>
      </div>
      <div class="relative">
        <button
          @click="isShowlang = !isShowlang"
          class="header-right-block__item p-2 pr-4 rounded-3xl flex items-center"
        >
          <NuxtImg class="mr-1" :src="`/svg/lang${lang}.svg`" width="20" />
          <span class="text-xs">{{ lang }}</span>
        </button>
        <div v-if="isShowlang" class="lang-list absolute z-10 rounded-xl mt-1">
          <button
            v-for="itemLang in languages"
            :key="itemLang.id"
            class="flex justify-center items-center p-2 pr-4 rounded-xl"
            @click="setLang(itemLang.id)"
          >
            <NuxtImg
              class="mr-1"
              :src="`/svg/lang${itemLang.lang}.svg`"
              width="20"
            />
            <span class="text-xs">{{ itemLang.lang }}</span>
          </button>
        </div>
      </div>
      <div class="header-right-block__item--last p-2 rounded-3xl">
        <NuxtImg src="/svg/langEN.svg" width="20" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isShowlang = ref(false);
const isShowMoney = ref(false);
const lang = ref('EN');
const languages = ref([
  {
    id: 1,
    lang: 'EN',
  },
  {
    id: 2,
    lang: 'UA',
  },
  {
    id: 3,
    lang: 'UA',
  },
]);
const money = ref('USD');
const moneyList = ref([
  {
    id: 1,
    name: 'USD',
  },
  {
    id: 2,
    name: 'UAH',
  },
  {
    id: 3,
    name: 'EUR',
  },
]);

const setMoney = (id: number) => {
  const moneyItem = moneyList.value.find(
    (item: { id: number; name: string }) => item.id === id
  );
  money.value = moneyItem?.name || '';
  isShowMoney.value = false;
};
const setLang = (id: number) => {
  const langItem = languages.value.find(
    (item: { id: number; lang: string }) => item.id === id
  );
  lang.value = langItem?.lang || '';
  isShowlang.value = false;
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $bg-header;
  min-height: 52px;
  backdrop-filter: blur(88px);
  color: $text-white;
  .header-avatar {
    background-color: $bg-secondary;
  }
  .header-right-block__item,
  .header-right-block__item--last {
    background-color: $bg-secondary;
  }
  .header-right-block__item:hover {
    background-color: $bg-secondary-hover;
  }
  .money-list,
  .lang-list {
    background-color: $bg-nav;
    button:not(:last-child) {
      border-bottom: 1px solid $bg-secondary-hover;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    button:nth-child(2) {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    button:last-child {
      border-bottom: 1px solid $bg-secondary-hover;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    button:hover {
      background-color: $bg-secondary-hover;
    }
  }
}
</style>
