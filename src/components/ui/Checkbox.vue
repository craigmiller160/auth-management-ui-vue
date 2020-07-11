<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      v-model="value"
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
      modelValue: {
        type: Boolean,
        required: true
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

<style scoped>

</style>
