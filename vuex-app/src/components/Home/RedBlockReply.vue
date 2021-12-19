<template>
    <form action="" class="reply-block">
        <div class="reply-block__reply">
            <textarea class="reply-block__textarea" name="reply"></textarea>
        </div>
        <div class="reply-block__buttons">
            <input type="submit" class="reply-block__submit" value="Send">
            <input type="button" class="reply-block__save" value="Save draft">
            <div class="reply-block__select">
                <div class="reply-block__custom-date">
                    <label for="custom-date">Custom date</label>
                    <input type="checkbox" name="" id="custom-date">
                    <span class="checkmark"></span>
                </div>
                <div class="reply-block__calendar hidden">
                    <input type="datetime-local" name="" id="">
                </div>
            </div>
        </div>
    </form>
</template>

<style>
.reply-block {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.reply-block__reply {
  margin-top: 5px;
}

.reply-block__textarea {
  width: 100%;
  height: 45px;
  resize: none;
  font-family: Roboto, sans-serif;
  border-radius: 25px;
  padding: 5px 15px;
}

.reply-block__textarea:focus {
  outline: unset;
}

.reply-block__buttons {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  row-gap: 25px;
}

.reply-block__select {
  display: flex;
  flex-direction: row;
}

.reply-block__calendar.hidden {
  width: 0;
  opacity: 0;
  overflow-x: hidden;
}

.reply-block__calendar.hidden input {
  height: 0;
}

.reply-block__calendar {
  display: flex;
  flex: 1;
  transition: 1s all ease;
  overflow-x: hidden;
}

.reply-block__calendar input {
  border: unset;
  outline: unset;
  width: 100%;
  font-family: Roboto, sans-serif;
}

.reply-block__submit,
.reply-block__save {
  margin: 0 5px;
  height: 35px;
  background: linear-gradient(to left, lightcoral 50%, teal 50%) right;
  background-size: 210%;
  transition: 1s all ease-out;
  border: unset;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-family: Urbanist, sans-serif;
}

.reply-block__submit:hover,
.reply-block__save:hover {
  background-position: left;
}

.reply-block__custom-date {
  position: relative;
  display: flex;
  align-items: baseline;
}

.reply-block__custom-date label {
  align-self: center;
  margin-left: 5px;
  margin-right: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.reply-block__custom-date input {
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  opacity: 0;
}

.checkmark {
  height: 25px;
  width: 25px;
  background-color: tomato;
}

.reply-block__custom-date:hover input ~ .checkmark {
  background: #ccc;
}


.checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.reply-block__custom-date input:checked ~ .checkmark {
  background: teal;
}

.reply-block__custom-date input:checked ~ .checkmark::after {
  display: block;
}

.reply-block__custom-date .checkmark::after {
  right: 8px;
  top: 2px;
  width: 10px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (max-width: 930px) {
  .reply-block__select {
    flex-direction: column;
  }

  .reply-block__select {
    width: 130px;
  }

  .reply-block__custom-date {
    margin-bottom: 5px;
  }

  .reply-block__custom-date label {
    margin-right: 5px;
  }
}
</style>
