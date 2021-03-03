<template>
<div class="container">
        <div class="card">
                <div class="card-header">
                        <h3>{{title}}</h3>
                        <div class="card-header-action"></div>
                </div>
                <div class="card-body">
                        <el-form 
                                ref="form" 
                                label-width="50%"
                                label-position="top"
                                v-for="(item,key) in mData.detail"
                                :key="key"
                                >
                                <el-row :gutter="20">
                                        <el-col :span="2">
                                                <el-form-item label="ID">
                                                        <el-input :value="item.id" disabled></el-input>
                                                </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                                <el-form-item label="Name">
                                                        <el-input 
                                                                v-model="item.name" 
                                                                clearable
                                                        ></el-input>
                                                </el-form-item>
                                        </el-col>
                                        <el-col :span="4">
                                                <el-form-item label="Gender">
                                                        <el-radio-group v-model="item.gender">
                                                                <el-radio :label="1">Male</el-radio>
                                                                <el-radio :label="2">Female</el-radio>
                                                        </el-radio-group>
                                                </el-form-item>
                                        </el-col>
                                        <el-col :span="2">
                                                <el-form-item label="Age">
                                                        <el-input 
                                                                v-model="item.age" 
                                                                clearable
                                                        ></el-input>
                                                </el-form-item>
                                        </el-col>
                                </el-row>
                        </el-form>
                </div>
        </div>
</div>
</template>

<script>
import ValidForm from "../../../service/ValidService"
export default {
    name: 'UserDetail',
    data() {
        return {
            title: 'This is User Detail Page',
            mData:{
                detail: []
            }
        }
    },
    created: function () {
        this.detailUser();
    },
    methods: {
        detailUser() {
            var userID = 1;
            this.axios.get(`https://5e7f58cf7a92ed00165604bf.mockapi.io/users/${userID}`).then((response) => {
                this.mData.detail.push(response.data);
                console.log("this: " + JSON.stringify(this.mData.detail));
            })
        }
    }
}
</script>
<style scope>
.el-form-item__label{
        line-height: 0;
}
</style>

