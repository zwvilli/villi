import mockjs from 'mockjs';

export default {
    // 使用 mockjs 等三方库
    'GET /api/getStu': mockjs.mock({
        code: 200,
        msg: '学员列表请求成功',
        'data|30': [
            {
                'key|+1': 0,
                name: '@cname',
                "score|50-100": 100,
                city: '@city',
                "age|18-30": 30
            }
            // 'list|100': [{ name: '@cname()', 'value|1-100': 50, 'type|0-2': 1 }],
        ]
    }),

};

// export default {
//     'GET /api/stu': [
//         {
//             id: 1,
//             username: '张三',
//             score: 100
//         },
//         {
//             id: 2,
//             username: '李四',
//             score: 200
//         },
//     ]
// }