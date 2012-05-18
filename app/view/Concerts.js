Ext.define('ldg.view.Concerts', {
    extend: 'Ext.navigation.View',
    xtype: 'concertspanel',

    requires: [
        'ldg.view.ConcertList',
        'ldg.view.ConcertDetail',
    ],

    config: {
        iconCls: 'music1',
        title: 'Conciertos',
        items: [{
            xtype: 'concertlist',
        }],
    },
});
