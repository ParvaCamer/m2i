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

    }
}