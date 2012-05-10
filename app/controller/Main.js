Ext.define('ldg.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            concertslist: 'concertslist'
        },
        control: {
            'concertslist list': {
                itemtap: 'showConcert'
            }
        }
    },
    showConcert: function(list, index, element, record){
        var image = null == record.get('filename') ? '' : '<img src="http://www.luzdegas.com/img_perf/' + record.get('filename') +'">';
        this.getConcertslist().push({
            xtype: 'panel',
            title: record.get('title'),
            html: [
                "<p>" + record.get('showDate') + " a las " + record.get('showTime') + "h</p>",
                "<p>" + record.get('desc_es') + "</p>",
                image
            ].join(""),
            scrollable: true,
            styleHtmlContent: true
        })
    }
});
