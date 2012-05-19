Ext.define('ldg.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['Gallery']
    },

    isActive: function() {
        return Ext.os.is.Tablet;
    }
});
