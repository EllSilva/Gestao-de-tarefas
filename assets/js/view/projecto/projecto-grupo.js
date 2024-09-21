import get_template from '../../components/get_template.js'


export default {


  data: function () {
    return {
      title: "home",
      card_pane_table: "A",
      isActiveA: true,
      isActiveB: false

    }

  },

  methods: {
    card_pane() {
      this.card_pane_table = "A"
      this.isActiveA = true
     this.isActiveB = false
    },

    table_pane() {
      this.card_pane_table = "B"
      this.isActiveA = false
      this.isActiveB = true
    }


  },

  async mounted() {


  },

  template: await get_template('./assets/js/view/projecto/projecto-grupo')
}