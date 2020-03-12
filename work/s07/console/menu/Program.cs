using System;
using Newtonsoft.Json;
using System.IO;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace menu {
    class Program {

        static void Main(string[] args) {

          String file;
          bool exit = false;
          int choice;

          while(!exit) {
            Console.WriteLine("Please select your option: ");
            Console.WriteLine("1. Load Accounts");
            Console.WriteLine("2. Load by ID");
            Console.WriteLine("3. Exit");


            choice = int.Parse(Console.ReadLine());

            switch(choice) {
              case 1:

                  file = "../data/account.json";
                  using (StreamReader r = new StreamReader(file)) {
                    string data = r.ReadToEnd();

                    var json = JsonConvert.DeserializeObject<List<Account>> (data);
                    Console.WriteLine("Number | Balance | Label    | Owner");
                    foreach (var account in json) {


                        Console.WriteLine("{0}      | {1}      | {2}   |  {3}", account.Number, account.Balance, account.Label, account.Owner);
                    }
                  }
                  Console.WriteLine("");
                  break;
              case 2:
                  Console.WriteLine("Please input an ID: ");
                  var id = 0;
                  id = int.Parse(Console.ReadLine());

                  file = "../data/account.json";
                  using (StreamReader r = new StreamReader(file)) {
                    string data = r.ReadToEnd();

                    var json = JsonConvert.DeserializeObject<List<Account>> (data);
                    Console.WriteLine("Number | Balance | Label    | Owner");
                    foreach (var account in json) {
                      if(account.Number == id) {
                      Console.WriteLine("{0}      | {1}      | {2}   |  {3}", account.Number, account.Balance, account.Label, account.Owner);

                      }
                    }
                  }
                  Console.WriteLine("");
                  break;
              case 3:
                  Console.WriteLine("Goodbye!");
                  exit = true;
                  break;
              default:
                  Console.WriteLine("Incorrect Input!");
                  break;
            }
          }

        }

      }




    class Account {
      public int Number {get; set;}
      public int Balance {get; set;}
      public String Label {get; set;}
      public int Owner {get; set;}


    }
}
