const Generator = require("yeoman-generator");
module.exports = class extends Generator {
   initializing() {
      this.log("Creating RC Admin...");
   }
   async prompting() {

      const {api_type} = await this.prompt([{
         name : "api_type",
         message : "What API dataProvider would you like to use? (REST or GraphQL or SunbirdRC)"
      }]);
      this.api_type = api_type;
      if(api_type=='SunbirdRC'){
         const {schema_location} = await this.prompt([{
            name : "Schema_Location",
            message : "Pass the Location of the Schema here : "
         }]);
         this.schema_location = schema_location;
         const {api_url} = await this.prompt([{
            name : "API_URL",
            message : "Pass the API Url here : "
         }])
         this.api_url = api_url;
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
      this.log(this.registry);
      this.fs.copyTpl([
         this.templatePath('**')
         // `!**/src/components/**`,
         ],
         this.destinationRoot(), 
         { 
            registry : this.registry,
            api_type : this.api_type,
            schema_location : this.schema_location,
            api_url : this.api_url,
         }
      )
   }
}