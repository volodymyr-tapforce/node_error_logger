import axios from 'axios';
import EventEmitter from '../utils/eventEmitter';

const serverApiCallService = {

    // Event Subscire 
    subUsersListUpdate:(pubCallback)=>{
        return EventEmitter.subscribe('newuser', pubCallback);
    },

    subsErroListUpdate:(pubCallback)=>{
        return EventEmitter.subscribe('newerror', pubCallback);
    },

    eventUnsub:(subid)=>{
        EventEmitter.unsubscribe(subid);
    },
    // FETCH GET API
    fetchUserList:async (searchParams,responceCallback)=> {
        const responce = await axios.get('/api/users',{
            params:searchParams
        });
        responceCallback(responce.data);
    },

    fetchErrorList:async(anonymous_id, responceCallback)=>{
        const responce = await axios.get('/api/errors/'+anonymous_id);
        responceCallback(responce.data);
    },
    // POST API
    createErrorDoc:async (reqBody, responceCallback)=>{

        const responce = await axios.post('/api/errors', reqBody);
        responceCallback(responce);

        if(responce.data.isNewUser){
            EventEmitter.publish('newuser');
        }

        EventEmitter.publish('newerror',responce.data.anonymous_id);

    }

}

export default serverApiCallService;