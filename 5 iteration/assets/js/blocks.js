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

    function getObjectSize(object) {
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

        modal.classList.toggle("hidden")
        wrapper.classList.toggle("no-scroll");

        let decline_btn = modal.querySelector(".login-block__decline-btn");
        decline_btn.addEventListener("click", () => {
            modal.classList.add("hidden");
            wrapper.classList.remove("no-scroll");
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

    let count_of_spam = 0;
    let count_of_new = 0;

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
            return false;
        }
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

            if (spam) {
                var msg = new SpamMessage({
                    author,
                    content,
                    date,
                    selector
                })
            }
            else {
                var msg = new Message({
                    author,
                    content,
                    date,
                    selector
                })
            }

            classes.push(msg)
        })
        console.log(classes)
    }

    processMessages(block_messages);

    let extra_info = `${count_of_spam} spam ${plural(count_of_spam)}\n${count_of_new} new ${plural(count_of_new)}`;

    console.log(extra_info);

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

})

