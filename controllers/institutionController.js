const Institutions = require('../models/institutions');

class InstitutionController {
    static async addInstitution(ctx) {
        try {
          const { institution_name, institution_type, institution_location } = ctx.request.body;
      
          const addNewInstitution = await Institutions.query().insert({
            institution_name,
            institution_type,
            institution_location,
          });
      
          ctx.status = 200;
          ctx.body = addNewInstitution;
        } catch (error) {
          console.error('Error adding institution', error);
          ctx.status = 500;
          ctx.body = { error: 'Internal server error' };
        }
      }
      
      
  static async getInstitution(ctx) {
    try {
      const institutions = await Institutions.query();
      ctx.status = 200;
      ctx.body = institutions;
    } catch (error) {
      console.error('Error fetching institutions', error);
      ctx.status = 500;
      ctx.body = { error: 'Internal server error' };
    }
  }

  static async updateInstitute(ctx) {
    try {
      const institutionId = ctx.params.id;
      const updateData = ctx.request.body;

      const updateInstitution = await Institutions.query().patchAndFetchById(institutionId, updateData);
      ctx.body = updateInstitution;
    } catch (error) {
      console.error('Internal server error', error);
      ctx.status = 500;
      ctx.body = { error: 'Internal server error' };
    }
  }
}

module.exports = InstitutionController;
