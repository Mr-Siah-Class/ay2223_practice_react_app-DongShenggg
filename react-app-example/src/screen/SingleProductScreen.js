import React from 'react';

class SingleProductScreen extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div id='Main'>
                <h1>Product {this.props.productId}</h1>
            </div>
        );
    }
}

export default SingleProductScreen;