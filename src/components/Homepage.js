import React , {Component} from 'react';
import './home.css';
import addToCart from './actions/cartActions';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
 
  
  class HomePage extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id);
    }
    render(){
      
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} className="prod-image"/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red">
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleClick(item.id)}}>Add</i></Link>
                            </span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
            );
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
       addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
const mapStateToProps  = (state)=>{
    return{
        items : state.items
    }
}  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

