Ext.define('ldg.view.Gallery', {
    extend: 'Ext.Panel',
    xtype: 'gallerypanel',

    config: {
        title: 'Fotos',
        iconCls: 'photo',
        baseCls: 'home',
        scrollable: true,
        styleHtmlContent: true,
        items: [
            {
                xtype: 'container',
                html: [
                    '<img class="logo" src="./resources/images/ldg100w.png" />',
                    '<h1>Im&aacute;genes de Luz de Gas</h1>',
                ].join("")
            },
        ]
    }
});
