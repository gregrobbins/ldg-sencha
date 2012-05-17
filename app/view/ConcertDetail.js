Ext.define('ldg.view.ConcertDetail', {
    extend: 'Ext.Panel',
    xtype: 'concertdetail',
    config: {
        styleHtmlContent: true,
        scrollable: true,
        title: '{title}',
        //tpl: 'Detail for {title}',
        tpl: [
            '<strong>{showDate} a las {showTime}h</strong><br/>',
            '<p>{desc_es}</p>',
            '<img src="http://www.luzdegas.com/img_perf/{filename}">',
        ].join('')
    }
});
