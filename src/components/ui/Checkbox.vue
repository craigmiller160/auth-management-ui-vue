<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :checked="value"
      @input="onClick"
    />
    <label :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'Checkbox',
    props: {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: Boolean,
        required: true
      }
    },
    setup(props, { emit }) {
      const id = computed(() => `${props.name}_field`);

      const onClick = (event) => {
        emit('input', event.target.checked);
      };

      return {
        id,
        onClick
      };
    }
  };
</script>

<style scoped>

</style>
