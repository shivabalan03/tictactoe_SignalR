using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Owin;
using Microsoft.Owin;

namespace tictoctoe
{
    public class Startup : Hub
    {
        //public void Hello()
        //{
        //    Clients.All.hello();
        //}

        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}