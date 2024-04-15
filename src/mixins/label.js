import {ref} from "vue";

export function useLabel() {
    const label = ref('label');
    // defineEmits('updateLabel')
    function updateLabel(val) {
        label.value = val;

    }

    return {label, updateLabel};
}