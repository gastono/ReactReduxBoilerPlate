
import RemoteApiDispatcher from './helper/remoteapidispatcher';
import * as actions  from './helper/remoteactions';

function QuickMaeSearchApiWrapper(action,paremters)
{
    switch (action) {
        case "REMOTEFILTER":
            RemoteFilterByLetter(parameters[0], paremters[1]);
            break;
        case "SEARCH":
                Search(parameter[0],parameter[1]);
                break;
        default:
            break;
    }
}

function RemoteFilterByLetter(letter,SourceStateAddress)
{

    rd = new RemoteApiDispatcher(actions.OBTENER_SUGERENCIAS())
    var collection = rd.DispatcRemoteAction();
    

    //llamar a dispatch de redux
}

function Search(value, SourceStateAddress)
{
    rd = new RemoteApiDispatcher(action.OBTENER_SUBCLIENTES());
    var collection = rd.DispatcRemoteAction();
    
    //llamar a dispatch de redux
}

