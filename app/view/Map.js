Ext.define('ldg.view.Map', {
    extend: 'Ext.Map',
    xtype: 'map',

    config: {
        title: 'Mapa',
        iconCls: 'locate',
        useCurrentLocation: false,
        mapOptions: {
            center: new google.maps.LatLng(41.394833,2.148579),
            MapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16,
        },
        listeners: [
            {
                fn: 'onMapRender',
                event: 'maprender'
            }
        ]
    },

    onMapRender: function (map, gmap, options) {
        //console.log('map rendered');
        new google.maps.Marker({
            position: new google.maps.LatLng(41.394833,2.148579),
            map: gmap
        });
    }
});
