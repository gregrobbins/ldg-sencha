Ext.define('ldg.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['Home']
    },

    isActive: function() {
        return Ext.os.is.Tablet;
    }
});
