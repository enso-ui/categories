<template>
    <enso-form class="box form-box has-background-light raises-on-hover"
               @ready="form = $event.form">
        <template #levelOne="{ field }">
            <form-field :field="field"/>
        </template>
        <template #parent_id="{ field }">
            <form-field :field="field"
                        :params="{
                            parent_id: form.field('levelOne').value,
                        }"/>
        </template>
        <template #file_id>
            <slot name="file_id"/>
        </template>
    </enso-form>
</template>

<script>
import { EnsoForm, FormField } from '@enso-ui/forms/bulma';

export default {
    name: 'BaseForm',

    components: { EnsoForm, FormField },

    data: () => ({
        form: null,
    }),
};
</script>
