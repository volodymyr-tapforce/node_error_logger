import axios from 'axios';
import EventEmitter from '../utils/eventEmitter';

const serverApiCallService = {


    subscribeUsersListUpdate:(pubCallback)=>{
        return EventEmitter.subscribe('newuser', pubCallback);
    },

    unsubscribeUsersListUpdate:(subid)=>{
        EventEmitter.unsubscribe(subid);
    },

    fetchUserList:async (responceCallback)=> {

        const responce = await axios.get('/api/users');
        responceCallback(responce.data);

    },

    createErrorDoc:async (reqBody, responceCallback)=>{

        const responce = await axios.post('/api/errors', reqBody);
        responceCallback(responce);

        // console.log(responce.data);
        if(responce.data.isNewUser){
            EventEmitter.publish('newuser');
        }

    }

}

export default serverApiCallService;