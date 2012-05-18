Ext.define("ldg.view.Main", {
    extend: 'Ext.tab.Panel',
    fullscreen: true,
    requires: ['Ext.TitleBar'],
    xtype: 'mainpanel',
    
    config: {
        tabBarPosition: 'bottom',
        title: 'Main',
        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'concertspanel'
            },
            {
                xtype: 'map'
            },
            {
                xtype: 'gallerypanel'
            }
        ]
    }
});
