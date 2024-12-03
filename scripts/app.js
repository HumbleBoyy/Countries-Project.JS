let elCountryList = document.querySelector(".list")
let elSelector = document.querySelector(".selector")
let elInput = document.querySelector(".search_icon")


// Render countries Part
function renderCountries(arr, list){ 
    list.innerHTML = null
     arr.map(item => {
        let elCountryItem = document.createElement("li")
        elCountryItem.className = "w-[264px] rounded-md overflow-hidden bg-slate-200 mt-4"
        elCountryItem.innerHTML = `
           <img class="w-full h-[160px] object-cover" src=${item.flag} width="100" height="160" alt=${item.name}/>
           <div class="p-5"> 
             <h2 class="font-bold mb-2 text-[22px]">${item.name}</h2>
             <p class="mb-2">Population: ${item.population}</p>
             <p class="mb-2">Capital: ${item.capital}</p>
           </div>
           
           <div class="flex items-center justify-between p-2">
               <button class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center">
                  <img src="./images/like.svg" alt="Like" width="25">
               </button>
                <button class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center">
                  <img src="./images/saved.svg" alt="Like" width="25">
               </button>
                <button class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center">
                  <img src="./images/more.svg" alt="Like" width="25">
               </button>
           </div>
        `

        list.append(elCountryItem)
     })
}

renderCountries(countrys, elCountryList)
// Render countries Part


// Render Select Part
function renderSelecPart(arr, list){
   arr.forEach((item)=> {
        let elOption = document.createElement("option")
        elOption.textContent = item.capital
        elOption.value = item.capital.toLowerCase()
        list.append(elOption)
   })
}

renderSelecPart(countrys, elSelector)

elSelector.addEventListener("change", (event)=> {
    
    if(event.target.value === "all"){
        renderCountries(countrys, elCountryList)
    }else{
        const result = countrys.filter(item => item.capital.toLowerCase() === event.target.value)
        renderCountries(result, elCountryList)
    }
})
// Render Select Part


// Search Part
elInput.addEventListener("input", (event)=> {
    const value = event.target.value.toLowerCase()
    const searchedValue = countrys.filter(item => item.name.toLowerCase().includes(value) || item.capital.toLowerCase().includes(value))
    renderCountries(searchedValue, elCountryList)
})
// Search Part