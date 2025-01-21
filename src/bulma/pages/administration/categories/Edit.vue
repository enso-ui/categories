<template>
    <base-form @ready="fileId = $event.form.field('file_id').value">
        <template #file_id>
            <div class="upload">
                <label class="label is-inline-block">
                    {{ i18n('Image') }}
                </label>
                <confirmation placement="bottom-end"
                              @show="confirmation = true"
                              @hide="confirmation = false"
                              class="confirmation is-inline-block"
                              v-if="canAccess('administration.categories.upload') && fileId"/>
            </div>
            <uploader :http="http"
                      :url="route('administration.categories.upload', $route.params)"
                      file-key="logo"
                      @upload-successful="fileId = $event.fileId">
                <template #control="{ controlEvents }">
                    <figure class="image slide is-4by2"
                            v-on="controlEvents"
                            v-if="fileId">
                        <img :src="route('core.files.show', fileId)">
                    </figure>
                    <button class="button is-small is-naked"
                            v-on="controlEvents"
                            v-else>
                        <span class="icon">
                            <fa icon="upload"/>
                        </span>
                    </button>
                </template>
            </uploader>
        </template>
    </base-form>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { Uploader } from '@enso-ui/uploader/bulma';
import Confirmation from '@enso-ui/confirmation/bulma';
import BaseForm from './BaseForm.vue';

export default {
    name: 'Edit',

    components: {
        BaseForm, Confirmation, Fa, Uploader,
    },

    inject: ['http', 'i18n', 'route', 'errorHandler', 'canAccess'],

    data: () => ({
        fileId: null,
        confirmation: false,
    }),
};
</script>
