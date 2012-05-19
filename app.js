Ext.application({

    name: 'ldg',
    profiles: ['Phone', 'Tablet'],
    controllers: ['Main'],
    views: ['Main','Home','Concerts','Map', 'Gallery'],
    models: ['Concert'],
    stores: ['Concerts'],


    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel',
        });
    },
});
