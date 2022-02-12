import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture`Getting Started`
    .page`https://www.saucedemo.com/`;

test('My first test', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');
        
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('/inventory.html');
});