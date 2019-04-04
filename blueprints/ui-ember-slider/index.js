module.exports = {
	description: 'Installs the underlying slider component using bower',

	normalizeEntityName: function() {
		// this prevents an error when the entityName is
		// not specified (since that doesn't actually matter
		// to us
	},

	afterInstall: function() {
		// add the npm package to the project
		return this.addPackageToProject('bootstrap-slider', '^9.7.2');
	}
};
