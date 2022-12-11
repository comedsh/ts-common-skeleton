"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyName = void 0;
let myName = 'Tom';
// 测试 types 有没有被导报成单独的 .d.ts
const getMyName = () => {
    return { name: 'shangyang' };
};
exports.getMyName = getMyName;
//# sourceMappingURL=index.js.map