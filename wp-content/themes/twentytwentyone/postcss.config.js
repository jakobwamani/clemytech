module.exports = {
	plugins: [
		require('postcss-nested'),
		require('postcss-css-variables')({
			preserve: false,
			preserveAtRulesOrder: true
		}),
		require('postcss-calc')({
			precision: 0
<<<<<<< HEAD
		}),
		require('postcss-discard-duplicates')
=======
		})
>>>>>>> 9921f170221e7965d8f194a6389aa7d7e42d15f3
	]
};
