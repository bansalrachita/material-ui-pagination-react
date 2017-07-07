/**
 * Created by rachitabansal on 7/7/17.
 */

var React = require('react');
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import ChevronLeftIcon from "material-ui/svg-icons/navigation/chevron-left";
import ChevronRightIcon from "material-ui/svg-icons/navigation/chevron-right";
import FirstPageIcon from "material-ui/svg-icons/navigation/first-page";
import LastPageIcon from "material-ui/svg-icons/navigation/last-page";
import IconButton from "material-ui/IconButton";

/**
 * Displays component for Pagination.
 * */
class Pagination extends React.Component {

	/**
	 * The constructor. Set initial values.
	 * @param {object} props properties.
	 * */
	constructor(props) {
		super(props);
		const {activePage, rows, selectedRowSize} = this.props;

		this.state = {
			pageEnd: Math.floor(rows / selectedRowSize),
			selectedPage: activePage
		};
	}

	/**
	 * @param {object} nextProps the next properties if component gets new
	 * props.
	 * */
	componentWillReceiveProps(nextProps) {
		const {selectedRowSize, rows} = this.props;
		const {selectedPage} = this.state;

		if (nextProps.selectedRowSize !== selectedRowSize ||
			nextProps.rows !== rows) {

			this.setState({
				pageEnd: Math.floor(nextProps.rows /
					nextProps.selectedRowSize),

				selectedPage: Math.floor(nextProps.rows /
					nextProps.selectedRowSize) < selectedPage ? 0 :
					selectedPage
			});

		}
	};

	/**
	 * @param {number} rowSize array for rows per page.
	 * @return {Function} react element.
	 * */
	menuItems(rowSize) {

		return rowSize.map((size, index) => <MenuItem
			primaryText={size} value={size} key={index}/>);

	};

	/**
	 * @param {object} event event of the select field.
	 * @param {number} index index of the row size array.
	 * @param {number} selectedRowSize selected rows per page.
	 * */
	handleRowSizeChange(event, index, selectedRowSize) {
		const {handleRowSizeChange} = this.props;

		handleRowSizeChange(event, index, selectedRowSize);
	};

	/**
	 * @param {object} event event fired by previous select button.
	 * */
	handleOnSelectPrevious(event) {
		const {handleOnSelectPrevious} = this.props;
		const {selectedPage} = this.state;

		this.setState({selectedPage: selectedPage - 1});
		if (handleOnSelectPrevious) {
			handleOnSelectPrevious(event, selectedPage - 1);
		}
	};

	/**
	 * @param {object} event event fired by next select button.
	 * */
	handleOnSelectNext(event) {
		const {handleOnSelectNext} = this.props;
		const {selectedPage} = this.state;

		this.setState({selectedPage: selectedPage + 1});

		if (handleOnSelectNext) {
			handleOnSelectNext(event, selectedPage + 1);
		}

	};

	/**
	 * @param {object} event event fired by select first page button.
	 * */
	handleOnSelectFirst(event) {
		const {pageStart, handleOnSelectFirst} = this.props;

		this.setState({selectedPage: pageStart});

		if (handleOnSelectFirst) {
			handleOnSelectFirst(event, pageStart);
		}

	};

	/**
	 * event fired by last page select button.
	 * */
	handleOnSelectLast(event) {
		const {handleOnSelectLast} = this.props;
		const {pageEnd} = this.state;

		this.setState({selectedPage: pageEnd});

		if (handleOnSelectLast) {
			handleOnSelectLast(event, pageEnd);
		}
	};

	/**
	 * Change errorClose if prop changes
	 * @return {JSX} react element.
	 */
	render() {
		const {
			rowSize,
			rowSizeWidthStyle,
			rows,
			selectedRowSize,
			pageStart,
			position
		} = this.props;

		const {pageEnd, selectedPage} = this.state;
		const menuItems = this.menuItems(rowSize);
		const rowsSliced = (selectedRowSize * (selectedPage + 1)) >=
		rows ? rows : (selectedRowSize * (selectedPage + 1));

		return (<div style={{
			float: position,
			marginBottom: "24px",
			marginRight: "-24px"
		}}>
			<SelectField
				value={selectedRowSize}
				floatingLabelText="Rows per page"
				style={{
					width: rowSizeWidthStyle,
					fontSize: "0.9em"
				}}
				menuItemStyle={{fontSize: "0.8em"}}
				autoWidth={false}
				maxHeight={500}
				onChange={this.handleRowSizeChange}>
				{menuItems}
			</SelectField>
			<div style={{display: "inline-block", verticalAlign: "bottom"}}>
				<IconButton
					onTouchTap={this.handleOnSelectFirst}
					disabled={selectedPage <= (pageStart)}>
					<FirstPageIcon/>
				</IconButton>

				<IconButton
					onTouchTap={this.handleOnSelectPrevious}
					disabled={selectedPage <= (pageStart)}>
					<ChevronLeftIcon/>
				</IconButton>

				<span style={{
					display: "inline-block",
					verticalAlign: "middle",
					paddingBottom: "16px"
				}}>{rowsSliced} of {rows}</span>

				<IconButton
					onTouchTap={this.handleOnSelectNext}
					disabled={selectedPage >= (pageEnd - 1)}>
					<ChevronRightIcon/>
				</IconButton>

				<IconButton
					onTouchTap={this.handleOnSelectLast}
					disabled={selectedPage >= (pageEnd - 1)}>
					<LastPageIcon/>
				</IconButton>
			</div>
		</div>);
	}
}

/**
 * @type {object} default properties of component.
 * */
Pagination.defaultProps = {
	rowSize: [10, 30, 50, 100],
	activePage: 0,
	pageStart: 0,
	selectedRowSize: 10,
	rowSizeWidthStyle: "20%",
	rows: 1
};

/**
 * @type {object} component properties.
 * */
Pagination.propTypes = {
	rowSize: PropTypes.array,
	selectedRowSize: PropTypes.number,
	pageStart: PropTypes.number,
	rows: PropTypes.number,
	rowSizeStyle: PropTypes.object,
	handleRowSizeChange: PropTypes.func,
	activePage: PropTypes.number,
	handleOnSelectPrevious: PropTypes.func,
	handleOnSelectNext: PropTypes.func,
	handleOnSelectFirst: PropTypes.func,
	handleOnSelectLast: PropTypes.func
};


export default Pagination;
