/**
 * Created by jerezb on 2017-06-14.
 */
import {Vue, RootInstance, $, jQuery, moment, timezone, _, localStorage} from '../../../vue-with-api.config';
import nextTick from 'p-immediate';
import test from 'ava';

//load the component with a vue instance
RootInstance.template = '<div><regions-manager v-ref:test-component campaign-id="5830c58b-a183-49ec-a61e-a3c748b33c28"></regions-manager></div>';
RootInstance.components = {'regions-manager': require('../../../../components/regions/regions-manager.vue')};
document.body.insertAdjacentHTML("afterbegin", "<app></app>");
const vm = new Vue(RootInstance).$mount('app');
let RegionsManager = vm.$refs.testComponent;

test('regions populated', t => {
    t.truthy(RegionsManager.regions.length);
});

test('room types populated', t => {
    t.truthy(RegionsManager.roomTypes.length);
});

test('manager populated', async t => {
    RegionsManager.currentRegion = RegionsManager.regions[0];
    await nextTick();
    t.truthy(RegionsManager.manager.length);
    await nextTick();
});

test.after('create accommodation', async t => {
    RegionsManager.startNewAccommodation();
    await nextTick();
    t.true(RegionsManager.showAccommodationManageModal);
    RegionsManager.currentAccommodation = _.extend(RegionsManager.currentAccommodation, {
        name: "4 Seasons Hotel"
    });
    await nextTick();
    t.truthy(RegionsManager.manageAccommodation());
    // await nextTick();
    // t.falsy(RegionsManager.currentAccommodation);
    // t.false(RegionsManager.showAccommodationManageModal);
});

test.after('update accommodation', async t => {
    RegionsManager.currentAccommodation = RegionsManager.manager[0];
    await nextTick();
    RegionsManager.editAccommodation(RegionsManager.manager[1]);
    await nextTick();
    RegionsManager.currentAccommodation = _.extend(RegionsManager.currentAccommodation, {
        description: "Lorem Ipsum..."
    });
    await nextTick();
    t.truthy(RegionsManager.manageAccommodation());
});

/*test.after('delete accommodation', async t => {
    RegionsManager.currentAccommodation = RegionsManager.manager[0];
    await nextTick();
    t.false(RegionsManager.showAccommodationDeleteModal);
    RegionsManager.openDeleteAccommodationModal(RegionsManager.manager[0]);
    await nextTick();
    t.true(RegionsManager.showAccommodationDeleteModal);
    RegionsManager.deleteAccommodation();
    await nextTick();
    t.false(RegionsManager.showAccommodationDeleteModal);
});*/
