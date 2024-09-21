import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {

        }
    },

    methods: {

    },

    async mounted() {


        const menu = document.querySelector(".aside ");
        const menuTrigger = document.querySelector("#kt_aside_mobile_toggle");
        const closeMenu = document.querySelector(".overlay1");



        menuTrigger.addEventListener("click", () => {
            toggleMenu();
        })
        closeMenu.addEventListener("click", () => {
            toggleRemove();
        })

        document.querySelector(".overlay1").addEventListener("click", () => {
            toggleRemove();
        })

        function toggleMenu() {
            menu.classList.toggle("drawer-on"); 
            menu.classList.toggle("drawer");
            document.querySelector(".overlay1").classList.toggle("drawer-overlay"); 
        }
        
        function toggleRemove() { 
            menu.classList.remove("drawer-on");
            menu.classList.remove("drawer");
            document.querySelector(".overlay1").classList.remove("drawer-overlay");
        }
    },
    template: await get_template('./assets/js/components/menu/home')
}