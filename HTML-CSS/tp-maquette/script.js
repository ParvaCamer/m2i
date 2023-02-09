function sendValue(value, id) {
    switch (value) {
        case 'color':
            document.getElementById(id).onchange = function () {
                switch (id) {
                    case 'color-background':
                        document.body.style.background = this.value;
                        break;
                    case 'color-title':
                        document.getElementById('main-title').style.color = this.value;
                        break;
                    case 'color-text':
                        document.getElementById('para-text').style.color = this.value;
                        break;
                }
            }
            break;
        case 'write-text':
            document.getElementById('para-text').innerHTML = document.getElementById('textarea').value;
            break;
        case 'number':
            document.getElementById(id).onchange = function () {
                switch (id) {
                    case 'size-title':
                        let title = +this.value + 36;
                        document.getElementById('main-title').style.fontSize = `${title}px`;
                        break;
                    case 'size-text':
                        let text = +this.value + 36;
                        document.getElementById('para-text').style.fontSize = `${text}px`
                        break;
                }
            }
            break;
        case 'align':
            let selectAlign = document.getElementById(id);
            selectAlign.onchange = function () {
                switch (id) {
                    case 'align-title':
                        document.getElementById('main-title').style.textAlign = selectAlign.options[selectAlign.selectedIndex].value;
                        break;
                    case 'align-text':
                        document.getElementById('para-text').style.textAlign = selectAlign.options[selectAlign.selectedIndex].value;
                        break;
                }
            };
            break;
        case 'font':
            let selectFont = document.getElementById(id);
            selectFont.onchange = function () {
                switch (id) {
                    case 'font-title':
                        document.getElementById('main-title').style.fontFamily = selectFont.options[selectFont.selectedIndex].value;
                        break;
                    case 'font-text':
                        document.getElementById('para-text').style.fontFamily = selectFont.options[selectFont.selectedIndex].value;
                        break;
                }
            }
            break;
        case 'url':
            let picture = document.getElementById('picture');
            let value = document.getElementById('input-image');
            console.log(picture)
            console.log(value)
            picture.src = value.value;
            break;
        case 'resize':
            let paraTitle = document.getElementById('para-title');
            let paraText = document.getElementById('para-text');
            let sizeValueTitle = window.getComputedStyle(paraTitle).fontSize;
            let sizeValueText = window.getComputedStyle(paraText).fontSize;
            sizeValueTitle = parseFloat(sizeValueTitle.slice(0, -2));
            sizeValueText = parseFloat(sizeValueText.slice(0, -2));
            sizeValueTitle += id;
            sizeValueText += id;
            paraTitle.style.fontSize = `${sizeValueTitle}px`;
            paraText.style.fontSize = `${sizeValueText}px`;
            break;
    }
}