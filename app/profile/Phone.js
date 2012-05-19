Ext.define('ldg.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: ['Gallery']
    },

    isActive: function() {
        return Ext.os.is.Phone;
    }
});
