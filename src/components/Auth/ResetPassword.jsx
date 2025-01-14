import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Container, Heading, VStack, Input, Button} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { resetPassword } from '../../Redux/actions/profile';

const ResetPassword = () => {

    const [password, setPassword] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const {loading, message, error} = useSelector(state=>state.profile)

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password))
    };

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'});
        }
        if(message){
            toast.success(message);
            dispatch({type: 'clearMessage'});
            navigate("/login")
        }
    }, [dispatch, error, message]);

    return <Container py={'16'} h="90vh">
        <form onSubmit={submitHandler}>
            <Heading 
                children="Reset password" 
                my="16" 
                textTransform={"uppercase"} 
                textAlign={["center", "left"]}
            />

            <VStack spacing={"8"}>
                <Input 
                    required 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='New password'
                    type={"password"}
                    focusBorderColor="yellow.500"
                />

                <Button isLoading={loading} type="submit" width={"full"} colorScheme="yellow">
                    Reset Password
                </Button>
            </VStack>
        </form>
    </Container>
}

export default ResetPassword;

