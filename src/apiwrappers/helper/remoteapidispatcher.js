import * as constants from '.../GlobalInfo/constants'
export default class RemoteApiDispatcher {
  Action = ""

  constructor(action)
  {
    this.Action = action;
  }

  DispatcRemoteAction()
  {
    var RequestHeader = new Request(constants.CONSULTA_LOCAL_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(Action)
    });

    return fetch(RequestHeader).then((response) => {
        if (respone.ok) {
            return response;
        }
    }).then((response) =>{
        return response.json();
    }).then((data) =>{
        var collection = JSON.parse(data);
        return collection;
    })

  }
}