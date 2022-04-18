<template>
    <div>
        <div class="_2menu">
            <div class="_2menu_con">
                <div class="row align-items-center">
                    <div class="col">
                        <router-link to="/">
                            <h3 class="_menu_logo_text">
                                <span class="_menu_logo_symbol">C</span>
                                <span class="_menu_logo_text_main">CONNECTIVER</span>
                            </h3>
                        </router-link>
                    </div>

                    <div class="col-auto">
                        <router-link to="/logIn">
                            <button class="_log_btn _2menu_long" type="button">Login</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner -->
        <div class="_4banner">
            <div class="_4banner_main">
                <h1 class="_4banner_title">Connectiver</h1>
                <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Form -->
        <div class="_log_form_main">
            <h2 class="_log_form_title">Sign Up</h2>

            <div class="_log_form">
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="First name" type="text" v-model="signUpInfo.first_name">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Last name" type="text" v-model="signUpInfo.last_name">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Email address" type="text" v-model="signUpInfo.email">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Password" type="text" v-model="signUpInfo.password">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Confirm password" type="text" v-model="signUpInfo.password_confirmation">
                </div>
                <div class="_log_input_group">
                    <select class="_1select" v-model="signUpInfo.gender">
                        <option selected="true" disabled>Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select>
                </div>

                <div class="_log_input_group">
                    <div class="_log_checkBox">
                        <input type="checkbox" id="html" v-model="signUpInfo.agree">
                        <label for="html">I agree with the <a href="">Terms</a> & <a href="">Privacy</a></label>
                    </div>
                </div>
                <div class="_log_button">
                    <button class="_log_btn _btn_long" v-on:click="signUp">Sign Up</button>
                </div>
            </div>
        </div>
        <!-- Form -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:'custom',
    data(){
        return {
            signUpInfo:{
                first_name:'',
                last_name:'',
                email:'',
                password:'',
                password_confirmation:'',
                gender:'',
                agree:false,
            }
        }
    },
    methods:{
        async signUp(){
            let isAnyEmptyField = false;
            let emptyFieldName = "";
            Object.keys(this.signUpInfo).forEach((value)=>{
                if(this.signUpInfo[value] == false){
                    isAnyEmptyField = true;
                    emptyFieldName = value;
                }
            })
            if(isAnyEmptyField === true){
                // alert(`${emptyFieldName} field is empty`);
                this.w(`${emptyFieldName} field is empty`)
            }else{
                if(this.signUpInfo.password !== this.signUpInfo.password_confirmation){
                    // alert("Confirm Password doesn't match!!");
                    this.e("Confirm Password doesn't match!!");
                }else{
                    let registrationData; 
                    try {
                        registrationData = await this.$axios.$post('/auth/register',this.signUpInfo);
                        // alert('Account Created Successfully !!');
                        this.s('Account created successfully')
                        // TODO: After Registration successfully redirect the user to the index page.
                        this.$router.push('/');
                    } catch (error) {
                        // console.log('******************');
                        // console.log(error);
                        // console.log('********************');
                        this.swr();
                    }
                }
            }
        }
    }
}
</script>