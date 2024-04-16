import {defineStore} from "pinia";
import {ref} from "vue";

export const useFormStore = defineStore('form', () => {
    const fields = ref([]);

    function addField(field, type) {
        let index = fields.value.length;
        fields.value.push({field: field, index: index, label: 'Label', name: 'field_' + index, options: null, type: type});
    }

    function removeField(index) {
        fields.value.splice(index, 1);
    }

    function updateLabel(name, label) {
        let index = fields.value.findIndex((field) => {
            return field.name === name;
        });
        fields.value[index].label = label;
    }

    function updateOptions(name, options) {
        let index = fields.value.findIndex((field) => {
            return field.name === name;
        });

        console.log(name, index);
        fields.value[index].options = options;
    }

    return {fields, addField, removeField, updateLabel, updateOptions}
});