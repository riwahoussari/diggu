const navContainer = document.querySelector('.navContainer')
const menusContainer = document.querySelector('.menusContainer')
const pizzaMenu = document.querySelector('.pizzaMenu')
const pastaMenu = document.querySelector('.pastaMenu')
const sideMenu = document.querySelector('.sideMenu')
const saladMenu = document.querySelector('.saladMenu')
const drinkMenu = document.querySelector('.drinkMenu')
const dessertMenu = document.querySelector('.dessertMenu')
const pizza = document.querySelector('.pizza')
const pasta = document.querySelector('.pasta')
const side = document.querySelector('.side')
const salad = document.querySelector('.salad')
const drink = document.querySelector('.drink')
const dessert = document.querySelector('.dessert')
const pizzaButton = document.querySelector('.pizzaMenu .button')
const pastaButton = document.querySelector('.pastaMenu .button')
const sideButton = document.querySelector('.sideMenu .button')
const saladButton = document.querySelector('.saladMenu .button')
const drinkButton = document.querySelector('.drinkMenu .button')
const dessertButton = document.querySelector('.dessertMenu .button')

pizza.addEventListener('click' , () => {
    pizzaMenu.style.display = 'flex'
    menusContainer.style.height = `${pizzaMenu.clientHeight}px`
    window.addEventListener('resize' , ()=>{
        menusContainer.style.height = `${pizzaMenu.clientHeight}px`
    })
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(pizzaButton)
    pizzaButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                pizzaMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
function adjustHeight(menu){
    menusContainer.style.height = `${menu.clientHeight}px`
}
pasta.addEventListener('click' , () => {
    pastaMenu.style.display = 'flex'
    menusContainer.style.height = `${pastaMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(pastaButton)
    pastaButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                pastaMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
side.addEventListener('click' , () => {
    sideMenu.style.display = 'flex'
    menusContainer.style.height = `${sideMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(sideButton)
    sideButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                sideMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
salad.addEventListener('click' , () => {
    saladMenu.style.display = 'flex'
    menusContainer.style.height = `${saladMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(saladButton)
    saladButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                saladMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
drink.addEventListener('click' , () => {
    drinkMenu.style.display = 'flex'
    menusContainer.style.height = `${drinkMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(drinkButton)
    drinkButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                drinkMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
dessert.addEventListener('click' , () => {
    dessertMenu.style.display = 'flex'
    menusContainer.style.height = `${dessertMenu.clientHeight}px`
    menusContainer.style.transform = 'none'
    navContainer.style.transform = 'translateX(-100%)'
    console.log(dessertButton)
    dessertButton.addEventListener('click', ()=>{
        setTimeout(() => {
            menusContainer.style.transform = "translateX(100%)"
            navContainer.style.transform = 'none'
            setTimeout(()=>{
                dessertMenu.style.display = 'none'
                menusContainer.style.height = '0'
            }, 500)
        }, 1 );
        
    })
})
