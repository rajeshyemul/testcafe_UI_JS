import { ClientFunction } from 'testcafe';
import { expect } from 'chai';
import Config from '../config';
import StringUtil from '../utils/StringUtil'
import homepage from '../pages/HomePage';

const getURL = ClientFunction(() => window.location.href);
const URL = Config.getApplicationURL();

class HomePageValidations {
    async verifyOnHomePage() {
        const actual = await getURL();
        expect(actual).to.eql(URL,StringUtil.errorReport(actual,URL));
        expect(await homepage.subtitleHeader.exists).to.eql(true,"Element does not exists on the page");
    }
}

export default new HomePageValidations();