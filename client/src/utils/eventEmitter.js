
const EventEmitter = {

    subscribers:{},
    subscribersNum:0,

    subscribe: ( eventName, callback ) => {

        EventEmitter.subscribersNum ++;
    
        const subscribersList = EventEmitter.subscribers[ eventName ] || [];
        const subscribtionId = subscribersList.push({ id: EventEmitter.subscribersNum, fn: callback });
        EventEmitter.subscribers[ eventName ] = subscribersList;

        return subscribtionId;
    
    },

    unsubscribe:( subscribtionId )=> {

        for ( let eventName in EventEmitter.subscribers ) {
            const subscribersList = EventEmitter.subscribers[ eventName ];
            for ( let j = 0, jl = subscribersList.length; j < jl; j ++ ) {
                if ( subscribersList[ j ].id === subscribtionId ) {
                    subscribersList[ j ] = false;
                    return true;
                }
            }
        }
        return false;
    },

    publish:( eventName, params ) => {

        const subscribersList = EventEmitter.subscribers[ eventName ] || [];
        for ( let i = 0, il = subscribersList.length; i < il; i ++ ) {
            if ( subscribersList[ i ] ) {
                subscribersList[ i ].fn( params );
            }
        }
    }

}

export default EventEmitter;