const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Tugas Sesi 10 - Advance Part 1 (Headless & Hooks)', function () {
    this.timeout(30000);
    let driver;

    // HOOKS: Dijalankan sekali sebelum semua test case
    before(async function () {
        // Konfigurasi Headless Mode 
        let options = new chrome.Options();
        options.addArguments('--headless'); // Browser tidak akan muncul di layar
        options.addArguments('--disable-gpu');

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    });

    // HOOKS: Dijalankan sekali setelah semua test case selesai
    after(async function () {
        await driver.quit();
    });

    it('Test Case 1: Sukses Login di Saucedemo', async function () {
        await driver.get('https://www.saucedemo.com');
        
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        let title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    });

    it('Test Case 2: Tambah Produk ke Keranjang', async function () {
        // Karena sudah login di TC1, kita lanjut cari produk
        await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
        
        // Cek apakah badge keranjang muncul angka 1
        let cartBadge = await driver.findElement(By.className('shopping_cart_badge')).getText();
        assert.strictEqual(cartBadge, '1');
    });
});