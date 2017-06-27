/**
 * Created by jerezb on 2017-06-26.
 */
import {Vue, RootInstance, $, jQuery, moment, timezone, _, localStorage} from "../../../vue-with-api.config";
import nextTick from "p-immediate";
import test from "ava";

RootInstance.filtersObject = {
    type: "test",
};
//load the component with a vue instance
RootInstance.template = '<div><filters-indicator v-ref:test-component :filters="filtersObject"></filters-indicator></div>';
RootInstance.components = {'filters-indicator': require('../../../../components/filters/filters-indicator.vue')};
document.body.insertAdjacentHTML("afterbegin", "<app></app>");
const vm = new Vue(RootInstance).$mount('app');
let FiltersIndicator = vm.$refs.testComponent;

test('test filters object', t => {
    console.log(FiltersIndicator.filters);
    t.true(_.isObject(FiltersIndicator.filters));
});