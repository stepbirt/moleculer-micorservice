"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "number",

	/**
	 * Actions
	 */
	actions:{
		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		index : {
			rest: {
				method: "GET",
				path: "/index"
			},
			async handler() {
				return "Hi this is number service";
			}
		},
		increase : {
			rest:{
				method: "GET",
				path: "/increase"
			},
			params: {
				a: "string",
				b: "string"
			},
			async handler(ctx){
				return this.increaseNumber(ctx.params.a,ctx.params.b);
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {
		increaseNumber(numberA, numberB){
			numberA = parseInt(numberA);
			numberB = parseInt(numberB);
			return new Promise((resolve, reject) => {
				resolve(numberA+numberB);
			});
		}
	},
};