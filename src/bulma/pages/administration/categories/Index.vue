<template>
    <div>
        <div class="columns is-multiline is-centered">
            <div class="column is-narrow">
                <enso-filter class="box raises-on-hover"
                    :options="levelOptions"
                    :name="i18n('Level')"
                    v-model="params.level"/>
            </div>
        </div>
        <enso-table class="box is-paddingless raises-on-hover"
                id="categories"
                :params="params"
                :path="route('administration.categories.initTable')">
        <template #pictureUrl="{ row }">
            <figure class="image is-32x32 has-vertically-centered-content">
                <a :href="row.pictureUrl"
                   target="_blank">
                    <img :src="row.pictureUrl"
                         alt="cover">
                </a>
            </figure>
        </template>
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
    </div>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';
import { EnsoFilter } from '@enso-ui/filters/bulma';

export default {
    name: 'Index',

    components: {EnsoTable, EnsoFilter},

    inject: ['route', 'i18n'],

    data: () => ({
        params: {
            level: null
        },
        levelOptions: [
            { value: 1, label: '1', class: 'has-text-success has-text-weight-bold px-3' },
            { value: 2, label: '2', class: 'has-text-info has-text-weight-bold px-2' },
        ],
    })
};
</script>
