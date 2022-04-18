import {schema ,rules } from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class TimelineValidator{
    public async createPostValidator(ctx){
        const postSchema = schema.create({
            userId: schema.number(),
            text: schema.string({trim:true}),
            photo: schema.array().members(schema.file()),
        });
        const erroMessages = {
            'userId.required': 'User Id is required and Must Be Number',
            'text.required': 'Text is required and must be String',
            'photo.required': 'Photo is required and ....',
        }
        
        try{
            const payload = await ctx.request.validate({schema:postSchema,messages:erroMessages})
            console.log(payload);
            return payload;
        }catch (error){
            return ctx.response.status(422).send(error.messages)
        }
    }    
}


