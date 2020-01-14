using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Leaveappreact.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        public DataController(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }
        [HttpGet("[action]")]
        public IEnumerable<DatafromJson> JsonData()
        {
            List<DatafromJson> Data;
            using (StreamReader sr = new StreamReader("./wwwroot/data/data.json"))
            {
                Data = JsonConvert.DeserializeObject<List<DatafromJson>>(sr.ReadToEnd());
                
            }
            return Data;
        }
         public class DatafromJson
        {
            public string Type { get; set; }
            public string Remaining { get; set; }
            public int Used { get; set; }
            public int Allowance { get; set; }
            public string Message { get; set; }

        }

    }
}