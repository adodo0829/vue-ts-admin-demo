<template>
  <div class="ios">
    <!-- 用户筛选条件 -->
    <user-operation>
      <template v-slot:left>
        <div class="item">
          <span>ID: </span>
          <div>
            <el-input v-model="params.id" size="small" />
          </div>
        </div>
        <div class="item">
          <span>应用名称: </span>
          <div>
            <el-input v-model="params.name" size="small" />
          </div>
        </div>
        <div class="item">
          <span>App ID: </span>
          <div>
            <el-input v-model="params.name" size="small" />
          </div>
        </div>
        <div class="item">
          <span>应用来源: </span>
          <div>
            <el-select
              v-model="params.source"
              size="small"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="item">
          <span>状态: </span>
          <div>
            <el-select
              v-model="params.source"
              size="small"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="item">
          <span>修改时间: </span>
          <div>
            <el-date-picker
              v-model="dateArray"
              size="small"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="r-b">
          <el-button size="small" type="primary">
            搜索
          </el-button>
        </div>
        <div class="r-b reset">
          <el-button size="small" plain>
            重置
          </el-button>
        </div>
        <div class="r-b create">
          <el-button type="warning" size="small" icon="el-icon-plus">
            新建
          </el-button>
        </div>
        <div class="r-b">
          <el-button size="small" plain>
            导出
          </el-button>
        </div>
      </template>
    </user-operation>

    <!-- 多选操作 -->
    <div v-show="showMultiSelect" class="multi-select">
      <span><i class="el-icon-warning"></i></span>
      <span>已选择 <i>2</i> 项</span>
      <span><el-button size="small" type="text">反选</el-button></span>
      <span><el-button size="small" type="text">上架</el-button></span>
      <span><el-button size="small" type="text">下架</el-button></span>
    </div>

    <!-- table -->
    <section class="table-box">
      <el-table :data="tableData" style="width: 100%" max-height="1000" border>
        <el-table-column fixed type="selection" width="40"></el-table-column>
        <el-table-column fixed prop="id" label="ID" width="100">
        </el-table-column>
        <el-table-column label="ICON" width="112">
          <template v-slot="scope">
            <img class="icon" :src="scope.row.icon" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="应用信息" width="256">
          <template v-slot="scope">
            <section class="detail">
              <h3 @click="goToDetail(scope.row.id)">
                {{ scope.row.name }}
              </h3>
              <p>
                <span># {{ scope.row.category }}</span>
                <span>{{ scope.row.version }}</span>
                <span>评分: {{ scope.row.socre }}</span>
              </p>
              <p>{{ scope.row.developer }}</p>
              <p>{{ scope.row.price }}</p>
            </section>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column prop="source" label="来源" width="150">
        </el-table-column>
        <el-table-column prop="editor" label="修改人" width="150">
        </el-table-column>
        <el-table-column prop="updateDate" label="修改时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template v-slot="scope">
            <section class="table-button">
              <span class="t-b">
                <el-button
                  type="primary"
                  size="small"
                  @click.native.prevent="editApp(scope.row)"
                >
                  编辑
                </el-button>
              </span>
              <span class="t-b">
                <el-button
                  type="text"
                  size="small"
                  @click.native.prevent="upApp(scope.row)"
                >
                  上架
                </el-button>
              </span>
              <span class="t-b">
                <el-button
                  type="text"
                  size="small"
                  @click.native.prevent="downApp(scope.row)"
                >
                  下架
                </el-button>
              </span>
            </section>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <!-- 分页 -->
    <pagination
      :total="totalCount"
      :page.sync="params.page"
      :limit.sync="params.pageCount"
      @pagination="getTableData"
    />
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { Dictionary } from 'vuex'
import { IPageInfo } from '@/typings/global'
import { IReqIosApp } from '@/api/files/files-app/req'
import { IResIosApp } from '@/api/files/files-app/res'
import { getIosList } from '@/api/files/files-app/filesApp'

@Component({
  name: 'FilesAppIos'
})
export default class extends Vue {
  // data
  private params: IReqIosApp = {
    id: null,
    name: null,
    appleId: null,
    source: null,
    status: null,
    updateDateStart: null,
    updateDateEnd: null,
    page: 1,
    pageCount: 10
  }
  private tableData: IResIosApp[] = []
  private totalCount: number = 0
  private dateArray: string[] = []
  private options = [
    {
      value: '选项1',
      label: '黄金糕'
    },
    {
      value: '选项2',
      label: '双皮奶'
    },
    {
      value: '选项3',
      label: '蚵仔煎'
    },
    {
      value: '选项4',
      label: '龙须面'
    },
    {
      value: '选项5',
      label: '北京烤鸭'
    }
  ]
  showMultiSelect: boolean = true
  routeQuery: Dictionary<string> = {}

  // lifecycle
  created() {
    this.getTableData()
  }

  // methods
  async getTableData() {
    let res = await getIosList(this.params)
    this.tableData = res.data.dataList
    this.totalCount = res.data.pageInfo.totalCount
  }
  goToDetail(id: string) {
    console.log(11111)
    this.routeQuery = {
      query: id
    }
    this.$router.push({
      name: 'IosDetail',
      query: this.routeQuery
    })
  }
  editApp(item: IResIosApp) {
    console.log(item)
  }
  upApp(item: IResIosApp) {
    console.log(item)
  }
  downApp(item: IResIosApp) {
    console.log(item)
  }
}
</script>

<style lang="scss" scoped>
.ios {
  .table-box {
    height: 100%;
    .icon {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
    .detail {
      h3,
      p {
        padding: 0;
        margin: 0;
      }
      h3:hover {
        color: $main-color;
        cursor: pointer;
      }
      p {
        font-size: 12px;
        color: $title-color;
        span {
          margin-right: 20px;
        }
      }
    }
    .table-button {
      .t-b {
        margin-right: 16px
      }
    }
  }
}
</style>
