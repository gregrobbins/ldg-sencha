Ext.define('ldg.model.Concert', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'showDate', type: 'string'},
            {name: 'showTime', type: 'string'},
            {name: 'desc_es', type: 'string'},
            {name: 'filename', type: 'string'}
        ],
    },
    getFullDate: function(){
        var d = this.data;
        dateStuff = [
            d.showDate,
            'a las',
            d.showTime,
            'h'
        ];
        return dateStuff.join(' ');
    }
});
