/**
 * Created by tony on 2015/8/16.
 */
Ext.define('AgileDevOpsClient.store.planning.ReleaseStore', {
    extend: 'Ext.data.Store',

    alias: 'planning.ReleaseStore',

    requires: [
        'AgileDevOpsClient.model.planning.Release'
    ],

    model: 'planning.Release',

    /*
    Fields can also be declared without a model class:
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'age',       type: 'int'},
        {name: 'eyeColor',  type: 'string'}
    ]
    */


    data : [
        {title: 'Project A',    startDate: '2015-08-10', endDate: '2015-09-09'},
        {title: 'Project B',    startDate: '2015-09-10', endDate: '2015-10-09'},
        {title: 'Project C',    startDate: '2015-10-10', endDate: '2015-11-09'},
    ]

});