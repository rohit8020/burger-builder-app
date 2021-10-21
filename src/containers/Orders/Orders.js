import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    // state = {
    //     orders: [],
    //     loading: true
    // }

    componentDidMount() {
        this.props.onFetchOrders();
        // axios.get('/orders.json')
        //     .then(res => {
        //         console.log(res.data)
        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             });
        //         }
        //         console.log(fetchedOrders)
        //         this.setState({loading: false, orders: fetchedOrders});
        //     })
        //     .catch(err => {
        //         this.setState({loading: false});
        //     });
    }

    render () {
        return (
            <div>
                {this.props.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} 
                        name={order.orderData.name}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch( actions.fetchOrders() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withErrorHandler(Orders, axios));