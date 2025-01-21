<template>
    <enso-table class="box is-paddingless raises-on-hover"
                id="categories"
                :path="route('administration.categories.initTable')">
        <template #levelOne="{ row }">
            {{ row.recursive_parent && row.recursive_parent.recursive_parent
        ? row.recursive_parent.recursive_parent.name : null }}
        </template>
        <template #levelTwo="{ row }">
            {{ row.recursive_parent ? row.recursive_parent.name : null }}
        </template>
        <template #label="{ row }">
            {{ row.label ? row.label.name : null }}
        </template>
    </enso-table>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: {EnsoTable},

    inject: ['route'],
};
</script>
