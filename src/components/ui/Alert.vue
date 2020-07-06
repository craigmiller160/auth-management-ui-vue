<template>
  <div :class="alertClasses">
    {{ message }}
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  export default {
    name: 'Alert',
    setup() {
      const store = useStore();

      const alertClasses = computed(() => {
        const show = store.state.alert.details.show ? 'show' : '';
        const typeClass = `alert-${store.state.alert.details.type}`;
        return `alert ${show} ${typeClass}`;
      });

      return {
        alertClasses,
        message: store.state.alert.details.message
      };
    }
  };
</script>

<style lang="scss" scoped>
  .alert {
    display: none;
    &.show {
      display: block;
    }
  }
</style>
