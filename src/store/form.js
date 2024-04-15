import {defineStore} from "pinia";
import {ref} from "vue";

export const useFormStore = defineStore('form', () => {
    const fields = ref([]);

    function addField(field) {
        let index = fields.value.length;
        fields.value.push({field: field, index: index, label: ''});
    }

    return {fields, addField}
});