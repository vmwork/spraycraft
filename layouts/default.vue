<template>
  <div class="relative overflow-hidden">
    <Header />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '~/store/auth.store';
import { account } from '~/plugins/utils/appwrite';

const router = useRouter();

const authStore = useAuthStore();
const isAuth = computed(() => authStore.isAuth);

const checkLogin = async () => {
  try {
    const user = await account.get();
    if (user) {
      authStore.set({
        email: user.email,
        name: user.name,
        status: true,
      });
    }
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};
checkLogin();
</script>
