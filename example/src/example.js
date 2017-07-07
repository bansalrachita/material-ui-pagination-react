var React = require('react');
var ReactDOM = require('react-dom');
var Pagination = require('material-ui-pagination-react');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedRowSize: 20
		}
	}

	onChange(event, index, selectedRowSize) {
		this.setState({selectedRowSize});
	};

	render() {
		const {selectedRowSize} = this.state;

		return (
			<MuiThemeProvider>
				<div className="App">
					<Pagination rows={10}
								rowSizeWidthStyle="10%"
								selectedRowSize={selectedRowSize}
								rowSize={[10, 20, 30]}
								handleRowSizeChange={this.onChange}/>
				</div>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
