/**
 * Created by tony on 2015/8/16.
 */
Ext.define('AgileDevOpsClient.store.planning.ReleaseStore', {
    extend: 'Ext.data.Store',

    model: 'Release',

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
        {title: 'Project A',    startDate: 'Spencer', endDate: ''},
        {title: 'Project B',    startDate: 'Spencer', endDate: ''},
        {title: 'Project C',    startDate: 'Spencer', endDate: ''},
    ]

});