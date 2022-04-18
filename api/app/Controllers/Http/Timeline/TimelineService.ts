import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import TimelineQuery from './TimelineQuery'

export default class TimelineService {
    private timeLineQuery : TimelineQuery

    constructor(){
        this.timeLineQuery = new TimelineQuery();
    }
    public async createPost(ctx:HttpContextContract){
        const data = ctx.request.body();
        // console.log(data);
        return this.timeLineQuery.createPost(data)
    }
}