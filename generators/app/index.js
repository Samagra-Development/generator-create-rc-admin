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
         message: 'Which registry would you like to create?'
      }]);
      this.registry = registry;
   }
   // async prompting() {

   // }
   writing() {
      if (this.api_type != "SunbirdRC") {
         this.log(this.registry);
         this.fs.copyTpl([
            this.templatePath('general-admin/**')
            // `!**/src/components/**`,
         ],
            this.destinationRoot(),
            {
               registry: this.registry,
               api_type: this.api_type,
               schema_location: this.schema_location,
               api_url: this.api_url,
            }
         )
      } else { 
         this.log(this.registry);
         this.fs.copyTpl([
            this.templatePath('sunbird-rc-admin/**')
            // `!**/src/components/**`,
         ],
            this.destinationRoot(),
            {
               registry: this.registry,
               api_type: this.api_type,
               schema_location: this.schema_location,
               api_url: this.api_url,
            }
         )
      }
   }
}