Ext.define('ldg.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Luz de Gas',
        iconCls: 'home',
        scrollable: true,
        styleHtmlContent: true,
        html: [
            '<h1>Bienvenidos a Luz de Gas</h1>',
            '<img src="/resources/images/ldg.png" />',
            "<p>Abierto todos los d&iacute;as del a&ntilde;o de 21h a 6h.</p>",
            "<p>Muntaner 246, Barcelona</p>"
        ].join("")
    }
});
