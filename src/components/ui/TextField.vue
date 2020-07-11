<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      class="form-control"
      :type="type"
      v-model="value"
      :disabled="disabled"
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
      modelValue: String,
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      const id = computed(() => `${props.name}_field`);
      const value = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val)
      });

      return {
        id,
        value
      };
    }
  };
</script>

<style scoped lang="scss">
  label {
    font-weight: bold;
  }
</style>
