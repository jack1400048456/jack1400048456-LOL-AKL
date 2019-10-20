<template>
  <div class="about">
    <h1>英雄列表</h1>
    <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="name" label="英雄名称" ></el-table-column>
        <el-table-column prop="icon" label="头像" >
          <template slot-scope="scope">
            <img :src="scope.row.avatar" style="width:3em">
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/heroes/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  props:{
    id:{}
  },
    data(){
        return{
            items:[]
        }
    },
    methods:{
        async fetch(){
            const res =await this.$http.get('rest/heroes')
            this.items = res.data
        },
        async remove(row){
            
             this.$confirm(`此操作将删除分类"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$http.delete(`rest/heroes/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!',
          });  
          this.fetch() ;    
        });
        }
    },
    created(){
        this.fetch()
    }
}
</script>
