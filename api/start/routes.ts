/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

import 'App/Controllers/Http/Auth/auth'
import 'App/Controllers/Http/Timeline/timeline'
import Application from '@ioc:Adonis/Core/Application'

Route.get('/', ()=>{
  return{message:'You have landed in empty ocean!'}
})
/**
 * Temp Routes
 */
Route.post('/create',async({request,response})=>{
  const files = request.allFiles()
  console.log(files);


  
  return response.json({status:'OK'})
})