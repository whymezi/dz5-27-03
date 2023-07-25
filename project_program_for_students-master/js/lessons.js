// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

const clickContent = () => {
    tabsParent.onclick = (event) => {
        if (event.target.classList.contains('tab_content_item')) {
            tabs.forEach((item, i) => {
                if (event.target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    }
}
setTimeout(clickContent, 1000)

//CONVERTER

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (currency, targetInput, targetInput2, istrue) => {
    currency.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../json/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (istrue) {
                targetInput.value = (currency.value / response.euro).toFixed(2)
                targetInput2.value = (currency.value / response.usd).toFixed(2)
            }else if (currency === euro) {
                targetInput.value = (currency.value * response.euro).toFixed(2)
                targetInput2.value = (currency.value / response.usd).toFixed(2)
            }else if (currency === usd) {
                targetInput2.value = (currency.value * response.usd).toFixed(2)
                targetInput.value = (currency.value * response.euro).toFixed(2)
            }
            currency.value === '' && (targetInput.value = '')
            currency.value === '' && (targetInput2.value = '')
        }
    }
}

convert(som, euro, usd, true)
convert(euro, som, usd, true)
convert(usd, som, euro, true)
