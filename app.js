Ext.application({

    name: 'ldg',

    controllers: ['Main'],
    views: ['Main','Home','Concerts','Map'],
    models: ['Concert'],
    stores: ['Concerts'],


    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel',
        });
    },
});
