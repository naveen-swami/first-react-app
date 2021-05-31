import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            
        }
    }

    render() {
        return (<div className="Home">
            <header>
                <h4>This is home page</h4>
            </header>

            <button onClick={this.props.goToPrice}>Go to Price</button>
            <button onClick={this.props.goToProduct}> Go to Product</button>
            <button onClick={this.props.goToClassComponent}>Go to class Component life cycle</button>
            <button onClick={this.props.goToReacHook}>Go to React Hook</button>
        </div>
        );
    }
}

export default Home;