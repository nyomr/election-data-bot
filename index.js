import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    headless: false,
    ignoreHTTPSErrors: true,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://cekdptonline.kpu.go.id/");

  await page.waitForSelector("#__BVID__20");
  await page.type("#__BVID__20", "16digitsID");
  await new Promise((r) => setTimeout(r, 8000));
  await page.click(".iconsminds-magnifi-glass");
}

main();
