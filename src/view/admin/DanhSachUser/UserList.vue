<template>
<div class="containers">
    <h2>{{title}}</h2>
    <el-table border v-loading="loading" :data="this.mData.datas" style="widths: 100%;" >
        <el-table-column label="ID" width="50">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.id}}
            </template>
        </el-table-column>
        <el-table-column label="Name" width="200">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.name}}
            </template>
        </el-table-column>
        <el-table-column label="D.O.B" width="150">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.birthday}}
            </template>
        </el-table-column>
        <el-table-column label="Phone" width="150">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.phone}}
            </template>
        </el-table-column>
        <el-table-column label="Gender" width="80">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.gender}}
            </template>
        </el-table-column>
        <el-table-column label="Age" width="50">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.age}}
            </template>
        </el-table-column>
        <el-table-column label="Adress" width="150">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.address}}
            </template>
        </el-table-column>
        <el-table-column label="Hobbies" width="150">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.hobbies}}
            </template>
        </el-table-column>
        <el-table-column label="Create at" width="150">
            <template slot-scope="scope" v-if="scope.row">
                {{scope.row.createdAt}}
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="Action" width="80">
            <template>
                <el-button @click="detailUser(1)" type="text" size="small"><font-awesome-icon icon="user-secret" /></el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    name: 'ListUsers',
    data() {
        return {
            title: 'Danh sách User',
            mData:{
                datas: []
            },
            loading: true
        }
    },
    created: function () {
        this.listUser();
    },
    methods: {
        listUser() {
            this.axios.get(`https://5e7f58cf7a92ed00165604bf.mockapi.io/users`).then((response) => {
                this.mData.datas = response.data;
                this.loading = false;
                console.log(this.mData.datas);
            })
        },
        detailUser: function(id) {
            this.$router.push(`/user/2`)
        }
    }
}
</script>

<style scoped>
.containers{
  width: 1300px;
  margin: 0 200px;
}

.button-detail {
    border: 2px solid rgb(59, 208, 253);
}

.button-detail:focus {
    outline: none;
}
</style>
