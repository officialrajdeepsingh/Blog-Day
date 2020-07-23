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
}

const sitemapOptions = {
    root: __dirname + '/static/sitemap/',
    headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
    }
};


	app.prepare()
	.then( () => {
		const server = express();
		
		server.use(cors(corsOptions))
		server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));

		server.get( '/', ( req, res ) => {
			app.render( req, res, '/Index' );
		} );
		server.get( '/Blog/read/:slug', ( req, res ) => {
			const postId =  req.params.slug.split( '-' ).pop() 
			const queryParams = { id: postId };
		    app.render( req, res, '/Blog/read', queryParams );
		} );

		server.get( '/Comment/comment/:slug', ( req, res ) => {
			const postId =  req.params.slug.split( '-' ).pop()
			const queryParams = { id: postId };
			app.render( req, res, '/Comment/comment', queryParams );
		} );
		server.get( '/Page/page/:slug', ( req, res ) => {
			const postId = req.params.slug.split( '-' ).pop() 
			const queryParams = { id: postId };
		
			app.render( req, res, '/Page/page', queryParams );
		} );
		
		server.post( '/signup', ( req, res ) => {
		
			return handle( req , es,'/signup' );
		} );
		server.post( '/login', ( req, res ) => {
		
			return handle( req ,res, '/login' );
		} );
		server.post( '/forgetpassward', ( req, res ) => {
		
			return handle( req ,res, '/forgetpassward' );
		} );

		server.get( '*', ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			
			console.warn( `Ready on http://localhost:${port}` );
		
		} );
	} );


