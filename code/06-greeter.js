process.stdout.write("请输入姓名：");

process.stdin.once("data", (name) => {
  process.stdout.write("请输入年龄：");

  process.stdin.once("data", (age) => {
    process.stdout.write(
      `你好，${name.toString().trim()}！你今年 ${age.toString().trim()} 岁。\n`,
    );
    process.stdin.destroy();
  });
});
