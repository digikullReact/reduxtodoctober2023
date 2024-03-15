import React,{useState} from 'react'
import { Input,Button } from 'antd';
import { Col, Row } from 'antd';
import { addtodo,changeInputState } from '../slices/todoslice';
import { useDispatch } from 'react-redux';


const Todo = () => {
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
      </Col>
     
    </Row>
     


    </div>
  )
}

export default Todo