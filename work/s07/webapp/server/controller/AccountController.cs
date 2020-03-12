using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;
using server.model;
using server.services;

namespace server.controller {

    [ApiController]
    [Route("api/[controller]")]

    public class AccountController : ControllerBase {

        public AccountController(AccountService accountService) {
            AccountService = accountService;
        }

        public AccountService AccountService { get; }

        [HttpGet]
        public IEnumerable<Account> Get() {
            Console.WriteLine("Gets");
            return AccountService.GetAccounts();
        }

        [Route("{id:int}")]
        [HttpGet]
        public string GetAccount(int id){

            foreach(Account account in AccountService.GetAccounts()){
                if(account.Number == id){
                    Console.WriteLine("Result");
                    return JsonSerializer.Serialize(account);
                }
            }
            Console.WriteLine("No Result");
            return "This ID: " + id + " doesnt exist!!!";
        }
    }
}
