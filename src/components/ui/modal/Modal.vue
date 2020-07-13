<template>
  <div :class="modalClasses" :style="modalStyle">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'Modal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: String
    },
    setup(props, { emit }) {
      const modalStyle = computed(() => ({
        display: props.show ? 'block' : 'none'
      }));

      const modalClasses = computed(() => {
        const base = 'modal fade';
        const showClazz = props.show ? 'show' : '';
        return `${base} ${showClazz}`;
      });

      const close = () => emit('close');

      return {
        modalStyle,
        modalClasses,
        close
      };
    }
  };
</script>

<style scoped>
  .modal {
    background-color: rgba(0,0,0,.4);
  }
</style>
