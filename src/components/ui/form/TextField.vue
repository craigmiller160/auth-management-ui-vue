<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :class="inputClasses"
      :type="type"
      v-model="value"
      :disabled="disabled"
    />
      <p class="error-msg" v-if="state.error.exists">{{ state.error.message }}</p>
    <span>{{ errors[0] }}</span>
  </div>
</template>

<script>
  import { computed, reactive, watch } from 'vue';

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
      modelValue: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      required: {
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
      const state = reactive({
        error: {
          exists: false,
          message: ''
        }
      });
      const inputClasses = computed(() => {
        const base = 'form-control';
        const error = state.error.exists ? 'error-input' : '';
        return `${base} ${error}`;
      });

      watch(value, (newValue) => {
        if (props.required && !newValue) {
          state.error = {
            exists: true,
            message: 'Field is required'
          };
        } else {
          state.error = {
            exists: false,
            message: ''
          };
        }
      });

      return {
        id,
        value,
        inputClasses,
        state
      };
    }
  };
</script>

<style scoped lang="scss">
  label {
    font-weight: bold;
  }

  .error-input {
    border: 1px solid red;
  }

  .error-msg {
    color: red;
  }
</style>
