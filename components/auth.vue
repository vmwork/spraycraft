<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 bg-black/100" aria-hidden="true" />

    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel class="auth-dialog p-4 w-full max-w-sm rounded-2xl">
        <div class="flex justify-between items-center relative">
          <div v-if="isLoading" class="absolute flex justify-center w-full">
            <div class="w-[200px]"><Progress /></div>
          </div>
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
            v-model="formDataLogin.email"
            class="rounded-2xl px-3 py-4"
            type="text"
            placeholder="Email"
          />
          <span class="red"> {{ formErrors.email }}</span>

          <input
            v-model="formDataLogin.password"
            class="rounded-2xl px-3 py-4 mt-2"
            type="password"
            placeholder="Password"
          />
          <span class="red"> {{ formErrors.password }}</span>

          <UiButton :button-name="'Login'" class="mt-4" @click="login" />
        </div>

        <div v-if="!isLogin" class="login-form mt-6">
          <input
            v-model="formDataLogin.email"
            class="rounded-2xl px-3 py-4"
            type="text"
            placeholder="Email"
          />
          <span class="red"> {{ formErrors.email }}</span>

          <input
            v-model="formDataLogin.password"
            class="rounded-2xl px-3 py-4 mt-2"
            type="password"
            placeholder="Password"
          />
          <span class="red"> {{ formErrors.email }}</span>
          <input
            v-model="formDataLogin.confirmPassword"
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
          <UiButton
            :button-name="'Registration'"
            class="mt-6"
            @click="register"
          />
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
import { z } from 'zod';
import { v4 as uuid } from 'uuid';
import { account } from '~/plugins/utils/appwrite';
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const props = defineProps<{
  isLogin: boolean;
}>();

const emit = defineEmits(['closeAuth']);

const loadingStore = useIsLoadingStore();
const authStore = useAuthStore();

const isLoading = computed(() => loadingStore.isLoading);
const isAuth = computed(() => authStore.isAuth);

const router = useRouter();

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
const formDataLogin = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});
const formErrors = reactive({
  email: '',
  password: '',
});
const errorEmail = ref('');
const errorPassword = ref('');
const confirmPassword = ref('');
const errorConfirmPassword = ref('');

const formShemaLogin = z.object({
  email: z.string().email('Email incorect'),
  password: z.string().min(5, { message: 'Password requred' }),
});

const checkValues = () => {
  const validationResult = formShemaLogin.safeParse(formDataLogin);
  formErrors.email = '';
  formErrors.password = '';
  if (!validationResult.success) {
    const errors = validationResult.error.format();
    formErrors.email = errors?.email?._errors[0] || '';
    formErrors.password = errors?.password?._errors[0] || '';
  }
  return validationResult.success;
};

const login = async () => {
  console.log(checkValues());
  if (!checkValues()) {
    return;
  }
  loadingStore.set(true);
  try {
    await account.createEmailPasswordSession(
      formDataLogin.email,
      formDataLogin.password
    );
    const responce = await account.get();
    if (responce) {
      authStore.set({
        email: responce.email,
        name: responce.name,
        status: true,
      });
      formDataLogin.email = '';
      formDataLogin.password = '';
      router.push('/');
      loadingStore.set(false);
      emit('closeAuth');
    }
  } catch (e) {
    console.log(e);
  } finally {
    loadingStore.set(false);
  }
};

const register = async () => {
  if (!checkValues()) {
    return;
  }
  loadingStore.set(true);
  await account.create(
    uuid(),
    (formDataLogin.email = ''),
    (formDataLogin.password = '')
  );
  await login();
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
.red {
  color: rgb(230, 93, 93);
  font-size: 12px;
  margin-left: 10px;
}
</style>
