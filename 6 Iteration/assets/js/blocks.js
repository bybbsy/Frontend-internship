document.addEventListener("DOMContentLoaded", () => {
    let messages = new Object();

    function recieveMessageInfo(block_messages) {
        block_messages.forEach((message, index) => {
            let element = message.querySelector(".messages-list__message-author");
            let author = message.querySelector(".messages-list__message-author h5").innerHTML;
            let content = message.querySelector(".messages-list__message-brief p").innerHTML;
            let date = message.querySelector(".messages-list__message-date p").innerHTML;
            messages[index] = {
                author,
                content,
                date,
                element
            }
        })
    }

    function getObjectSize(object = {}) {
        let count = null;

        for(element in object) count++;

        // Object.entries(object).forEach(element => count++)
        return count;
    }

    var block_messages = document.querySelectorAll(".messages-list__message-block");

    try {
        recieveMessageInfo(block_messages)
    }
    catch (ex) {
        console.error(ex)
    }
    finally {
        console.log(messages)
    }

    let count = getObjectSize(messages);

    // Экранизация
    let plural = (count) => count.toString().match(/^1$/) ? "message" : "messages";
    let even = (count) => count % 2 === 0 ? "even" : "odd";

    // Шаблонизация
    let show_info = `You've got ${count} ${plural(count)}.(${even(count)} amount)\n`;

    let recent = messages[parseInt(count) - 1].author;

    // Конкатенация
    show_info += `The recent one from ${recent}.`;
    console.log(show_info)

    var burger_menu = document.querySelector(".header__nav-input");

    burger_menu.addEventListener("click", () => {
        let header_nav = document.querySelector(".header__nav");
        let wrapper = document.querySelector(".wrapper")
        header_nav.classList.toggle("expanded");
        wrapper.classList.toggle("no-scroll");
    })

    let custom_date_input = document.querySelector(".reply-block__custom-date label");
    custom_date_input.addEventListener("click", () => {
        let calendar = document.querySelector(".reply-block__calendar");
        calendar.classList.toggle("hidden");
    })

    let signup_btn = document.querySelector(".header__nav-item.sign-up");

    signup_btn.addEventListener("click", () => {
        let modal = document.querySelector(".modal");
        let wrapper = document.querySelector(".wrapper")
        let loginBlock = modal.querySelector(".login-block");

        modal.classList.toggle("hidden")
        wrapper.classList.toggle("no-scroll");
        loginBlock.classList.toggle("hidden");

        let decline_btn = modal.querySelector(".login-block__decline-btn");
        decline_btn.addEventListener("click", () => {
            modal.classList.add("hidden");
            wrapper.classList.remove("no-scroll");
            loginBlock.classList.add("hidden")
        })
    })

    var badge = document.querySelector(".new-badge");

    var header_info = document.querySelector(".header__info");
    var header__info_h = header_info.querySelector("h3");
    header_info.addEventListener("click", (e) => {
        console.log("Here we go")
        const target = e.target;
        // e.stopPropagation();

    })

    header__info_h.addEventListener("click", (e) => {
        console.log("You cant go up");
        e.stopPropagation();
    })

    badge.addEventListener("mouseout", () => {
        badge.animate([
            { transform: "rotate(0)" },
            { transform: "rotate(360deg)" },
        ], {
            duration: 1000,
            easing: "cubic-bezier(0,1.77,1,.14)"
        }
        )
    })

    var username_input = document.querySelector(".login-block__username-username");
    var login_title = document.querySelector(".login-block__signup-info h4");
    let label = document.querySelector(".login-block__username-label")

    username_input.addEventListener("input", (e) => {
        let value = e.target.value;
        console.log(value)
        if(value !== "free-user") {
            username_input.style.outline = "1px solid red";
            label.innerHTML = `Username <i>${value}</i> is not valid`;
        }
        else {
            username_input.style.outline = "1px solid teal";
            label.innerHTML = `Username <i>${value}</i> is valid`;
        }
    })

    let javascript_link = document.querySelector(".header__nav-item.js-features");

    function UndefError(e) {
        let error = new Error();
        return `Some unexpected error has occured\nname:${e.name}\ncause:${e.message}\nstack:${e.stack}`;
    }

    let spamKeys = ["LoReM", "ipsum", "meSSage"].map(key => key.toLowerCase());

    let classes = [];

    class Message {
        constructor(options) {
            this.author = options.author;
            this.content = options.content;
            this.date = options.date;
            this.selector = options.selector ?? "Selector hasn't been specified";
        }
    }

    class SpamMessage extends Message {
        constructor(options) {
            super(options);
            this.spam = true;

            this.setSpam();
        }

        setSpam() {
            this.selector.classList.add("spam")
        }
    }

    function checkSpam(msg) {
        for(let key in spamKeys) {
            if(msg.includes(spamKeys[key])) {
                return true;
            }
        }
        return false;
    }

    function* logMessages(...classes) {
        for(let clss in classes) {
            yield {
                author : classes[clss].author,
                content : classes[clss].content,
                date: classes[clss].date,
                spam : classes[clss].spam ?? false
            }
        }
    }

    function processMessages(block_messages) {
        block_messages.forEach((message) => {
            let selector = message;
            let author = message.querySelector(".messages-list__message-author h5").innerHTML;
            let content = message.querySelector(".messages-list__message-brief p").innerHTML;
            let date = message.querySelector(".messages-list__message-date p").innerHTML;
            let spam = checkSpam(content);

            let message_obj = {
                author,
                content,
                date,
                selector
            }
            if (spam) {
                var msg = new SpamMessage(message_obj)
            }
            else {
                var msg = new Message(message_obj)
            }

            classes.push(msg)
        })
        console.log(classes)
    }

    processMessages(block_messages);

    let msg = new Message({
        author : "Hiram Lodge",
        content: "Wanna some fizzle rocks?",
        date : "12.05.2021"
    })

    // Spread
    let allMessages = [...classes, msg];

    // Rest
    let logs = logMessages(...classes);

    let [first_msg, , third_msg, ...other] = classes;

    // console.log(first_msg)
    // console.log(third_msg)
    // console.log(other)

    for(let log of logs)
    {
        console.log(`Author: ${log.author}\nContent: ${log.content}\nDate: ${log.date}\nSpam: ${log.spam}`)
    }

    const approvedUsers = [
        {
            country: "USA",
            email: "free-user@mail.ru",
            password: "qwe",
            phone: "213456",
            username: "free-user",
            sex: "male"
        },
        {
            country: "USA",
            email: "newUser@mail.ru",
            password: "1qzcqcw1zcassafsafqwq",
            phone: "213456",
            username: "newUser",
            sex: "female"
        },
        {
            country: "USA",
            email: "Jeff1219301@mail.ru",
            password: "Jeffreeasdlasdpq12312z",
            phone: "213456",
            username: "JeffreeFromDenver",
            sex: "male"
        }
    ]


    // Authorization

    let loginBlock = document.querySelector(".login-block");
    let modal = document.querySelector(".modal");

    let exitButton = document.querySelector(".header__nav-item.exit-input");

    let signUpSubmitButton = loginBlock.querySelector(".login-block__signup-btn");

    // Sets initial user info (Go to the function declaration for the details)
    setUser();

    loginBlock.addEventListener("submit", submitUserInfo.bind(event))

    // Submits user's info on submit event
    function submitUserInfo(e) {
        e.preventDefault()
        const rawData = new FormData(e.target)
        const data = Object.fromEntries(rawData.entries());
        let checkedFields = checkFormFields({
            username : data.username,
            email : data.email
        });

        // If all values are OK, then update local storage, set user's info and change the design of the web page. Reload it in the end
        if (checkedFields[0].newUsername && checkedFields[0].newEmail) {
            updateLocaleStorage(data);
            setUser();

            setTimeout(() => {
                loginBlock.classList.toggle("hidden");
                modal.classList.toggle("hidden");
                location.reload();
            }, 1500)
        }

        // Shows any pop up
        showPopUps(checkedFields);
    }

    // Sets user info on the current page
    function setUser() {
        let [username, email] = getUserData();
        if(username && email) {
            let usernameSpan = document.querySelector(".header-username");
            usernameSpan.innerHTML = username;

            let signUpButton = document.querySelector(".header__nav-item.sign-up");

            exitButton.classList.remove("hidden");
            signUpButton.classList.add("hidden")
        }
        else {
            exitButton.classList.add("hidden");
        }
    }

    // Get user data on the current page
    function getUserData() {
        const localUsername = localStorage.getItem("username");
        const localEmail = localStorage.getItem("e-mail");
        return [localUsername, localEmail];
    }

    // Set items in the locale storage
    function updateLocaleStorage(userInfo) {
        if(userInfo.email && userInfo.username) {
            localStorage.setItem("e-mail", userInfo.email);
            localStorage.setItem("username", userInfo.username);
        }
    }

    // Checks whether fields are new or not
    function checkFormFields(rest) {
        for(let user of approvedUsers) {
            if(user.username === rest.username || user.email === rest.email) {
                return [{
                    newUsername : user.username !== rest.username,
                    newEmail : user.email !== rest.email
                }];
            }
        }
        return [{
            newUsername : true,
            newEmail : true
        }];
    }

    // Shows different pop ups (successed or declined authorization)
    function showPopUps(checkedFields) {
        let popUpsList = document.querySelector(".pop-up__list");
        let createdPopUps = [];

        Object.values(checkedFields).forEach(field => {
            if(!field.newUsername) {
                let popUp = createPopUp("Such user already exists, pick another username", "declined", popUpsList);
                createdPopUps.push(popUp);
            }
            if(!field.newEmail) {
                let popUp = createPopUp("User with this email already exists, pick another email", "declined", popUpsList);
                createdPopUps.push(popUp);
            }
            if(field.newUsername && field.newEmail) {
                let popUp = createPopUp("New account has been successfully created", "successful", popUpsList);
                createdPopUps.push(popUp);
            }

            let deletePopUps = (popUpsList, createdPopUps, time) => {
                createdPopUps.forEach((popUp, index) => {
                    setTimeout(() => {
                        popUpsList.removeChild(popUp)
                    }, time + ((index + 1) * 1000))
                })
            }

            deletePopUps(popUpsList, createdPopUps, 1000);
        })
    }

    // Creates pop up
    function createPopUp(text, type = "successful", popUpsList) {
        let popUp = document.createElement("div");
        popUp.className = `pop-up ${type}`;

        let popUpWrapper = document.createElement("div");
        popUpWrapper.className = "pop-up__wrapper";

        let p = document.createElement("p");
        p.innerHTML = text;

        popUpWrapper.appendChild(p);
        popUp.appendChild(popUpWrapper);
        popUpsList.appendChild(popUp);

        return popUp;
    }

    let modalBom = document.querySelector(".modal-bom");
    let bomLink = document.querySelector(".header__nav-item.js-features");

    bomLink.addEventListener("click", function () {
        let wrapper = document.querySelector(".wrapper");
        let modal = document.querySelector(".modal");

        modal.classList.toggle("hidden");
        modalBom.classList.toggle("hidden")
        wrapper.classList.toggle("no-scroll");

    })

    exitButton.addEventListener("click", userLogOut);

    function userLogOut() {
        localStorage.removeItem("username");
        localStorage.removeItem("e-mail");
        location.reload();
    }

    let currentUrl = location.href;

    let currentUrlRow = document.querySelector(".row__current-url .current-url__value");
    currentUrlRow.innerHTML = currentUrl;
    currentUrlRow.setAttribute("href", currentUrl)

    let manageBack = document.querySelector(".modal-bom .manage-back");
    let manageForward = document.querySelector(".modal-bom .manage-forward");
    let manageBackClick = () => { history.back() };
    let manageForwardClick = () => { history.forward() };

    manageBack.addEventListener("click", manageBackClick);
    manageForward.addEventListener("click", manageForwardClick);

    document.cookie = "name=Jeff;";

    let urlNext = document.querySelector(".current-url__next");
    urlNext.addEventListener("click", () => { alert("You will be redirected to the next page")})

    let textArea = document.querySelector(".reply-block__textarea");

    // Receive the data of message text from session storage
    textArea.innerHTML = sessionStorage.getItem("messageText");

    // If user clicks oustide textarea, then typed data will be saved in the session storage
    // And next time will appear in the textarea
    textArea.addEventListener("blur", (e) => {

        sessionStorage.setItem("messageText", e.target.value);
    })

})

