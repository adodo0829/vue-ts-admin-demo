<template>
  <div class="ios-detail">
    <section class="left">
      <div class="app-info">
        <p>
          <el-button icon="el-icon-edit" type="text">
            编辑应用信息
          </el-button>
        </p>
        <div class="info">
          <img
            src="https://img.ltn.com.tw/Upload/sports/page/800/2019/09/26/phpcLEBQs.jpg"
            alt=""
          />
          <div class="desc">
            <p class="title">
              Minecraft
            </p>
            <p class="version">
              <span>v2.3.4</span>
              <span>更新时间: 2019/8/19 20:21:22</span>
              <span class="record">更新记录</span>
            </p>
            <p class="dev">
              开发者名字
            </p>
            <p class="cate">
              <span># 分类1</span>
              <span># 分类2</span>
            </p>
          </div>
          <div class="count">
            <div class="c-l">
              <div>
                <p>评分</p>
                <p>4.3</p>
              </div>
            </div>
            <div class="c-r">
              <p>累计查看量：123136523466</p>
              <p>累计下载量：123136523466</p>
              <p>累计评论量：123136523466</p>
            </div>
          </div>
        </div>
      </div>

      <div class="app-photo">
        <p>
          <el-button icon="el-icon-picture" type="text" disabled>
            应用截图
          </el-button>
        </p>
        <div>
          <div class="app-photo-item">
            <img
              src="https://img.ltn.com.tw/Upload/sports/page/800/2019/09/26/phpcLEBQs.jpg"
              alt=""
            />
            <span>截图</span>
          </div>
          <div class="app-photo-item">
            <img
              src="https://img.ltn.com.tw/Upload/sports/page/800/2019/09/26/phpcLEBQs.jpg"
              alt=""
            />
            <span>截图</span>
          </div>
        </div>
      </div>

      <div class="app-desc">
        <p>
          <el-button icon="el-icon-document-copy" type="text" disabled>
            应用描述
          </el-button>
        </p>
        <div class="desc-item">
          <p>应用详情</p>
          <div>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <div class="desc-item">
          <p>版本更新记录</p>
          <div>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
        <div class="desc-item">
          <p>编辑推荐</p>
          <div>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>
      </div>
    </section>
    <section class="right">
      <div class="game">
        <p>相似游戏</p>
        <div v-for="i in 4" :key="i">
          <div class="g-l">
            <img
              src="https://img.ltn.com.tw/Upload/sports/page/800/2019/09/26/phpcLEBQs.jpg"
              alt=""
            />
            <div class="mask"></div>
          </div>
          <div class="g-r">
            <p class="name">
              应用名称大萨达撒多撒
            </p>
            <p>天堂游戏公司</p>
            <p class="tags">
              <el-tag size="mini">
                标签1
              </el-tag>
              <el-tag size="mini">
                标签2
              </el-tag>
            </p>
            <p class="v">
              <span class="version">v1.2.3</span>
              <span>5.0<i
                style="color: #1890FF; font-size: 14px"
                class="el-icon-star-on"
              ></i></span>
            </p>
          </div>
        </div>
      </div>

      <div class="article">
        <p>相关专题/文章</p>
        <div v-for="index in 4" :key="index">
          <img
            src="https://img.ltn.com.tw/Upload/sports/page/800/2019/09/26/phpcLEBQs.jpg"
            alt=""
          />
          <span>精选专题</span>
          <div class="mask"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import DisplayMixin from '@/mixins/displayTitle'

@Component({
  name: 'IosDetail'
})
export default class extends mixins(DisplayMixin) {}
</script>

<style lang="scss" scoped>
.mask {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: none;
}
.ios-detail {
	display: flex;
	.right {
		width: 320px;
		background-color: #f0f2f5;
		padding: 0 10px;
		.game {
			> p {
				font-size: 30px;
				font-weight: 500;
				line-height: 60px;
			}
			> div {
				height: 120px;
				margin-bottom: 30px;
				background-color: #fff;
				display: flex;
				cursor: pointer;
				.g-l {
					width: 120px;
					height: 100%;
					padding: 10px;
					position: relative;
					img {
						width: 100%;
						height: 100%;
					}
					&:hover {
						.mask {
							display: block;
						}
					}
				}
				.g-r {
					padding: 10px 10px 10px 0;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					> p {
						font-size: 12px;
					}
					.name {
						@include ellipsis(1);
						font-size: 14px;
					}
					.tags {
						span {
							margin-right: 5px;
						}
					}
					.v {
						.version {
							margin-right: 30px;
						}
					}
				}
			}
		}
		.article {
			> p {
				font-size: 30px;
				font-weight: 500;
				line-height: 60px;
			}
			> div {
        position: relative;
				height: 120px;
				margin-bottom: 30px;
				background-color: #fff;
				display: flex;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
        span {
          @include ab-center;
          left: 15%;
          top: 75%;
          color: #fff;
          font-weight: 500;
        }
        &:hover {
						.mask {
							display: block;
						}
					}
			}
		}
	}
	.left {
		flex: 1;
		flex-wrap: nowrap;
		padding: 0 20px;
		background-color: #fff;

		.app-info {
			width: 100%;
			> p {
				margin-bottom: 10px;
			}
			.info {
        display: flex;
        padding-right: 10px;
				// justify-content: space-between;
				align-items: center;
				> img {
					width: 150px;
					height: 150px;
					border-radius: 20px;
					margin-right: 25px;
				}
				.desc {
					> p {
						padding: 6px 0;
					}
					.title {
						font-size: 40px;
						font-weight: 500;
						color: $word;
					}
					.version,
					.dev,
					.cate {
						font-size: 16px;
						color: $word;
						span {
							margin-right: 15px;
						}
						.record {
							cursor: pointer;
							color: $main-color;
						}
					}
				}
				.count {
					margin-left: 20px;
					display: flex;
					align-items: center;
					.c-l {
						width: 100px;
						height: 100px;
						border: 1px dashed $main-color;
						background-color: #f3fbff;
						border-radius: 50%;
						@include flex-center;
						> div {
							text-align: center;
							p {
								padding: 2px;
								color: $main-color;
							}
						}
					}
					.c-r {
						margin-left: 15px;
						p {
							color: #868686;
							padding: 7px 0;
						}
					}
				}
			}
		}

		.app-photo {
			margin-top: 30px;
			> p {
				font-size: 14px;
				margin-bottom: 10px;
			}
			> div {
				height: 600px;
				display: flex;
				flex-wrap: wrap;
				.app-photo-item {
					position: relative;
					height: 100%;
					width: 300px;
					margin-right: 15px;
					img {
						width: 100%;
						height: 100%;
					}
					span {
						font-size: 50px;
						color: #a29d9d;
						@include ab-center;
					}
				}
			}
		}

		.app-desc {
			margin-top: 10px;
			width: 900px;
			> p {
				font-size: 14px;
				margin-bottom: 10px;
			}
			.desc-item {
				width: 100%;
				height: 100px;
				margin-bottom: 40px;
				overflow: auto;
				word-wrap: break-word;
			}
		}
	}
}
</style>
