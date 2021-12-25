import router from "../router";

function goBack () {
    router.go(-1)
}

function goForward() {
    router.go(1)
}

export {goBack, goForward}
