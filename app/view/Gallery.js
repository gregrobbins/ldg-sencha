Ext.define('ldg.view.Gallery', {
    extend: 'Ext.Panel',
    xtype: 'gallerypanel',

    config: {
        title: 'Fotos',
        iconCls: 'photos2',
        baseCls: 'home',
        scrollable: true,
        styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Fotos'
            },
            {
                xtype: 'container',
                html: [
                    "<script src='http://src.sencha.io/screen.js'></script>",
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/aluz9544.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1159.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1161.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1165.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1166.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1170.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1176.jpg" />',
                    '<img src="http://src.sencha.io/sw/http://www.luzdegas.com/img_big/luz1178.jpg" />',
                ].join("")
            },
        ]
    }
});
