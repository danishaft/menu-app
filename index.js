import { menuData } from "./data.js";

const container = document.getElementById('main-menu-container')
const navBtn = document.getElementById("btn-container")
const allBtn = navBtn.children

// render html
const renderHtml = param => {
    const html = param.map((item)=> {
        return `
        <article class="menu-item">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="menu-item-info">
                <div class="info-head">
                    <h4 class="item-name">${item.title}</h4>
                    <h4 class="item-price">$${item.price}</h4>
                </div>
                <p class="info-text">${item.desc}</p>
            </div>
        </article>`
    }).join('')
    return container.innerHTML = html
}

// filter menuData arr based the button clicked
for(let btn of allBtn){
    btn.addEventListener('click', (e)=> {
        const target = e.target.dataset.id
        const categoryItem = menuData.filter((item)=>{
            return item.category === target
        })
        if(target === 'all'){
            renderHtml(menuData)
        }else{
            renderHtml(categoryItem)
        }
    })
}

renderHtml(menuData)