import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { courseRequest } from '../../Redux/actions/others';
import { toast } from 'react-hot-toast';

export const Request = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const dispatch = useDispatch();
    const {loading, error, message: stateMessage} = useSelector(state=>state.other);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(courseRequest(name, email, course));
    }

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'});
        }
        if(stateMessage){
            toast.success(stateMessage);
            dispatch({type: 'clearMessage'});
        }
    }, [dispatch,error,stateMessage]);

  return <Container h="92vh">
    <VStack h={'full'} justifyContent={"center"} spacing={"16"}>
        <Heading children="Request New Course"/>

        <form onSubmit={submitHandler} style={{width: '100%'}}>

            <Box marginY={'4'}>
                <FormLabel htmlFor='name' children="Name"/>
                <Input 
                    required 
                    id="name" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    placeholder='Enter your name'
                    type={"text"}
                    focusBorderColor="yellow.500"
                />
            </Box>

            <Box marginY={'4'}>
                <FormLabel htmlFor='email' children="Email"/>
                <Input 
                    required 
                    id="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Email'
                    type={"email"}
                    focusBorderColor="yellow.500"
                />
            </Box>

            <Box marginY={'4'}>
                <FormLabel htmlFor='course' children="Course"/>
                <Textarea 
                    required 
                    id="course" 
                    value={course} 
                    onChange={(e)=>setCourse(e.target.value)}
                    placeholder='Enter name of the course'
                    focusBorderColor="yellow.500"
                />
            </Box>

            <Button 
                isLoading={loading}
                my="4" 
                colorScheme={"yellow"} 
                type={'submit'}
                >Send Message
            </Button>

            <Box marginY="4">
                See available courses!!{' '}
                <Link to="/courses">
                    <Button colorScheme="yellow" variant="link">
                        Click
                    </Button> {' '}
                    here
                </Link>
            </Box>
        </form>
    </VStack>
  </Container>
}

export default Request;