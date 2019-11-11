using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;


namespace tictoctoe.Hubs
{
    public class ChatHub : Hub
    {
        public void send(string id, string name)
        {
            Clients.All.useIndex(id, name);
        }
    }
}