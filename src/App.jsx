import React from 'react';

import Test from './Test.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="item"></div>
                <Test />
            </div>
        )
    }
}