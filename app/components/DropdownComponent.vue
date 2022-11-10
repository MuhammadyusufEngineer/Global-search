Vue component
<template>
    <div>
        <multiselect v-model="value" :options="options" :placeholder="ph"></multiselect>
    </div>
</template>
  
<script>
import Multiselect from 'vue-multiselect'
export default {
    name: 'Dropwdown',
    // OR register locally
    props: {
        ph: {
            type: String,
            default: ''
        }
    },
    components: { Multiselect },
    data() {
        return {
            value: null,
            options: ['Uzbekistan', 'Dubai', 'Switzerland', 'United States']
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style>
.multiselect {
    min-height: auto;
    z-index: 50 !important;
    width: 140.8px !important;
}
.multiselect__tags {
    padding: 0;
    padding-right: 15px;
    background: transparent !important;
    border: none !important;
    font-size: 16px;
    min-height: 0;
}
.multiselect__select {
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: auto !important;
    height: 10px !important;
    padding: 0 !important;
    line-height: 1.5 !important;
}
.multiselect__placeholder {
    color: #242731 !important;
    margin-bottom: 0 !important;
    padding-top: 0 !important;
}
.multiselect__single {
    background: transparent;
    margin-bottom: 0 !important;
    line-height: 1.5 !important;
}
.multiselect__input {
    background: transparent !important;
    margin-bottom: 0 !important;
    min-height: auto !important;
    vertical-align: middle;
    padding: 0 !important;
}
.multiselect__content-wrapper {
    width: 200px !important
}
</style>