<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 bg-black/100" aria-hidden="true" />

    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel class="auth-dialog p-4 w-full max-w-sm rounded-2xl">
        <div class="flex justify-between items-center">
          <div
            class="auth-tabs flex items-center justify-between rounded-2xl p-1"
          >
            <button
              class="auth-tab rounded-2xl"
              :class="{ 'acvive-tab': isLogin }"
              @click="changeTab('login')"
            >
              Login
            </button>

            <button
              class="auth-tab rounded-2xl"
              :class="{ 'acvive-tab': !isLogin }"
              @click="changeTab('register')"
            >
              Registration
            </button>
          </div>
          <button class="flex items-center gap-2" @click="$emit('closeAuth')">
            <NuxtImg src="/svg/close.svg" width="24" />
          </button>
        </div>
        <div v-if="isLogin" class="login-form mt-6">
          <input
            class="rounded-2xl px-3 py-4"
            type="text"
            placeholder="Email"
          />
          <input
            class="rounded-2xl px-3 py-4 mt-2"
            type="password"
            placeholder="Password"
          />
          <UiButton :button-name="'Login'" class="mt-4" />
        </div>
        <div v-if="!isLogin" class="login-form mt-6">
          <input
            class="rounded-2xl px-3 py-4"
            type="text"
            placeholder="Email"
          />
          <input
            class="rounded-2xl px-3 py-4 mt-2"
            type="password"
            placeholder="Password"
          />
          <input
            class="rounded-2xl px-3 py-4 mt-2"
            type="password"
            placeholder="Confirm Password"
          />
          <div class="use-social flex items-center mt-6 ml-1">
            <Switch
              v-model="enabled"
              :class="enabled ? 'check-box-img' : 'bg-transparent'"
              class="relative inline-flex h-5 w-6 items-center border rounded-[4px]"
            >
              <NuxtImg
                v-if="enabled"
                class="rotate-[270deg]"
                src="/svg/arrow.svg"
                width="24"
              />
            </Switch>
            <span class="check-box-title flex w-full ml-2"
              >Use social networks</span
            >
          </div>
          <UiButton :button-name="'Registration'" class="mt-6" />
        </div>
        <UiSocial />
        <div v-if="isLogin" class="fogot-pass flex justify-center mt-6">
          Forgot password ?
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, Switch } from '@headlessui/vue';
const props = defineProps<{
  isLogin: boolean;
}>();

const emit = defineEmits(['closeAuth']);

const isLogin = ref(props.isLogin);
const isOpen = ref(true);
const enabled = ref(false);
function setIsOpen(value: boolean) {
  isOpen.value = value;
}
const changeTab = (tab: string) => {
  if (tab === 'login') {
    isLogin.value = true;
  } else {
    isLogin.value = false;
  }
};
</script>
<style lang="scss" scoped>
.auth-dialog {
  background-color: $bg-secondary;
  .auth-tabs {
    width: 224px;
    height: 40px;
    background-color: $bg-secondary-hover;
    color: $text-white;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 1px;
    transition: 1s;
  }
  .auth-tab {
    width: 106px;
    height: 32px;
  }
  .acvive-tab {
    background-color: $bg-button-main;
    color: $text-main;
    transition: 1s;
  }
  .login-form {
    input {
      width: 100%;
      background-color: $bg-main-dark;
      border: 1px solid rgba(255, 255, 255, 0.22);
      color: $text-gray-light;
      outline: none;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 1px;
    }
    input:placeholder {
      color: $text-gray-light;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 1px;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 1px;
    }
  }
  .fogot-pass {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 3%;
    color: $text-gray-light;
  }

  .check-box-title {
    color: $text-gray-light;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 1px;
  }
}
</style>
