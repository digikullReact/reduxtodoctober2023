import React,{useState} from 'react'
import { Input,Button } from 'antd';
import { Col, Row } from 'antd';
import { addtodo,changeInputState,deletetodo } from '../slices/todoslice';
import { useDispatch,useSelector } from 'react-redux';
import { Divider, List, Typography } from 'antd';
import { uid } from 'uid';


const Todo = () => {
    const todoState=useSelector(state=>state.todoReducer)
    const dispatch=useDispatch();
    const [state,setState]=useState();

    const handleClick=()=>{
        // here we will call the action ffrom slice
        dispatch(addtodo({data:state,id:uid()}))
    }

    const handleDelete=(id)=>{
        dispatch(deletetodo(id));

    }

    const handleChange=(event)=>{
        //dispatch(changeInputState(event.target.value));
        setState(event.target.value)

    }
  return (
    <div style={{marginTop:"200px"}}>
        <Row>
     
      <Col span={8} offset={8}>

      <Input placeholder="Todo" onChange={handleChange} />
      <Button type="primary" style={{marginTop:"20px"}} onClick={handleClick}>Add Todo</Button>



      <Divider orientation="left">Default Size</Divider>
    <List
  
      bordered
      dataSource={todoState.list}
      renderItem={(item) => (
        <List.Item>
       {item.data}
       <Button type="primary"  onClick={()=>handleDelete(item.id)}>Delete</Button>

        </List.Item>
      )}
    />


      </Col>



     
    </Row>
     


    </div>
  )
}

export default Todo