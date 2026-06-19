console.log("📊 System Information:", process.argv);

const [nodePath, scriptPath, ...args] = process.argv;
console.log("Node.js Path:", nodePath);
console.log("Script Path:", scriptPath);
console.log("Arguments:", args);

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("请提供两个有效的数字作为参数");
  process.exit(1);
}

switch (operation) {
  case "add":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "subtract":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "multiply":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "divide":
    if (num2 === 0) {
      console.error("除数不能为零");
      process.exit(1);
    }
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    console.error("未知的操作类型，请使用 add、subtract、multiply 或 divide");
    process.exit(1);
}
