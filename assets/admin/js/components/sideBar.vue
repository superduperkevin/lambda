<template>
    <div v-if="showSidebar == 'full'" class="side-bar full-side">
        <div class="side-top">
            <Menu width="auto" :accordion="true" :open-names="menu_open" @on-select="goTo" :active-name="getActiveMenu">
                <div v-for="(item, index) in menu" :key="index">
                    <MenuItem 
                        v-if="can(item) && !hasItems(item) && item.link_to != 'link'"
                        :name="`/p/${item.id}`" 
                    >
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span v-html="getTitle(item)"></span>
                    </MenuItem>
                    <Submenu v-if="can(item) && hasItems(item)" :name="item.id">
                        <template slot="title">
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span v-html="getTitle(item)"></span>
                        </template>
                        <template v-for="subitem in item.children">
                            <MenuItem
                                v-if="can(subitem) && !hasItems(subitem)"
                                :name="`/p/${item.id}/${subitem.id}`"
                                :key="`sub-item-${subitem.name}`"
                            >
                                <!-- <i v-if="subitem.icon" :class="subitem.icon"></i> -->
                                <span v-html="getTitle(subitem)"></span>
                            </MenuItem>
                        </template>
                    </Submenu>

                    <!-- <a :href="item.url" v-if="can(item) && !hasItems(item) && item.link_to == 'link'" target="_blank" class="ivu-menu-item "><i v-if="item.icon" :class="item.icon"></i> <span v-html="getTitle(item)"></span></a> -->
                </div>
            </Menu>
        </div>

        <div class="side-bottom">
            <div class="bottom-item" @click="logout" >
                <Icon type="ios-log-out"/><span>Гарах</span>
            </div>
            <div class="bottom-item" @click="toggleSideBar" >
                <Icon type="ios-menu-outline"/><span>Хураах</span>
            </div>
        </div>
    </div>
    <div v-else class="side-bar hidden-side">
        <div class="side-top">
            <Menu width="auto" @on-select="goTo" :active-name="getActiveMenu">
                <div v-for="(item, index) in menu" :key="index">
                    <MenuItem 
                        v-if="can(item) && !hasItems(item) && item.link_to != 'link'"
                        :name="`/p/${item.id}`"
                    >
                        <Tooltip :content="getTitle(item)" placement="right" transfer>
                            <i v-if="item.icon" :class="item.icon"></i>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem v-if="can(item) && hasItems(item)" :name="`/p/${item.id}/${item.children[0].id}`">
                        <Dropdown placement="right" transfer @on-click="goTo">
                            <i v-if="item.icon" :class="item.icon"></i>
                            <DropdownMenu slot="list">
                                <template v-for="subitem in item.children">
                                    <DropdownItem 
                                        v-if="can(subitem) && !hasItems(subitem)"
                                        :key="`sub-item-${subitem.name}`" 
                                        :name="`/p/${item.id}/${subitem.id}`"
                                    >
                                        <span v-html="getTitle(subitem)"></span>
                                    </DropdownItem>
                                </template>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                    <!-- <a :href="item.url" v-if="can(item) && !hasItems(item) && item.link_to == 'link'" target="_blank" class="ivu-menu-item "><i v-if="item.icon" :class="item.icon"></i> <span v-html="getTitle(item)"></span></a> -->
                </div>
            </Menu>
        </div>

        <div class="side-bottom">
            <Tooltip content="Гарах" placement="right" transfer>
                <div class="bottom-item" @click="logout" >
                    <Icon type="ios-log-out"/>
                </div>
            </Tooltip>
            <Tooltip content="Нээх" placement="right" transfer>
                <div class="bottom-item" @click="toggleSideBar" >
                    <Icon type="ios-menu-outline"/>
                </div>
            </Tooltip>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    props:["show_analytic", "customMenuItems"],
    data() {
        return {
            menu: window.init.menu,
            cruds: window.init.cruds,
            permissions: window.init.permissions.permissions,
            extra: window.init.permissions.extra,
            menu_open: [],
        }
    },
    computed: {
        getActiveMenu () {
            const path = this.menu.find(item => item.url === this.cleanPath);
            return path ? `/p/${path.id}` : this.cleanPath;
        },
        cleanPath() {
            return this.$route.fullPath.split("?")[0];
        },
        ...mapGetters({
            showSidebar: "showSidebar",
        }),
    },
    beforeMount() {
        this.findActiveMenu(this.menu, "/p", "");
    },
    methods:{
        goTo(item) {
            this.$router.push(item).catch(()=>{});
        },
        logout(){
            this.$emit('logout');
        },
        toggleSideBar() {
            let newValue = "hidden";
            if (this.showSidebar === "hidden") {
                newValue = "full";
            }
            this.$store.commit('toggleSideBar', newValue)
        },
        findActiveMenu(menus, prefix, parentID) {
            menus.forEach(menu => {
                if (menu.children) {
                    if (menu.children.length >= 1) {
                        this.findActiveMenu(menu.children, `${prefix}/${menu.id}`, `${parentID}${menu.id}`)
                    } else {
                        this.setActiveMenu(menu, prefix, parentID)
                    }
                } else {
                    this.setActiveMenu(menu, prefix, parentID)
                }
            })
        },
        setActiveMenu(menu, prefix, parentID) {
            if ((menu.link_to == "iframe" || menu.link_to =="crud") && this.cleanPath == `${prefix}/${menu.id}` && parentID != "") {
                this.menu_open = [parentID];
            }
        },
        can(menu) {
            if (this.permissions[menu.id]) {
                if (this.permissions[menu.id].show)
                    return true;
                else
                    return false
            } else
                return false;
        },
        getTitle(item) {
            if (item.link_to == 'crud') {
                let crudIndex = this.cruds.findIndex(crud => crud.id == item.url);
                if (crudIndex >= 0)
                    return this.cruds[crudIndex].title;
                else
                    return ''
            } else
                return item.title;
        },
        hasItems(item) {
            return item && item.children !== undefined ? item.children.length > 0 : false
        },
    },
};
</script>