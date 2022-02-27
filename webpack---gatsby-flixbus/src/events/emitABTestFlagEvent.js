import {
    getEventEmitter
} from "@flixbus/transclusion-eventing"

export const EVENT_AB_TEST_FLAGS = `cms.ab_test_flags`

/**
 * @param {number} testVariation - Number of test variation
 */
export const emitABTestFlagEvent = (testVariation) => {
    getEventEmitter().emit(EVENT_AB_TEST_FLAGS, {
        webc_cms_app_banner: testVariation,
    })
}