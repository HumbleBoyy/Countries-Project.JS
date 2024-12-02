let elCountryList = document.querySelector(".list")




function renderCountries(arr, list){
     
     
     
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