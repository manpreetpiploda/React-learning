
import './Item.css'

function Item(props){

    return (<p className='Item-name'>{props.name} 
    {props.children}</p>)
}

export default Item;