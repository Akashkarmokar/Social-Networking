import Feed from "App/Models/Feed";

export default class TimelineQuery{
        public async createPost(data){
            return await Feed.create(data);
        }

        public async getFeeds(){
            const data = await Feed.query().select('*').preload('user').orderBy('createdAt',"desc")
            // console.log(data);
            return data;
        }
}