Ext.define('ldg.view.ConcertList', {
    extend: 'Ext.List',
    xtype: 'concertlist',
    requires: ['ldg.store.Concerts'],

    config: {
        title: 'Concerts',
        itemTpl: '{title}<br/><time>{showDate}</time>',
        store: 'Concerts',
        onItemDisclosure: true,
    },
    // initialize: function(options) {
    //     console.log('initialized!!');
    //     console.dir(this);
    //     console.dir(options);
    // }
});
