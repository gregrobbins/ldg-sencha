Ext.define('ldg.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            concerts: 'concertspanel',
        },
        control: {
            'concertlist': {
                disclose: 'showDetail',
            }
        }
    },

    showDetail: function(list, record) {
        this.getConcerts().push({
            xtype: 'concertdetail',
            title: record.data.title,
            data: record.data
        });
    }
});
