<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input :id="id" :name="name" class="form-control" :value="value" @input="inputChange" />
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'Input',
    props: {
      label: String,
      name: String,
      value: String
    },
    setup(props, { emit }) {
      const id = computed(() => `${props.name}_field`);

      const inputChange = (event) => {
        event.stopPropagation();
        emit('input', event.target.value);
      };

      return {
        id,
        inputChange
      };
    }
  };
</script>

<style scoped>

</style>
