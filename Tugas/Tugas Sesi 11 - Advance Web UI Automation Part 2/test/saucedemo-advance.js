const { Builder } = require('selenium-webdriver');
const LoginPage = require('../pages/loginPage');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const assert = require('assert');

describe('Tugas Advance - Saucedemo POM & Visual Testing', function () {
    this.timeout(50000);
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Skenario 1: Sukses Login (Using POM)', async function () {
        const loginPage = new LoginPage(driver);
        await loginPage.openUrl();
        await loginPage.login('standard_user', 'secret_sauce');
        let url = await driver.getCurrentUrl();
        assert.ok(url.includes('inventory.html'));
    });

    it('Skenario 2: Visual Testing Halaman Utama', async function () {
        await driver.get('https://www.saucedemo.com/');
        
        // Ambil screenshot saat ini
        const screenshot = await driver.takeScreenshot();
        const currentImgBuffer = Buffer.from(screenshot, 'base64');
        fs.writeFileSync('current.png', currentImgBuffer);

        // Jika belum ada baseline, buat dulu
        if (!fs.existsSync('baseline.png')) {
            fs.writeFileSync('baseline.png', currentImgBuffer);
            console.log('Baseline image created!');
            return;
        }

        // Baca gambar untuk dibandingkan
        const img1 = PNG.sync.read(fs.readFileSync('baseline.png'));
        const img2 = PNG.sync.read(fs.readFileSync('current.png'));
        const { width, height } = img1;
        const diff = new PNG({ width, height });

        // Bandingkan
        const numDiffPixels = pixelmatch(
            img1.data, img2.data, diff.data, width, height, { threshold: 0.1 }
        );

        fs.writeFileSync('diff.png', PNG.sync.write(diff));
        
        const diffPercentage = (numDiffPixels / (width * height)) * 100;
        console.log(`Visual mismatch: ${diffPercentage.toFixed(2)}%`);
        
        assert.ok(diffPercentage < 5, 'Tampilan web berubah terlalu banyak!');
    });

    after(async function () {
        await driver.quit();
    });
});