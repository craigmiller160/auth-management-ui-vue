<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      class="form-control"
      :value="value"
      @input="inputChange"
      :type="type"
    />
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'Input',
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text'
      }
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

<style scoped lang="scss">
  label {
    font-weight: bold;
  }
</style>
