import {schema ,rules } from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class TimelineValidator{
    public async createPostValidator(ctx){
        const postSchema = schema.create({
            text: schema.string.optional({trim:true}),
            images: schema.array.optional().members(schema.file()),
        });
        const erroMessages = {
            'text.required': 'Text is required and must be String',
            'images.required': 'Photo is required and ....',
        }
        // console.log('Validation called')
        try {
            const payload = await ctx.request.validate({schema:postSchema});
            // console.log(payload);
            // console.log('Validation Called @ ')
            return payload;
        } catch (error) {
            console.log(error);
            return ctx.response.status(422).send(error.messages);
        }

        // try{
        //     const payload = await ctx.request.validate({schema:postSchema,messages:erroMessages})
        //     console.log(payload);
        //     return payload;
        // }catch (error){
        //     return ctx.response.status(422).send(error.messages)
        // }
    }    
}


