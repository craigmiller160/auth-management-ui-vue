<template>
  <Modal
    :title="title"
    :show="show"
  >
    <p>{{ message }}</p>
    <template v-slot:footer>
      <button type="button" class="btn btn-primary" @click="yes">Yes</button>
      <button type="button" class="btn btn-info" @click="no">No</button>
    </template>
  </Modal>
</template>

<script>
  import Modal from '@/components/ui/modal/Modal';
  import { EVENT_MODAL_ACTION, MODAL_NO, MODAL_YES } from '@/components/ui/modal/modalConstants';

  export default {
    name: 'ConfirmModal',
    components: { Modal },
    props: {
      title: String,
      show: {
        type: Boolean,
        default: false
      },
      message: String
    },
    setup(props, { emit }) {
      const yes = () => emit(EVENT_MODAL_ACTION, MODAL_YES);
      const no = () => emit(EVENT_MODAL_ACTION, MODAL_NO);

      return {
        yes,
        no
      };
    }
  };
</script>

<style scoped>

</style>
