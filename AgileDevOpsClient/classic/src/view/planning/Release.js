/**
 * Created by tony on 2015/8/14.
 */
Ext.define('AgileDevOpsClient.view.planning.Release', {
    extend: 'Ext.tab.Panel',

    alias:'planning.release',
    requires: [
        'AgileDevOpsClient.view.planning.ReleaseCard',
        'Ext.button.Button'
    ],
    items: [
        {
            title: 'Card',
            //xtype: 'panel',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
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

            }],

            items: [ {
                xtype: 'releasecard'
            }]
        }, {
            title: 'Time line'
        }
    ]
});