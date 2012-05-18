Ext.define('ldg.view.ConcertDetail', {
    extend: 'Ext.Panel',
    xtype: 'concertdetail',
    config: {
        styleHtmlContent: true,
        scrollable: true,
        tpl: [
            '<strong>{fulldate}</strong><br/>',
            '<p>{desc_es}</p>',
            //'<img src="http://www.luzdegas.com/img_perf/{filename}">',
            '{image}'
        ].join('')
    }
});
