import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.post('/create-post','Timeline/TimelineController.createPost')
    Route.get('/get-feeds','Timeline/TimelineController.getFeeds')
}).prefix('timeline/');