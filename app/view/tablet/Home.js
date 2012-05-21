Ext.define('ldg.view.tablet.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Luz de Gas',
        iconCls: 'home',
        baseCls: 'home',
        scrollable: true,
        styleHtmlContent: true,
        listeners: {
            painted: function() {
                window.fbAsyncInit = function() {
                    FB.init({appId: '273989562666616', status: true, cookie: true, xfbml: true, oauth: true});
                };
                (function() {
                    var e = document.createElement('script');
                    e.type = 'text/javascript';
                    e.src = document.location.protocol + '//connect.facebook.net/es_ES/all.js';
                    e.async = true;
                    document.getElementById('fb-root').appendChild(e);
                }());
            }
        },
        items: [
            {
                xtype: 'container',
                html: [
                    // '<h1>Luz de Gas</h1>',
                    '<img class="logo" src="./resources/images/ldg300w.png" />',
                    '<p>',
                    "TABLET: Abierto todos los d&iacute;as del a&ntilde;o de 21h a 6h.",
                    '<br />',
                    "Muntaner 246, Barcelona",
                    '</p>',
                    //'<div class="fb-like" data-href="http://www.facebook.com/luzdegasclub" data-layout="button_count" data-width="190" data-show-faces="false" data-colorscheme="dark"></div>',
                    '<div class="fb-like" data-href="http://www.facebook.com/luzdegasclub" data-send="false" data-width="190" data-show-faces="true" data-colorscheme="dark"></div>',
                    //'<div class="fb-like" data-href="http://www.facebook.com/luzdegasclub" data-send="false" data-layout="box_count" data-width="190" data-show-faces="false" data-colorscheme="dark"></div>',
                    '<div id="fb-root"></div>'
                ].join("")
            },
        ]
    }
});
