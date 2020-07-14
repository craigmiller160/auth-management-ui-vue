import { reactive } from 'vue';
import { MODAL_YES } from '@/components/ui/modal/modalConstants';

export const useConfirmModal = ({ title, message, successCallback }) => {
  const state = reactive({
    show: false,
    title,
    message,
    successCallback
  });

  const show = () => {
    state.show = true;
  };

  const action = (event) => {
    state.show = false;
    if (MODAL_YES === event && state.successCallback) {
      state.successCallback();
    }
  };

  return {
    state,
    show,
    action
  };
};
