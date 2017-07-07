# Pagination

This package creates a pagination component using React and material-ui
design library. It provides for ES5 and ES6 support. You can import the 
component using ES6 syntax or require the component using commonJS syntax.


## Demo & Examples

Live demo: [bansalrachita.github.io/material-ui-pagination-react]
(http://bansalrachita.github.io/material-ui-pagination-react/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use material-ui-pagination-react is to install it from NPM 
and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including 
`dist/material-ui-pagination-react.js` in your page. If you use this, make sure 
you have already included React, and it is available as a global variable.

```
npm install material-ui-pagination-react --save
```


## Usage

```js
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRowSize: 20
        }
    }

    onChange = (event, index, selectedRowSize) => {
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

```

OR

```
var Pagination = require('material-ui-pagination-react');

<Pagination>Example</Pagination>
```

### Properties

* rowSize : [Optional]

* selectedRowSize: [Optional] Numerical Value of the rowSize selection. By 
default it is 10. Recommended to be specified by the user if using rowSize 
property.

* pageStart: [Optional] A numerical value for starting page. Default is 0.

* rows: [Required] A numerical value of the number of rows to paginate.

* rowSizeStyle: [Optional] 

* handleRowSizeChange: [Optional] 

* activePage: [Optional] A numerical value of the number of currently active 
page.

* handleOnSelectPrevious: [Optional] 

* handleOnSelectNext:[Optional] 

* handleOnSelectFirst: [Optional]

* handleOnSelectLast: [Optional] 



## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) 2017 Rachita Bansal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


