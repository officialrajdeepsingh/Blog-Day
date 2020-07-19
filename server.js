const express = require( 'express' );
const next = require( 'next' );

const port = 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const handle = app.getRequestHandler();
var cors = require('cors')
var corsOptions = {
	origin: 'https://www.rajdeepsingh.dev/graphql',
	optionsSuccessStatus: 200 
	// some legacy browsers (IE11, various SmartTVs) choke on 204
}

	app.prepare()
	.then( () => {
		const server = express();
		
		server.use(cors(corsOptions))
		
		server.get( '/read/:slug', ( req, res ) => {
			const postId =  req.params.slug.split( '-' ).pop() 
			const queryParams = { id: postId };
			console.log(queryParams, ' queryParams form server side  ')
			app.render( req, res, '/read', queryParams );
		} );

		server.get( '/comment/comment/:slug', ( req, res ) => {
			const postId =  req.params.slug.split( '-' ).pop()
			const queryParams = { id: postId };
			app.render( req, res, '/comment', queryParams );
		} );
		server.get( '/page/page/:slug', ( req, res ) => {
			console.log(req.params , ' for server here  ')
			const postId = req.params.slug.split( '-' ).pop() 
			const queryParams = { id: postId };
			console.log(queryParams , ' queryParams server here side  ')

			app.render( req, res, '/page', queryParams );
		} );
		
		// server.post( '/signup',cors(corsOptions), ( req, res ) => {
		// 	const update= res.json()
		// 	return handle( req, update, '/signup' );
		// } );

		server.get( '*',cors(corsOptions), ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			console.warn( `Ready on http://localhost:${port}` );
		} );
	} );


