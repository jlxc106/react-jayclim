
const puppeteer = require('puppeteer');

let browser

const baseUrl = `http://localhost:3000/`

beforeAll(async () => {
  // console.log("open")
  browser = await puppeteer.launch({
    headless: true
  });
})

afterAll(() => {
  // console.log("close")
  browser.close();
})

describe('Headless Browser Tests', () => {
  test('Particle JS Canvas Background Loads Properly', async () => {
    let page = await browser.newPage();
    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });

    await page.goto(`${baseUrl}`);
    await page.waitForSelector("canvas.particles-canvas-home")

    const html = await page.$eval('canvas.particles-canvas-home', e => { 
      style = e.currentStyle || window.getComputedStyle(e, false)
      return style.backgroundImage.slice(4, -1).replace(/"/g, "")
    });
      expect(html).toBe(`${baseUrl}static/media/home_background.8393fbf0.jpg`);
  }, 16000);

  test('main h1 loads correctly', async () => {
    let page = await browser.newPage();

    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });

    await page.goto(`${baseUrl}`);
    await page.waitForSelector(".main-text-container")

    const html = await page.$eval('.main-text-container h1', e => e.innerHTML);
    expect(html).toBe('Jay Lim');
  }, 16000);

  // make sure resume url is working
  test('Footer Resume URL works correctly', async () => {
    let page = await browser.newPage();

    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });

    await page.goto(`${baseUrl}`);
    await page.waitForSelector(".section-footer .link-resume")

    const resumeURL = await page.$eval(".section-footer .link-resume", e => e.href)

    expect(resumeURL).toBe(`${baseUrl}Jay_Lim_Resume.pdf`)
  }, 16000);

  test('Footer Github URL works correctly', async () => {
    let page = await browser.newPage();
    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });
    await page.goto(`${baseUrl}`);
    await page.waitForSelector(".section-footer .link-github")
    const resumeURL = await page.$eval(".section-footer .link-github", e => e.href)
    expect(resumeURL).toBe(`https://www.github.com/jlxc106`)
  }, 16000);

  test('Header LinkedIn URL works correctly', async () => {
    let page = await browser.newPage();
    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });
    await page.goto(`${baseUrl}`);
    await page.waitForSelector(".main-text-container .link-linkedin")
    const resumeURL = await page.$eval(".main-text-container .link-linkedin", e => e.href)
    expect(resumeURL).toBe(`https://www.linkedin.com/in/jayl1m/`)
  }, 16000);


  test('Header Github URL works correctly', async () => {
    let page = await browser.newPage();
    // page.emulate({
    //   viewport: {
    //     width: 1000,
    //     height: 2000
    //   },
    //   userAgent: ''
    // });
    await page.goto(`${baseUrl}`);
    await page.waitForSelector(".main-text-container .link-github")
    const resumeURL = await page.$eval(".main-text-container .link-github", e => e.href)
    expect(resumeURL).toBe(`https://www.github.com/jlxc106`)
  }, 16000);
});