const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Saucedemo Automation', function () {
    this.timeout(30000); // Set timeout 30 detik biar gak error kalau internet lambat
    let driver;

    // Setup sebelum test dimulai
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build(); 
    });

    // Case 1: Sukses Login
    it('Skenario Sukses Login', async function () {
        await driver.get('https://www.saucedemo.com/');
        
        // Input Username & Password
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        
        // Klik Login
        await driver.findElement(By.id('login-button')).click();

        // Validasi: Cek apakah tulisan "Products" muncul (Assertion)
        let titleText = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(titleText, 'Products');
    });

    // Case 2: Urutkan Produk dari A-Z
    it('Skenario Urutkan Produk A-Z', async function () {
        // Klik dropdown filter
        let dropdown = await driver.findElement(By.className('product_sort_container'));
        await dropdown.click();

        // Pilih opsi "Name (A to Z)" - biasanya ini index 0 atau value 'az'
        await driver.findElement(By.xpath("//option[@value='az']")).click();

        // Validasi: Cek apakah opsi yang aktif benar "Name (A to Z)"
        let activeOption = await driver.findElement(By.className('active_option')).getText();
        assert.strictEqual(activeOption, 'Name (A to Z)');
    });

    // Tutup browser setelah selesai
    after(async function () {
        await driver.quit();
    });
});