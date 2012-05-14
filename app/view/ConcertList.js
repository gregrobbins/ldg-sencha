Ext.define('ldg.view.ConcertList', {
    extend: 'Ext.List',
    xtype: 'concertlist',
    requires: ['ldg.store.Concerts'],

    config: {
        title: 'Concerts',
        itemTpl: '{title}: {showDate}',
        store: 'Concerts',
        onItemDisclosure: true,
    }


});
