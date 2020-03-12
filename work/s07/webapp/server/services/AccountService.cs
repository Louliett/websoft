using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Hosting;
using server.model;

namespace server.services {

    public class AccountService {

        public AccountService(IWebHostEnvironment webHostEnvironment) {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string JsonFileName {
            get {
              return Path.Combine(WebHostEnvironment.ContentRootPath,  "data", "account.json");
            }
        }

        public IEnumerable<Account> GetAccounts() {
            using (var jsonFileReader = File.OpenText(JsonFileName)) {
                return JsonSerializer.Deserialize<Account[]>(jsonFileReader.ReadToEnd(), new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }
    }
}
