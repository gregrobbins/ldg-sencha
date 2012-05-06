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
        iconCls: 'star',
        items: {
            title: 'Pr&oacute;ximos Conciertos',
            autoLoad: true,
            xtype: 'list',
            itemTpl: '{title}: {showDate}',
            store: {
                autoLoad: true,
                fields: ['showDate', 'showTime', 'title', 'desc_es'],
                proxy: {
                    type: 'jsonp',
                    url: 'http://192.168.1.101:8888/schedule',
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                }
            }
        }
    }
});
