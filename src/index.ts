let myName = 'Tom';

interface Foo {}

interface MyInterface {
  name: string;
}

// 测试 types 有没有被导报成单独的 .d.ts
export const getMyName: MyInterface = (): MyInterface => {
  return { name: 'shangyang' };
};
