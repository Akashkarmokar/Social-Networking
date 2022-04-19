import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TimelineService from './TimelineService';
import TimelineValidator from './TimelineValidator';
import TimelineQuery from './TimelineQuery';

export default class TimelineController{
    private timelineService = TimelineService
    private timelineValidator = TimelineValidator
    private timeLineQuery = TimelineQuery

    constructor(){
        this.timelineService = new TimelineService();
        this.timelineValidator = new TimelineValidator();
        this.timeLineQuery = new TimelineQuery();
    }
    public async sentFriendRequest(ctx : HttpContextContract){
        
    }
    public async createPost(ctx:HttpContextContract){
        await this.timelineValidator.createPostValidator(ctx);
        return await this.timelineService.createPost(ctx);
    }

    public async getFeeds(ctx:HttpContextContract){
        return this.timeLineQuery.getFeeds();
    }
}