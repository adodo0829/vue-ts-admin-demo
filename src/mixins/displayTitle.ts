import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component({
  name: 'DisplayTitle'
})
export default class extends Vue {
  mounted() {
    (this.$parent as any).showNav = false
  }
  beforeRouteLeave(to: Route, from: Route, next: any) {
    (this.$parent as any).showNav = true
    next()
  }
}
