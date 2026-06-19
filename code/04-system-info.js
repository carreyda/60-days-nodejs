console.log("process.version>>", process.version); // 输出 Node.js 版本
console.log("process.platform>>", process.platform); // 输出操作系统类型和版本
console.log("process.arch>>", process.arch); // 输出 CPU 架构
console.log("__filename:", __filename); // 当前文件的绝对路径
console.log("__dirname:", __dirname); // 当前文件所在目录

// 内存使用情况（格式化为 MB）
const memoryUsage = process.memoryUsage();
const formatMB = (bytes) => (bytes / 1024 / 1024).toFixed(2) + " MB";

console.log({
  rss: formatMB(memoryUsage.rss), // 进程占用的总内存
  heapTotal: formatMB(memoryUsage.heapTotal), // V8 堆内存总量
  heapUsed: formatMB(memoryUsage.heapUsed), // V8 堆内存已用
  external: formatMB(memoryUsage.external), // C++ 对象占用的内存
});

// 进程运行时间（秒）
const uptime = process.uptime();
console.log(`运行时间: ${uptime.toFixed(2)} 秒`);
