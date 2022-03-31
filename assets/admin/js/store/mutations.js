
export const toggleLoader = (state, key) => {
    state.loaders[key] = !state.loaders[key];
}

export const toggleSideBar = (state, value) => {
    localStorage.setItem('showSidebar', value);
    state.showSidebar = value;
}

export const setMenuMode = (state, value) => {
    localStorage.setItem('menuMode', value);
    state.menuMode = value;
}
export const changeThemColor = (state, value) => {
    localStorage.setItem('primaryColor', value);
    state.primaryColor = value;
}

export const changeTextColor = (state, value) => {
    localStorage.setItem('textColor', value);
    state.textColor = value;
}

export const changeThemeMode = (state, value) => {
    localStorage.setItem('themeMode', value);
    state.themeMode = value;
}
