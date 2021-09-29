document.addEventListener("DOMContentLoaded", () => {
    let messages = new Object;

    function recieveMessageInfo(block_messages) {
        block_messages.forEach((message, index) => {
            let author = message.querySelector(".messages-list__message-author h5").innerHTML;
            let content = message.querySelector(".messages-list__message-brief p").innerHTML;
            let date = message.querySelector(".messages-list__message-date p").innerHTML;

            messages[index] = {
                author,
                content,
                date
            }
        })
    } 
    console.log(messages);
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

    let count = getObjectSize(messages).toString();

    // Экранизация
    let plural = count.match(/^1$/) ? "message" : "messages";
    let even = count % 2 === 0 ? "even" : "odd";

    // Шаблонизация
    let show_info = `You've got ${count} ${plural}.(${even} amount)\n`;
     
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
    
    // Arrow function with single param
    // let get_js_link_inner = jslink => ajslink.querySelector("spanas");
    
    // try {
    //     let inner = get_js_link_inner(javascript_link);
    //     console.log(inner)
    // }
    // catch (e) {
    //     if(e instanceof TypeError) {
    //         console.log("❌TypeError: ->", e.message);
    //     } else {
    //         throw UndefError(e);
    //     }
    // }

    function UndefError(e) {
        let error = new Error();
        return `Some unexpected error has occured\nname:${e.name}\ncause:${e.message}\nstack:${e.stack}`;
    }
    // console.log(inner)

    // document.addEventListener("click", (e) => {
    //     console.log("DOCUMENT: ", e.target)
    // }, true)
    // javascript_link.addEventListener("click", (e) => {
    //     console.log("BADGE: ", e.target)
    // }, true)

    // inner.addEventListener("click", (e) => {
    //     console.log("LINK: ", e.target)
    // }, true)
})

