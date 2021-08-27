export class WaitUtils {

    async visibleAndExist(elementSelector) {
        await elementSelector.nth(0).visible
        await elementSelector.nth(0).exists
    }
    async waitForVisible(elementSelector) {
        await t.wait(30000)
        return (await elementSelector.visible)
    }
}

export default new WaitUtils();
