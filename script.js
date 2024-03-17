const menu = document.querySelectorAll('.menu')
const imgWrapper = document.querySelector('.img-wrapper')
const textSpan = document.querySelector('.title-span')
const paragraph = document.querySelector('.paragraph')
const price = document.querySelector('.price')

const list = {
    sandwich: {
        price: '15K',
        description: 'The chicken sandwich offers delicious pieces of chicken in a bun, accompanied by signature sauce and fresh vegetables. Each bite provides a satisfying combination of flavors, suitable as a quick meal that is healthy and nutritious for everyone.'
    },

    burger: {
        price: '20K',
        description: 'Chicken burger offers the savory taste of crispy chicken meat, served in soft burger buns. Enriched with melted cheese, special sauce and fresh vegetables for a satisfying and nutritious eating experience. Suitable to enjoy at any time, serving deliciousness in every bite.'
    },

    grill: {
        price: '25K',
        description: 'Grilled chicken offers a satisfying eating experience with the delicious taste of grilled chicken meat. Served perfectly, the texture is crispy on the outside and soft on the inside. Suitable as a healthy and nutritious meal option that can be enjoyed at any time.'
    },

    fried: {
        price: '25K',
        description: 'Fried chicken offers a savory and crunchy taste from perfectly fried chicken meat. Every bite provides an unforgettable pleasure with a texture that is crispy on the outside and juicy on the inside. Suitable to be enjoyed as a satisfying and appetizing main dish.'
    },

    kebab: {
        price: '17K',
        description: 'Chicken kebab tempts with perfectly grilled chicken meat, served with soft bread, fresh vegetables and special sauce. Every bite offers a compelling authentic taste, perfect for a healthy and satisfying meal, providing an unforgettable culinary experience.'
    }
}

function checkIsTrue(){
    menu.forEach((item) => {
        var name = item.getAttribute('name')
        var itemId = item.getAttribute('id')
        if(textSpan.innerHTML == `Its ${name}`){            
            item.style.opacity = '1'
            paragraph.innerHTML = list[`${itemId}`].description
            price.innerHTML = list[`${itemId}`].price
        }else{
            item.style.opacity = '0.5'
        }
    })

}

checkIsTrue()

menu.forEach((item) => item.addEventListener('click', () => {        
    var name = item.getAttribute('name')
    imgWrapper.innerHTML = item.innerHTML
    textSpan.innerHTML = `Its ${name}`
    checkIsTrue()
}))
