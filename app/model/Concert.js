Ext.define('ldg.model.Concert', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'title', type: 'auto'},
            {name: 'date', type: 'auto'},
            {name: 'time', type: 'auto'},
            {name: 'desc', type: 'auto'}
        ]
    }
});