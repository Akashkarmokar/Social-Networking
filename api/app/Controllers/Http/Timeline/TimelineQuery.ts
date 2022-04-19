import Feed from "App/Models/Feed";
import FeedImage from "App/Models/FeedImage";

export default class TimelineQuery{
        public async createPost(data){
            try {
                let feedInstance = await Feed.create({
                    userId:data.userId,
                    text:data.text,
                });
                const feedId = feedInstance.toJSON().id;
                // console.log(feedId);
                const feedImagesData = [];
                data.allImagePath.forEach(element => {
                    feedImagesData.push({
                        feedId: feedId,
                        feedImagePath: element,

                    })
                });
                // console.log(feedImagesData);
                await FeedImage.createMany(feedImagesData);

            } catch (error) {
                console.log(error);
            }
            // return await Feed.create(data);
        }

        public async getFeeds(){
            const data = await Feed.query().select('*').preload('user').preload('images').orderBy('createdAt',"desc")
            // console.log(data);
            return data;
        }
}