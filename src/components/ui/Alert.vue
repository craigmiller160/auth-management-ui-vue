<template>
  <div :class="alertClasses">
    {{ message }}
    <button type="button" class="close" @click="close">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import { HIDE_ALERT } from '@/store/modules/alert/keys';

  export default {
    name: 'Alert',
    setup() {
      const store = useStore();

      const alertClasses = computed(() => {
        const show = store.state.alert.details.show ? 'show' : '';
        const typeClass = `alert-${store.state.alert.details.type}`;
        return `alert ${show} ${typeClass}`;
      });

      const message = computed(() => store.state.alert.details.message);

      const close = () => store.commit(HIDE_ALERT);

      return {
        alertClasses,
        message,
        close
      };
    }
  };
</script>

<style lang="scss" scoped>
  .alert {
    display: none;
    margin: 1rem;
    &.show {
      display: block;
    }
  }
</style>
