Ext.define('ldg.view.Map', {
    extend: 'Ext.Map',
    xtype: 'map',

    config: {
        title: 'Mapa',
        iconCls: 'map',
        useCurrentLocation: false,
        mapOptions: {
            center: new google.maps.LatLng(41.394833,2.148579),
            MapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16,
        }
    }
});
