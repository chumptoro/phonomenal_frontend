import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';



// function MyApp({ Component, pageProps }) {
// this effectively makes all the pages in dir /pages like index.js and sell.js (which are represented below as <Component>) children of the Page component (created in in components/Page.js).  In the definition of the component Page, these children are referred to as {this.props.children}
// 	return (
// 		<Page>
// 			<Component {...pageProps} />
// 		</Page>
// 	);
// }
// export default MyApp;

// Component is NextJS's referral to the NextJS Pages. These pages are under the folder frontend/pages. Examples includes index.js. seee https://nextjs.org/docs/advanced-features/custom-app
//this effectively makes all the pages in dir /pages like index.js and sell.js (which are represented below as <Component>) children of the Page component (created in in components/Page.js).  In the definition of the component Page, these children are referred to as {this.props.children}
class MyApp extends App {

	//The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself
	// we are destructuring the Component (aka files in components dir like index.js) and ctx elements of an object passed to getInitialProps method of the app
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		//see if there are any initial props for the active Component, which we will render in render() below.  if yes, then ctx will allows us to access the database qury statement
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		//we will now pass any queries, meaning the graphql queries made by the Component in order to fetch the right data, as a prop to the Component.  as such Items.js
		//query is an element of the context object, which is an argument given to getInitialProps.  it contains what we wanna query fron the backend database.  we're gonna assign it to a new 'query' element of the object pageProps query
		//https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
		//https://nextjs.org/docs/advanced-features/custom-app#caveats

		pageProps.query = ctx.query;
		return { pageProps }; //this makes pageProps available in this.props.
	}
	render() {
		const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<Page>
						<Component {...pageProps} />
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

//wrapping myApp in withData will provide 'this.props.apollo' to MyApp
//withData is called a high-order component
export default withData(MyApp);