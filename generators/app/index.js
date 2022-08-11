const Generator = require("yeoman-generator");
module.exports = class extends Generator {

   initializing() {
      this.log("Creating RC Admin...");
   }
   async prompting() {

      const { api_type } = await this.prompt([{
         type: "list",
         name: "api_type",
         message: "What API dataProvider would you like to use? (REST or GraphQL or SunbirdRC)",
         choices: ["REST", "GraphQL", "SunbirdRC"]
      }]);
      this.api_type = api_type;
      if (api_type == 'SunbirdRC') {
         this.log("Building Sunbird RC's Registry");
      }

      const { registry } = await this.prompt([{
         name: 'registry',
         message: 'Title Your Registry : '
      }]);
      this.registry = registry;
   }

   writing() {
      if (this.api_type != "SunbirdRC") {
         this.log(this.registry);
         if (this.api_type == "REST") {
            this.fs.copyTpl([
               this.templatePath('general-admin/**')
               // `!**/src/components/**`,
            ],
               this.destinationRoot(),
               {
                  registry: this.registry,
                  api_type: this.api_type,
                  server_type: "json-server --watch data.json --port 5000"
               }
            )
         }else if(this.api_type == "GraphQL"){
            this.fs.copyTpl([
               this.templatePath('general-admin/**')
               // `!**/src/components/**`,
            ],
               this.destinationRoot(),
               {
                  registry: this.registry,
                  api_type: this.api_type,
                  server_type: "json-graphql-server data.json --p 8000"
               }
            )
         }
      } else {
         this.log(this.registry);
         this.fs.copyTpl([
            this.templatePath('sunbird-rc-admin/**')
            // `!**/src/components/**`,
         ],
            this.destinationRoot(),
            {
               registry: this.registry,
               api_type: this.api_type
            }
         )
      }
   }
}