/**
 * Created by tony on 2015/8/14.
 */
Ext.define('AgileDevOpsClient.view.planning.Release', {
    extend: 'Ext.tab.Panel',

    alias:'planning.release',
    requires: [
        'AgileDevOpsClient.view.planning.ReleaseCard'
    ],
    items: [
        {
            title: 'Card',
            xtype: 'panel',
            items: [{
                xtype: 'toolbar',
                cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
                height: 50,
                itemId: 'releaseToolbar',
                items: [{
                    xtype: 'button',
                    text: 'Add'
                },
                    {
                        xtype: 'button',
                        text: 'Edit'
                    },
                    {
                        xtype: 'button',
                        text: 'Delete'
                    }
                ]
            }, {
                xtype: 'releasecard'
            }]
        }, {
            title: 'Time line',
        }
    ]
});