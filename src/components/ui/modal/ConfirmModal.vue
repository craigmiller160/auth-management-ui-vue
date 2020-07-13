<template>
  <Modal
    :title="title"
    :show="true"
  >
    <p>{{ message }}</p>
    <template v-slot:footer>
      <button type="button" class="btn btn-primary">Yes</button>
      <button type="button" class="btn btn-info">No</button>
    </template>
  </Modal>
</template>

<script>
  import Modal from '@/components/ui/modal/Modal';

  export default {
    name: 'ConfirmModal',
    components: { Modal },
    props: {
      title: String,
      message: String
    }
  };
</script>

<style scoped>

</style>
