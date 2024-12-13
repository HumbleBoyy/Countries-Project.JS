let elCountryList = document.querySelector(".list")
let elSelector = document.querySelector(".selector")
let elInput = document.querySelector(".search_icon")
let elLikedCount = document.querySelector(".like_count")
let elLikedCountWrapper = document.querySelector(".like_count_wrapper")
let elSavedCount = document.querySelector(".savedCount")
let elsaved_count_wrapper = document.querySelector(".saved_count_wrapper")
let elModalWrapper = document.querySelector(".modal_wrapper")
let innerModal = document.querySelector(".modal_inner")
let elAddBtn = document.querySelector(".add_btn")

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
               <button onclick="handleLikeBtn(${item.id})" class="${item.isLiked === true ? "bg-red-600 border-red-600 text-white" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"  title="Like">
                  <i class="fa-solid fa-heart text-xl"></i>
               </button>
                <button onclick="handleSavedBtn(${item.id})" class="${item.isBasket === true ? "bg-blue-600 border-blue-600 text-white" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center" title="Saved">
                  <i class="fa-solid fa-bookmark  text-xl"></i>
               </button>
                <button onclick="handleMoreBtn(${item.id})" class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center" title="Info">
                  <i class="fa-solid fa-info text-xl"></i>
               </button>
                <button onclick="handleDeleteBtn(${item.id})" class="w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center" title="Info">
                <i class="fa-solid fa-eraser text-xl"></i>
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


// Like buttons
function handleLikeBtn(id){
    const findLikedObj = countrys.find((item) => item.id === id)
    findLikedObj.isLiked = !findLikedObj.isLiked
    renderCountries(countrys, elCountryList)
    renderInfoCountry(findLikedObj)
    elLikedCount.textContent = countrys.filter(item => item.isLiked === true).length
    if(findLikedObj.isLiked === true){
        elLikedCountWrapper.className = "w-[40px] h-[40px] rounded-full border-[2px] border-red-600 bg-red-600 text-white flex items-center justify-evenly"
    }else{
        elLikedCountWrapper.className = "w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-evenly"
    }
}


// Show Liked Items
elLikedCountWrapper.addEventListener("click", ()=> {
    const likedItems = countrys.filter((item)=> item.isLiked === true)
    renderCountries(likedItems, elCountryList)
})
// Show Liked Items

// Like buttons


// Saved buttons
function handleSavedBtn(id){
    const findSavedObj = countrys.find((item) => item.id === id)
    findSavedObj.isBasket = !findSavedObj.isBasket
    renderCountries(countrys, elCountryList)
    renderInfoCountry(findSavedObj)
    elSavedCount.textContent = countrys.filter(item => item.isBasket === true).length
    if(findSavedObj.isBasket === true){
        elsaved_count_wrapper.className = "w-[40px] h-[40px] rounded-full border-[2px] border-blue-600 bg-blue-600 text-white flex items-center justify-evenly"
    }else{
        elsaved_count_wrapper.className = "w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-evenly"
    }
}

// Show Saved Items 
elsaved_count_wrapper.addEventListener("click", ()=> {
    const savedItems = countrys.filter((item)=> item.isBasket === true)
    renderCountries(savedItems, elCountryList)    
})
// Saved buttons


// Info Country 
function renderInfoCountry(obj){
    innerModal.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="w-[50%]">
         <img  src=${obj.flag} alt=${obj.name} width="100%" height="300"/>
      </div>
      <div class="w-[50%]">
           <div class="p-5"> 
           <h2 class="font-bold mb-2 text-[22px]">${obj.name}</h2>
           <p class="mb-2">Population: ${obj.population}</p>
           <p class="mb-2">Capital: ${obj.capital}</p>
         </div>
           <div class="flex items-center justify-evenly p-2">
             <button onclick="handleLikeBtn(${obj.id})" class="${obj.isLiked === true ? "bg-red-600 border-red-600 text-white" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center"  title="Like">
                <i class="fa-solid fa-heart text-xl"></i>
             </button>
              <button onclick="handleSavedBtn(${obj.id})" class="${obj.isBasket === true ? "bg-blue-600 border-blue-600 text-white" : ""} w-[40px] h-[40px] rounded-full border-[2px] border-black flex items-center justify-center" title="Saved">
                <i class="fa-solid fa-bookmark  text-xl"></i>
             </button>
         </div>
      </div>
    </div>
  `
}
function handleMoreBtn(id){
    elModalWrapper.classList.remove("scale-0")
    const infoCountry = countrys.find(item => item.id === id)
    renderInfoCountry(infoCountry)

}

elModalWrapper.addEventListener("click", (event)=> {
    if(event.target.id === "modal_wrapper_id"){
        elModalWrapper.classList.add("scale-0")
    }
})
// Info Country 


// Delete Btn
function handleDeleteBtn(id){
    const findDeleteIndex = countrys.findIndex(item => item.id === id)
    countrys.splice(findDeleteIndex, 1)
    renderCountries(countrys, elCountryList)
}


// Add Btn
elAddBtn.addEventListener("click", (event)=> {
    elModalWrapper.classList.remove("scale-0")

   innerModal.innerHTML = `
     <form class="add_form w-full">
        <input class="border-[2px] w-full mb-3 rounded-xl" placeholder="Enter country name" aria-label="Enter country name" name="countryName" required type="text"/>
        <input class="border-[2px] w-full mb-3 rounded-xl" placeholder="Enter country name" aria-label="Enter country capital name" name="capitalName" required type="text"/>
        <input class="border-[2px] w-full mb-1 rounded-xl" placeholder="Enter population" aria-label="Enter population" name="population" required type="number"/>

        <label class="cursor-pointer">
        <p class="text-green-600 mb-1 font-bold text-[1rem] underline">Choose file</p>
        <input class="file_input hidden" required type="file"/>
        </label>

        <button class="w-full bg-green-600 p-2 text-white font-bold rounded-md">Add Country</button>
     </form>
   `  

    let elAddCountryForm = document.querySelector(".add_form")
    let elFileInput = document.querySelector(".file_input")

    let imgSaveList = []

    elFileInput.addEventListener("change", (e)=> {
        imgSaveList.push(URL.createObjectURL(e.target.files[0]))
    })
    elAddCountryForm.addEventListener("submit", (event)=> {
        event.preventDefault()
        const data =  {
            id: countrys.length + 1,
            name: event.target.countryName.value,
            capital: event.target.capitalName.value,
            population: event.target.population.value,
            flag: imgSaveList[0],
            isLiked:false,
            isBasket:false
        }

        countrys.unshift(data)
        elModalWrapper.classList.add("scale-0")
        renderCountries(countrys, elCountryList)
    })
})

