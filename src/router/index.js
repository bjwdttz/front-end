import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/table'
        },
        {
            path: '/',
            component: resolve => require(['../components/widgets/Home.vue'], resolve),
            meta: { title: '喵喵喵？' },
            children:[
                {
                    path: '/table',
                    component: resolve => require(['../components/views/BaseTable.vue'], resolve),
                    meta: { title: '数据表格' }
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/views/Upload.vue'], resolve),
                    meta: { title: '批量导入' }
                },
                {
                    path: '/download',
                    component: resolve => require(['../components/views/Download.vue'], resolve),
                    meta: { title: '批量导出' }
                },
                {
                    path: '/usertable',
                    component: resolve => require(['../components/views/UserTable.vue'], resolve),
                    meta: { title: '用户表格', permission: true }
                },
                {
                    path: '/useredt',
                    component: resolve => require(['../components/views/UserEdt.vue'], resolve),
                    meta: { title: '用户信息修改'}
                },
                {
                    path: '/about',
                    component: resolve => require(['../components/views/About.vue'], resolve),
                    meta: { title: '作者简介'}
                }
            ]
            
        },
        {
            path: '/login',
            component: resolve => require(['../components/views/Login.vue'], resolve)
        }/*,
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
        */
    ]
})
