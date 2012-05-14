Ext.define('ldg.view.ConcertDetail', {
    extend: 'Ext.Panel',
    xtype: 'concertdetail',
    config: {
        styleHtmlContent: true,
        scrollable: true,
        title: 'Details',
        tpl: 'Detail for {title}',
    }
});
