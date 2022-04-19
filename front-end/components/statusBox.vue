<template>
    <div>
        <!-- Shimmer -->
        <template v-if="isHide">
            <div class="_statusBox_shimmer _mar_b20">
                <div class="_statusBox_shimmer_pic _shim_animate"></div>
                <div class="_statusBox_shimmer_details">
                    <div class="_statusBox_shimmer_input _shim_animate"></div>
                </div>
            </div>
        </template>
        <!-- Shimmer -->

        <template v-if="isloaded">
            <div :class="isStatusbox ? '_statusBox_open _statusBox _mar_b20' : '_statusBox _mar_b20'">
                <div class="_statusBox_top">
                    <div class="_statusBox_top_pic"><img src="/static/img/male.jpg" alt="" title="" class="_statusBox_top_img" /></div>
                    <div class="_statusBox_input" @click="isStatusbox = true"><input type="text" placeholder="Create a new post..." /></div>
                </div>
                <!-- <div class="_statusBox_bottom">
                    <ul class="_statusBox_bottom_ul">
                        <li @click="isStatusbox = true"><i class="fas fa-images"></i> Photo</li>
                        <li @click="isStatusbox = true"><i class="fas fa-video"></i> Video</li>
                    </ul>
                </div> -->
                <div class="_statusBox_main_all">
                    <div class="_statusBox_main _padd">
                        <p class="_statusBox_close" @click="isStatusbox = false"><Icon type="md-close" /></p>
                        <div class="_statusBox_main_top">
                            <div class="_statusBox_main_pic"><img src="/static/img/male.jpg" alt="" title="" class="_statusBox_main_img _1border_color" /></div>
                            <div class="_statusBox_main_details">
                                <p class="_statusBox_main_name"><a href="" class="_3link">Kollol Chakraborty</a></p>
                                <div class="_statusBox_main_drop">
                                    <Dropdown trigger="click" placement="bottom-start">
                                        <a href="javascript:void(0)" class="_statusBox_main_text">
                                            Public
                                            <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
                                        </a>

                                        <DropdownMenu slot="list">
                                            <DropdownItem><p>Public</p></DropdownItem>
                                            <DropdownItem><p>Only Me</p></DropdownItem>
                                            <DropdownItem><p>Only Friend</p></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        
                        <div class="_statusBox_textarea"><textarea type="text" placeholder="What's on your mind . . ." class="_statusBox_textarea_text" v-model="postInfo.text"></textarea></div>
                        <VueFileAgent  v-model="postInfo.fileRecords"></VueFileAgent>
                        <!-- <div class="_statusBox_video">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button icon="ios-cloud-upload-outline">Photo / Video</Button>
                            </Upload>
                        </div> -->
                        <div class="_statusBox_options">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-camera-retro"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Upload Photos</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-folder-open"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Create Album</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-smile"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Feeling/Activity</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-palette"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Colored Background</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-microphone-alt"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Voice Notes</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-image"></i>
                                        </div>

                                        <p class="_statusBox_options_text">GIF</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-poll"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Create Poll</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-video"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Upload Video</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-music"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Upload Audio</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="_statusBox_options_items">
                                        <div class="_statusBox_options_icon">
                                            <i class="fas fa-folder-open"></i>
                                        </div>

                                        <p class="_statusBox_options_text">Upload File</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="_statusBox_main_bottom">
                            <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-long ivu-btn-large" v-on:click="createPost">
                                <span> Share</span>
                            </button>
                            <!-- <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-long ivu-btn-large" v-on:click="create">
                                <span> Share</span>
                            </button> -->
                            <!-- {{postData}} -->
                        </div>
                    </div>
                    <div @click="isStatusbox = false" class="_statusBox_overlay"></div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

Vue.use(VueFileAgent);
export default {
  data(){
    return{
      isStatusbox : false,
      isloaded: false,
      isHide: true,
      postInfo:{
          text:'',
          fileRecords:[],
      }
    }
  },

  methods:{
    async createPost(){
        // console.log("Create Post Called !!")
        // console.log(this.postData);
        
        // Make Form Data
        // let formData = new FormData();
        // const photos = [];
        // for (let fileObj of this.postInfo.fileRecords){
        //     // console.log(fileObj);
        //     // console.log(fileObj.file);
        //     photos.push(fileObj.file);
        // }
        // formData.append('text',this.postInfo.text);
        // formData.append('images',photos);
        // const temp = Array.from(formData);
        // console.log(temp);
        // // formData.append('images',this.postInfo.fileRecords[0].file)
        // try {
        //     // const postedData = await this.$axios.$post('/timeline/create-post',{
        //     //     //TODO: userId will be authUser id 
        //     //     "userId":1,
        //     //     "text":this.postData,
        //     // });
        //     const postedData = await this.$axios.$post('/timeline/create-post',formData);
        //     this.s("Your post is created Successfully !!")
        //     this.isStatusbox = false;
        //     // console.log(postedData);
        // } catch (error) {
        //     console.log(error)
        // }
        
        if(this.postInfo.text || (this.postInfo.fileRecords.length > 0 )){
            /**
             * Make Form Data 
             */
            let formData = new FormData();
            formData.append('text',this.postInfo.text);
            for(let fileObj of this.postInfo.fileRecords){
                formData.append('images[]',fileObj.file);
            }

            /**
             * Make Request 
             */
            try{
                const postedData = await this.$axios.$post('/timeline/create-post',formData);
                this.s("Your post is created Successfully !!")
                this.isStatusbox = false;
            }catch(error){
                this.e('Something is Wrong. Try Again ...')
                console.log(error);
            }

        }else{
            this.e('Text or Photo One Field is required !!');
        }
        


    },
    async create(){
        console.log(this.fileRecords[0]);
        let formData = new FormData();
        // formData.append('text',this.postData);
        
        formData.append('image',this.fileRecords[0].file);

        await this.$axios.$post('/create',formData);

    }
  },
  
  created(){
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1500);
  }
}
</script>