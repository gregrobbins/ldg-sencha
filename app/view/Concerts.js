Ext.define('ldg.view.Concerts', {
    extend: 'Ext.navigation.View',
    xtype: 'concertslist',

    requires: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP',
        'Ext.data.Store'
    ],

    config: {
        title: 'Conciertos',
        iconCls: 'music1',
        items: {
            title: 'Pr&oacute;ximos Conciertos',
            autoLoad: true,
            xtype: 'list',
            itemTpl: '{title}: {showDate}',
            store: {
                autoLoad: true,
                fields: ['showDate', 'showTime', 'title', 'desc_es', 'filename'],
                proxy: {
                    type: 'jsonp',
                    url: 'http://ldg.aaa-mailhost.net/schedule',
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                }
            }
        }
    }
});
