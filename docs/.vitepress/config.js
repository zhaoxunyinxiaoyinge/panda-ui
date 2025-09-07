module.exports = {
    title: "zpanda-ui",
    lastUpdated: true,
    titleTemplate: true ,
    base:"/panda-ui/",
    appId:"zhao-ui",
    lang: 'zh-CN',
    description: 'Just playing around.',
    head: [['link', { rel: 'icon', href: '/fav.ico' }],["link",{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }]],
    srcDir:".",
    markdown: {
        // theme: 'material-palenight',
        lineNumbers: true
      },
      themeConfig: {
      search: {
      provider: 'local',
      options:{
        appId: '...',
        apiKey: '...',
        indexName: '...',
      }
    },
        outlineTitle:"页面导航",
        logo:"/timger.png",
        docsDir: 'docs',
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        },


        nav: [{
            text: "指南",
            link: "/guide/installtion",
            activeMatch: "/guide/"
        },
        {
            text: "组件",
            link: "/component/icon",
            activeMatch: "/component/"
        },
        {
            text: "首页",
            link: "/",
        }
        ],

        sidebar:
            {
                "/guide": [{
                    text: "指南",
                    items: [
                        {
                            text: '安装',
                            link: "/guide/installtion"
                        },
                        {
                            text: '快速开始',
                            link: "/guide/getStart.html"
                        },
                    ]
                },
                ],

                "/component/": [
                    {
                        text: "基础组件",
                        items: [
                            { text: "icon 图标", link: '/component/icon' },
                            { text: "button 按钮", link: '/component/button' },
                            { text: "link 链接", link: '/component/link' },
                            { text: "scrollbar 滚动", link: '/component/scrollbar' },
                            {text:"layout布局",link:"/component/layout"},
                            {text:"text组件",link:"/component/text"},
                            {text:"space组件",link:"/component/space"},
                            {
                                text:"container容器",
                                link:"/component/container"
                            }
                 
                        ] 
                    },{
                        text:"配置组件",
                        items:[
                            {
                                text:"configProvide",
                                link:"/component/configProvide"
                            }
                        ]
                    },
                    {
                        text:"表单组件",
                        items:[
                            {text:'input 组件',link:'/component/input'},
                            {text:"checkbox 组件",link:'/component/checkbox'}
                        ]
                    },
                    {
                        text:"功能组件",
                        items:[ 
                             { text: "card 卡片", link: '/component/card' },
                            {text:'start 星星评分',link:'/component/start'},
                        ]
                    },
                    {
                        text:"表格组件",
                        items:[
                            {text:'table 组件',link:'/component/tabel'},
                        ]
                    }
                ]
            }

        ,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhaoxunyinxiaoyinge/zhao-ui.git' }],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present 赵训银'
        }
    }
}