<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

// 重定向中转页面
@Component({
  name: 'Redirect'
})
export default class extends Vue {
  created() {
    const { params, query } = this['$route']
    const { path } = params
    this['$router'].replace({ path: '/' + path, query })
  }

  render(h: any) { }
}
</script>
