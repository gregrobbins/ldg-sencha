Ext.define('ldg.store.Concerts', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
    ],

    config: {
        model: 'ldg.model.Concert',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://ldg.aaa-mailhost.net/schedule',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }

});
