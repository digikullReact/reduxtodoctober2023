import React,{useState} from 'react'
import { Input,Button } from 'antd';
import { Col, Row } from 'antd';
import { addtodo,changeInputState } from '../slices/todoslice';
import { useDispatch,useSelector } from 'react-redux';
import { Divider, List, Typography } from 'antd';


const Todo = () => {
    const todoState=useSelector(state=>state.todoReducer)
    console.log(todoState)
    const dispatch=useDispatch();
    const [state,setState]=useState();

    const handleClick=()=>{
        // here we will call the action ffrom slice
        dispatch(addtodo(state))
    }

    const handleChange=(event)=>{
        //dispatch(changeInputState(event.target.value));
        setState(event.target.value)

    }
  return (
    <div style={{marginTop:"200px"}}>
        <Row>
     
      <Col span={8} offset={8}>

      <Input placeholder="Todo" onChange={handleChange} />;
      <Button type="primary" style={{marginTop:"20px"}} onClick={handleClick}>Add Todo</Button>



      <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={todoState.list}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />


      </Col>



     
    </Row>
     


    </div>
  )
}

export default Todo