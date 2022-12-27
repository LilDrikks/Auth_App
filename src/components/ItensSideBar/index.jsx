import * as C from './styles'
import Icon from 'react-icons-kit';


function ItemSideBar(props) {

  const id = props.id
  const changeView = (id) => {
    props.setView(id)
  }

  return (
    <C.Item onClick={()=>changeView(id)}>
    <Icon icon={props.icon} size={40} style={{color:'#ffffff'}} />
    <span>{props.text}</span>
    </C.Item>
  )
}

export default ItemSideBar