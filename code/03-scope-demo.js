// scope-demo.js

// 这些是 Node.js 中每个模块都有的特殊变量
console.log("__filename:", __filename); // 当前文件的绝对路径
console.log("__dirname:", __dirname); // 当前文件所在目录
console.log("module:", module); // 当前模块信息
console.log("exports:", exports); // 模块导出对象

// 注意：在 ESModule 模式下，__filename 和 __dirname 不可用
// 需要使用 import.meta.url 替代
