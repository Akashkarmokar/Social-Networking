import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import TimelineQuery from './TimelineQuery'
import Application from '@ioc:Adonis/Core/Application'

export default class TimelineService {
    private timeLineQuery : TimelineQuery

    constructor(){
        this.timeLineQuery = new TimelineQuery();
    }
    public async createPost(ctx:HttpContextContract){
        // const data = ctx.request.body();
        // // console.log(data);
        // return this.timeLineQuery.createPost(data)
        /**
         * Make Data to Create A Post 
         */
        //TODO: username will be come from auth.user
        const username = 'ak_kmk';
        const currentTime = new Date().getTime().toString();
        const images = ctx.request.files('images');
        const {text} = ctx.request.body();
        let count = 0;
        const data = {
            text:text,
            allImagePath: [],
        };
        
        for(let image of images){
            let imagePath = `${username}_${currentTime}_${count}.${image.extname}`;
            await image.move(Application.publicPath('Uploads'),{
                name: imagePath
            });
            count++;
            data.allImagePath.push(imagePath);
        }
        data['userId'] = 1; // TODO: userId will be come from auth.user
        // console.log(data);
        return this.timeLineQuery.createPost(data);

    }
}