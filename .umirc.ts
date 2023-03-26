import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputPath: 'build',
  layout: {
    title: 'Ant Design',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: ' CRUD',
      path: '/table',
      component: './Table',
    },
    {
      name: ' Test',
      path: '/test',
      component: './Test',
    },
    {
      name: ' 学员管理',
      path: '/stu',
      routes: [
        {
          name: '学员列表',
          path: '/stu/list',
          component: './Stu/list'
        },
        {
          name: '新增学员',
          path: '/stu/pub',
          component: './Stu/pub'
        }
      ]
    },
    {
      path: '/*',
      component: './404',
    },
  ],
  npmClient: 'npm',
  history: { type: 'hash' },
});
