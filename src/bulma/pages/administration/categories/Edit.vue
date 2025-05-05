<template>
    <div class="category-edit columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <base-form @ready="fileId = $event.form.field('image_id').value">
                <template #image_id>
                    <div class="upload">
                        <label class="label is-inline-block">
                            {{ i18n('Image') }}
                        </label>
                        <confirmation placement="bottom-end"
                            @confirm="destroy"
                            @show="confirmation = true"
                            @hide="confirmation = false"
                            class="confirmation is-inline-block"
                            v-if="canAccess('administration.categories.upload') && fileId">
                        <a class="button is-medium is-naked"
                            @click="confirmation = true">
                        <span class="icon">
                            <fa icon="trash-alt"/>
                        </span>
                            </a>
                        </confirmation>
                    </div>
                    <uploader class="category-picture"
                        :http="http"
                        :url="route('administration.categories.upload', $route.params)"
                        file-key="image"
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
        </div>
    </div>
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

    inject: ['http', 'i18n', 'route', 'errorHandler', 'canAccess', 'toastr'],

    data: () => ({
        fileId: null,
        confirmation: false,
    }),

    methods: {
        destroy() {
            this.http
            .delete(this.route('administration.categories.image.destroy', this.$route.params))
            .then(({ data: {message}}) => {
                this.fileId = null;
                this.toastr.success(message);
            }).catch(this.errorHandler);
        },
    },
};
</script>
<style>
.category-edit {
    .upload .confirmation {
        vertical-align: middle;
    }
    
    .category-picture
    {
        width: 150px;
    }
}
</style>