import { ref } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { useNuxtApp } from "#app";

export default function useForm() {
  const refCustomForm = ref<FormInstance | null>(null);
  const loadingForm = ref<boolean>(false);

  const { $errors } = useNuxtApp();

  /**
   * Clear custom API validation errors stored in the $errors object.
   */
  const clearError = (): void => {
    $errors.clear();
  };

  /**
   * Clear form field validation errors (Element Plus) and custom API errors.
   */
  const doClearError = (): void => {
    refCustomForm.value?.clearValidate();
    clearError();
  };

  /**
   * Reset all form fields to their initial values and clear all errors.
   */
  const doReset = (): void => {
    refCustomForm.value?.resetFields();
    clearError();
  };

  /**
   * Handle form submission with form validation and error handling.
   *
   * @param submit - An async function to execute after validation (e.g., API call). Must return a Promise.
   * @returns Resolves to true if submission succeeds, or false if validation or API error occurs.
   */
  const doSubmit = async (submit: () => Promise<void>): Promise<boolean> => {
    try {
      await refCustomForm.value?.validate();
    } catch (_) {
      return false;
    }

    try {
      loadingForm.value = true;
      doClearError();
      await submit();

      return true;
    } catch (error: any) {
      let message =
        error.response?.data?.message ||
        "An error has occurred. Please try again.";

      if (error.response?.status === 422) {
        message = "Please check your input values again.";
      } else {
        ElMessage.error({
          message,
          grouping: true,
        });
      }

      return false;
    } finally {
      loadingForm.value = false;
    }
  };

  return {
    refCustomForm,
    loadingForm,
    doSubmit,
    doClearError,
    doReset,
  };
}
