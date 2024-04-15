import {ref} from "vue";

export function useLabel() {
    const label = ref('label');

    function updateLabel(val) {
        label.value = val;
    }

    return {label, updateLabel};
}