/**
 * Created by tony on 2015/8/7.
 */
Ext.define('AgileDevOpsClient.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    root: {
        expanded: true,
        children: [
            {
                text: 'Planning',
                expanded: false,
                selectable: false,
                iconCls: 'x-fa fa-leanpub',
                routeId : 'pages-parent',
                id:       'pages-parent',
                children: [
                    {
                        text: 'Release',
                        view: 'planning.Release',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'planning.Release'
                    },
                    {
                        text: 'Sprint',
                        view: 'pages.Error404Window',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },
                    {
                        text: 'Back log',
                        view: 'pages.Error500Window',
                        leaf: true,
                        iconCls: 'x-fa fa-times-circle',
                        routeId:'pages.500'
                    }
                ]
            },
            {
                text:   'Development',
                expanded: false,
                selectable: false,
                iconCls: 'right-icon x-fa fa-send ',
                routeId: 'progress',
                id: 'progress',
                children: [
                    {
                        text: 'Project progress',
                        view: 'pages.BlankPage',
                        leaf: true,
                        iconCls: 'x-fa fa-file-o',
                        routeId:'pages.blank'
                    },
                    {
                        text: 'My progress',
                        view: 'pages.Error404Window',
                        leaf: true,
                        iconCls: 'x-fa fa-exclamation-triangle',
                        routeId:'pages.404'
                    },

                ]

            },
            {
                text: 'Deployment',
                view: 'pages.FAQ',
                leaf: true,
                iconCls: 'x-fa fa-question',
                routeId:'faq'
            },
            {
                text:   'Settings',
                view:   'widgets.Widgets',
                leaf:   true,
                iconCls: 'x-fa fa-flask',
                routeId:'widgets'
            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});