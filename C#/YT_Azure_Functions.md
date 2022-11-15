# Intro to Azure Functions - What they aare and how to create and deploy them
### IAmTimCorey, Dec 2019

## Intro
* easy to implement, almost always free

## Azure Function App Project
* VS -> Create a New Project -> Azure Function
* GitHubMonitorApp (demo), AzureFuctionDemo

* you wanna be on 'Azure Function v2 (.NET Core)' until the v3 comes out

* A "Function" ~> the thing that does ONE thing

* microservices
    * benefit : good to scale one functionality

* demo - http trigger (sth is run when an event is listened)
    * other triggers are there too depending on the use
    * storage emulator
    * but in prod we will make an account

```C#
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace GitHubMonitorApp
{
    public static class GitHubMonitor
    {
        [FunctionName("GitHubMonitor")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
            // route - azure_url/api/functionName
        {
            log.LogInformation("Our GitHub Monitor processed an action.");

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            return name != null
                ? (ActionResult)new OkObjectResult($"Hello, {name}")
                : new BadRequestObjectResult("Please pass a name on the query string or in the request body");
        }
    }
}

```