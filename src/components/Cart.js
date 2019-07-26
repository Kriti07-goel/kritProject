import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class Cart extends Component{
    handleSubtractQuantity = (id) =>{
        this.props.subtractValue(id);
    }
    handleRemoveQuantity = (id) =>{
        this.props.removeValue(id);
    }
    handleAddtQuantity = (id) =>{
        this.props.addValue(id);
    }
    render(){
              
    let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p> 
                                <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><MaterialIcon icon="add_shopping_cart"></MaterialIcon></Link>
                                    <Link to="/cart"><MaterialIcon icon="shopping_cart" onClick={()=>{this.handleSubtractQuantity(item.id)}}></MaterialIcon></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove">Remove</button>
                            </div>
                            
                        </li>                        
                    )
                })
            ):
            (
            <p>Nothing.</p>
            )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps  = (dispatch)=>{
    return{
        removeValue: (id)=>{dispatch(removeValue(id))},
        addValue: (id)=>{dispatch(addValue(id))},
        subtractValue: (id)=>{dispatch(subtractValue(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)