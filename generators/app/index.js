const Generator = require("yeoman-generator");
module.exports = class extends Generator {
   initializing() {
      this.log("Creating RC Admin...");
   }
   async prompting() {

      const {api_type} = await this.prompt([{
         name : "api_type",
         message : "What API dataProvider would you like to use? (REST or GraphQL)"
      }]);
      this.api_type = api_type;

      const { registry } = await this.prompt([{
         name: 'registry',
         message: 'Which registry would you like to create?'
      }]);
      this.registry = registry;

      const {entities} = await this.prompt([{
         name : "entities",
         message : "Enter the entities : ( Separate with commas )"
      }]);
      this.entities = entities;

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
            entities : this.entities,
            api_type : this.api_type
         }
      )
   }
}