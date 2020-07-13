<template>
  <div :class="modalClasses" tabindex="-1" role="dialog" :style="modalStyle">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed, ref } from 'vue';

  export default {
    name: 'Modal',
    setup() {
      const show = ref(false);

      const modalStyle = computed(() => ({
        display: show.value ? 'block' : 'none'
      }));

      const modalClasses = computed(() => {
        const base = 'modal fade';
        const showClazz = show.value ? 'show' : '';
        return `${base} ${showClazz}`;
      });

      return {
        modalStyle,
        modalClasses
      };
    }
  };
</script>

<style scoped>
  .modal {
    background-color: rgba(0,0,0,.4);
  }
</style>
