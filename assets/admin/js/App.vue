<template>
    <div :class="menuMode == 'top'  ? 'paper-theme aside-page paper-with-top-nav '+themeMode : menuMode == 'nested' ? showSidebar == 'full' ? 'paper-theme aside-page nested '+themeMode : 'paper-theme aside-page nested hidden-nested '+themeMode :  'paper-theme aside-page side-menu '+themeMode">
        <header >
            <div class="logo">
                <router-link to="/">
                    <img :src="logo" v-if="showSidebar == 'full'" alt="Lambda"/>
                    <img :src="favicon" alt="Lambda" v-else/>

                </router-link>
            </div>

            <div class="wbg">
            </div>
            <div class="wbg-border">
            </div>
            <div :class="menuMode == 'top_in_header' ? 'header-left hidden-page-title' : 'header-left'">
                <a href="javascript:void(0)" class="side-toggle" @click="toggleSideBar" v-if="menuMode == 'nested'">
                    <Icon type="ios-menu-outline"/>
                </a>

                <portal-target name="header-left">
                </portal-target>
            </div>

            <div class="top-nav-in-header" v-if="menuMode == 'top_in_header'">
                <page-nav></page-nav>
            </div>

            <div class="header-right">

                <a href="#" class="settings-btn" target="_blank">
                    <Icon type="ios-help"/>
                    <span>Гарын авлага</span>
                </a>
                <slot name="headerMenu"></slot>

                <user-control></user-control>

                <a href="javascript:void(0)" class="settings-btn" @click="showSettings = !showSettings">
                    <Icon type="ios-settings-outline"/>
                </a>
            </div>
        </header>
        <div class="top-nav" v-show="menuMode == 'top'">
            <page-nav v-show="menuMode == 'top'"></page-nav>
            <ul>
                <!--                <li>-->
                <!--                    <router-link :to="`/analytics`" style="width: 120px">-->
                <!--                        <i class="ti-pie-chart"></i>-->
                <!--                        <span>Анализ</span>-->
                <!--                    </router-link>-->
                <!--                </li>-->
                <slot name="sideBottomMenu">
                </slot>
                <li>
                    <a @click="logoutModal = true" style="width: 100px">
                        <i class="ti-power-off"></i>
                        <span>Гарах</span>
                    </a>
                </li>
            </ul>
        </div>
        <side-bar-nested  @logout="showLogout" v-if="menuMode == 'nested'" />
        <sidebar :class="menuMode == 'lambda_sidebar_with_text' ? 'with-text' : ''"
                 v-if="menuMode == 'lambda_sidebar_with_text' || menuMode == 'lambda_side_bar'">

            <page-nav :showTooltip="menuMode == 'lambda_side_bar'"></page-nav>

            <div slot="aside-bottom">
                <ul>
                    <!--                    <li>-->
                    <!--                        <router-link :to="`/analytics`">-->
                    <!--                            <i class="ti-pie-chart"></i>-->
                    <!--                            <span>Анализ</span>-->
                    <!--                        </router-link>-->
                    <!--                    </li>-->
                    <slot name="sideBottomMenu">
                    </slot>
                    <li class="logout-help">
                        <a @click="logoutModal = true">
                            <Icon type="ios-log-out"></Icon>
                        </a>
                    </li>
                </ul>
            </div>
        </sidebar>
        <main :class="menuMode == 'top' ? 'with-top-bar' : ''">
            <router-view :key="$route.path"></router-view>
        </main>

        <Modal
            v-model="logoutModal"
            :closable="false"
            width="252"
            class="logout-modal"
        >
            <p slot="header" style="display:none;"></p>
            <div style="text-align:center">
                <a @click="logout()">
                    <i class="ti-power-off"></i>
                    Гарах
                </a>
                <a @click="cancel()">
                    <i class="ti-reload"></i>
                    Болих
                </a>
            </div>
            <div slot="footer" style="display:none;">
                <form action="/auth/logout"></form>
            </div>

        </Modal>
        <settings :showSettings="showSettings"></settings>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import sideBar from './components/sideBar';
import settings from './components/settings';

export default {
    computed: {
        ...mapGetters({
            user: "user",
            showSidebar: "showSidebar",
            menuMode: "menuMode",
            themeMode: "themeMode",
        }),
    },
    components: {
        "side-bar-nested": sideBar,
        "settings": settings,

    },
    created() {
        console.log('route',this.$route);
    },
    data() {
        return {
            logoutModal: false,
            showSettings: false,
            menu: window.init.menu,
            cruds: window.init.cruds,
            permissions: window.init.permissions.permissions,
            extra: window.init.permissions.extra,
            logo: window.lambda.logo,
            favicon: window.lambda.favicon,

        };
    },

    methods: {
        can(menu) {
            if (this.permissions[menu.id]) {
                if (this.permissions[menu.id].show) return true;
                else return false;
            } else return true;
        },

        // can_extra() {
        //     console.log(this.extra);
        //
        //     if (this.extra) {
        //         if (this.extra.moqup || this.extra.datasource || this.extra.chart || this.extra.userlist) {
        //             return true
        //         } else return false
        //     } else return false
        // },

        getTitle(item) {
            if (item.link_to == "crud") {
                let crudIndex = this.cruds.findIndex((crud) => crud.id === item.url);
                if (crudIndex >= 0) {
                    return this.cruds[crudIndex].title;
                } else {
                    return "";
                }
            } else {
                return item.title;
            }
        },

        checkActive(url) {
            let checkUrl = url.split("#");
            if (checkUrl.length > 1 && checkUrl[1] === this.$route.path) {
                return "active";
            }
        },
        toggleSideBar() {
            let newValue = "hidden";
            if (this.showSidebar === "hidden") {
                newValue = "full";
            }
            this.$store.commit('toggleSideBar', newValue)
        },
        logout() {
            axios.post("/auth/logout", {}).then((o) => {
                window.location = "/auth/login";
            });
        },
        showLogout() {
            this.logoutModal = true;
        },
        cancel() {
            this.$data.logoutModal = false;
        },
    },
};
</script>
