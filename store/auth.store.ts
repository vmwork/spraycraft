import { set } from 'zod';

interface IAuthStore {
  email: string;
  name: string;
  status: boolean;
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    name: '',
    status: false,
  },
};

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: (state) => state.user.status,
    isUser: (state) => state.user,
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(input: IAuthStore) {
      this.user = input;
    },
  },
});

export const useIsLoadingStore = defineStore('isLoading', {
  state: () => ({ isLoading: false }),
  actions: {
    set(value: boolean) {
      this.$patch({ isLoading: value });
    },
  },
});
