import router from "../router";

const defaultUsername = 'Stranger';

function getUsername() {
    return localStorage.getItem('username') ?? defaultUsername;
}

// Compares username to defaultUsername and returns true/false
function isDefaultUsername(username) {
    return username === defaultUsername;
}

function logoutHandler() {
    if (localStorage.getItem('username')) {
        localStorage.removeItem('username');
        router.go()
    }
}

export {defaultUsername, getUsername, isDefaultUsername, logoutHandler}
