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
        this.getConcertslist().push({
            xtype: 'panel',
            title: record.get('title'),
            html: record.get('desc_es'),
            scrollable: true,
            styleHtmlContent: true
        })
    }
});
