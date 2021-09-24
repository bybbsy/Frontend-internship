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
        throw ex;
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

})