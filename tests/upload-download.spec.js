const ExcelJS = require("exceljs");
const path = require("path");
const { test, expect } = require("@playwright/test");

async function writeExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");
  const output = readExcel(worksheet, searchText);

  const cell = worksheet.getCell(
    output.row + change.rowChange,
    output.column + change.colChange,
  );

  cell.value = replaceText;

  await workbook.xlsx.writeFile(filePath);
}

function readExcel(worksheet, searchText) {
  let output = {
    row: -1,
    column: -1,
  };

  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        console.log(
          `Found "${searchText}" in Row ${rowNumber}, Column ${colNumber}`,
        );

        output = {
          row: rowNumber,
          column: colNumber,
        };
      }
    });
  });

  return output;
}

test("Upload download excel validation", async ({ page }, testInfo) => {
  const textSearch = "Mango";
  const updateValue = "350";

  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html",
  );

  const downloadPromise = page.waitForEvent("download");

  await page.getByRole("button", { name: "Download" }).click();

  const download = await downloadPromise;

  // เก็บไฟล์ไว้ในโฟลเดอร์ผลลัพธ์ของ Playwright
  const filePath = testInfo.outputPath("download.xlsx");
  await download.saveAs(filePath);
  console.log("Downloaded file path:", filePath);
  await writeExcelTest(
    textSearch,
    updateValue,
    {
      rowChange: 0,
      colChange: 2,
    },
    filePath,
  );

  await page.locator("#fileinput").setInputFiles(filePath);

  const desiredRow = page.getByRole("row").filter({
    has: page.getByText(textSearch, { exact: true }),
  });

  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(
    updateValue,
  );
});
