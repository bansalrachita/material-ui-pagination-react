/**
 * Created by rachitabansal on 7/7/17.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUiSelectField = require("material-ui/SelectField");

var _materialUiSelectField2 = _interopRequireDefault(_materialUiSelectField);

var _materialUiMenuItem = require("material-ui/MenuItem");

var _materialUiMenuItem2 = _interopRequireDefault(_materialUiMenuItem);

var _materialUiSvgIconsNavigationChevronLeft = require("material-ui/svg-icons/navigation/chevron-left");

var _materialUiSvgIconsNavigationChevronLeft2 = _interopRequireDefault(_materialUiSvgIconsNavigationChevronLeft);

var _materialUiSvgIconsNavigationChevronRight = require("material-ui/svg-icons/navigation/chevron-right");

var _materialUiSvgIconsNavigationChevronRight2 = _interopRequireDefault(_materialUiSvgIconsNavigationChevronRight);

var _materialUiSvgIconsNavigationFirstPage = require("material-ui/svg-icons/navigation/first-page");

var _materialUiSvgIconsNavigationFirstPage2 = _interopRequireDefault(_materialUiSvgIconsNavigationFirstPage);

var _materialUiSvgIconsNavigationLastPage = require("material-ui/svg-icons/navigation/last-page");

var _materialUiSvgIconsNavigationLastPage2 = _interopRequireDefault(_materialUiSvgIconsNavigationLastPage);

var _materialUiIconButton = require("material-ui/IconButton");

var _materialUiIconButton2 = _interopRequireDefault(_materialUiIconButton);

/**
 * Displays component for Pagination.
 * */
var React = require('react');

var Pagination = (function (_React$Component) {
	_inherits(Pagination, _React$Component);

	/**
  * The constructor. Set initial values.
  * @param {object} props properties.
  * */

	function Pagination(props) {
		_classCallCheck(this, Pagination);

		_get(Object.getPrototypeOf(Pagination.prototype), "constructor", this).call(this, props);
		var _props = this.props;
		var activePage = _props.activePage;
		var rows = _props.rows;
		var selectedRowSize = _props.selectedRowSize;

		this.state = {
			pageEnd: Math.floor(rows / selectedRowSize),
			selectedPage: activePage
		};
	}

	/**
  * @type {object} default properties of component.
  * */

	/**
  * @param {object} nextProps the next properties if component gets new
  * props.
  * */

	_createClass(Pagination, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			var _props2 = this.props;
			var selectedRowSize = _props2.selectedRowSize;
			var rows = _props2.rows;
			var selectedPage = this.state.selectedPage;

			if (nextProps.selectedRowSize !== selectedRowSize || nextProps.rows !== rows) {

				this.setState({
					pageEnd: Math.floor(nextProps.rows / nextProps.selectedRowSize),

					selectedPage: Math.floor(nextProps.rows / nextProps.selectedRowSize) < selectedPage ? 0 : selectedPage
				});
			}
		}
	}, {
		key: "menuItems",

		/**
   * @param {number} rowSize array for rows per page.
   * @return {Function} react element.
   * */
		value: function menuItems(rowSize) {

			return rowSize.map(function (size, index) {
				return React.createElement(_materialUiMenuItem2["default"], {
					primaryText: size, value: size, key: index });
			});
		}
	}, {
		key: "handleRowSizeChange",

		/**
   * @param {object} event event of the select field.
   * @param {number} index index of the row size array.
   * @param {number} selectedRowSize selected rows per page.
   * */
		value: function handleRowSizeChange(event, index, selectedRowSize) {
			var handleRowSizeChange = this.props.handleRowSizeChange;

			handleRowSizeChange(event, index, selectedRowSize);
		}
	}, {
		key: "handleOnSelectPrevious",

		/**
   * @param {object} event event fired by previous select button.
   * */
		value: function handleOnSelectPrevious(event) {
			var handleOnSelectPrevious = this.props.handleOnSelectPrevious;
			var selectedPage = this.state.selectedPage;

			this.setState({ selectedPage: selectedPage - 1 });
			if (handleOnSelectPrevious) {
				handleOnSelectPrevious(event, selectedPage - 1);
			}
		}
	}, {
		key: "handleOnSelectNext",

		/**
   * @param {object} event event fired by next select button.
   * */
		value: function handleOnSelectNext(event) {
			var handleOnSelectNext = this.props.handleOnSelectNext;
			var selectedPage = this.state.selectedPage;

			this.setState({ selectedPage: selectedPage + 1 });

			if (handleOnSelectNext) {
				handleOnSelectNext(event, selectedPage + 1);
			}
		}
	}, {
		key: "handleOnSelectFirst",

		/**
   * @param {object} event event fired by select first page button.
   * */
		value: function handleOnSelectFirst(event) {
			var _props3 = this.props;
			var pageStart = _props3.pageStart;
			var handleOnSelectFirst = _props3.handleOnSelectFirst;

			this.setState({ selectedPage: pageStart });

			if (handleOnSelectFirst) {
				handleOnSelectFirst(event, pageStart);
			}
		}
	}, {
		key: "handleOnSelectLast",

		/**
   * event fired by last page select button.
   * */
		value: function handleOnSelectLast(event) {
			var handleOnSelectLast = this.props.handleOnSelectLast;
			var pageEnd = this.state.pageEnd;

			this.setState({ selectedPage: pageEnd });

			if (handleOnSelectLast) {
				handleOnSelectLast(event, pageEnd);
			}
		}
	}, {
		key: "render",

		/**
   * Change errorClose if prop changes
   * @return {JSX} react element.
   */
		value: function render() {
			var _props4 = this.props;
			var rowSize = _props4.rowSize;
			var rowSizeWidthStyle = _props4.rowSizeWidthStyle;
			var rows = _props4.rows;
			var selectedRowSize = _props4.selectedRowSize;
			var pageStart = _props4.pageStart;
			var position = _props4.position;
			var _state = this.state;
			var pageEnd = _state.pageEnd;
			var selectedPage = _state.selectedPage;

			var menuItems = this.menuItems(rowSize);
			var rowsSliced = selectedRowSize * (selectedPage + 1) >= rows ? rows : selectedRowSize * (selectedPage + 1);

			return React.createElement(
				"div",
				{ style: {
						float: position,
						marginBottom: "24px",
						marginRight: "-24px"
					} },
				React.createElement(
					_materialUiSelectField2["default"],
					{
						value: selectedRowSize,
						floatingLabelText: "Rows per page",
						style: {
							width: rowSizeWidthStyle,
							fontSize: "0.9em"
						},
						menuItemStyle: { fontSize: "0.8em" },
						autoWidth: false,
						maxHeight: 500,
						onChange: this.handleRowSizeChange },
					menuItems
				),
				React.createElement(
					"div",
					{ style: { display: "inline-block", verticalAlign: "bottom" } },
					React.createElement(
						_materialUiIconButton2["default"],
						{
							onTouchTap: this.handleOnSelectFirst,
							disabled: selectedPage <= pageStart },
						React.createElement(_materialUiSvgIconsNavigationFirstPage2["default"], null)
					),
					React.createElement(
						_materialUiIconButton2["default"],
						{
							onTouchTap: this.handleOnSelectPrevious,
							disabled: selectedPage <= pageStart },
						React.createElement(_materialUiSvgIconsNavigationChevronLeft2["default"], null)
					),
					React.createElement(
						"span",
						{ style: {
								display: "inline-block",
								verticalAlign: "middle",
								paddingBottom: "16px"
							} },
						rowsSliced,
						" of ",
						rows
					),
					React.createElement(
						_materialUiIconButton2["default"],
						{
							onTouchTap: this.handleOnSelectNext,
							disabled: selectedPage >= pageEnd - 1 },
						React.createElement(_materialUiSvgIconsNavigationChevronRight2["default"], null)
					),
					React.createElement(
						_materialUiIconButton2["default"],
						{
							onTouchTap: this.handleOnSelectLast,
							disabled: selectedPage >= pageEnd - 1 },
						React.createElement(_materialUiSvgIconsNavigationLastPage2["default"], null)
					)
				)
			);
		}
	}]);

	return Pagination;
})(React.Component);

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
	rowSize: _propTypes2["default"].array,
	selectedRowSize: _propTypes2["default"].number,
	pageStart: _propTypes2["default"].number,
	rows: _propTypes2["default"].number,
	rowSizeStyle: _propTypes2["default"].object,
	handleRowSizeChange: _propTypes2["default"].func,
	activePage: _propTypes2["default"].number,
	handleOnSelectPrevious: _propTypes2["default"].func,
	handleOnSelectNext: _propTypes2["default"].func,
	handleOnSelectFirst: _propTypes2["default"].func,
	handleOnSelectLast: _propTypes2["default"].func
};

exports["default"] = Pagination;
module.exports = exports["default"];