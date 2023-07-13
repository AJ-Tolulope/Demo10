

function bodyScrollToggle(){
    document.body.classList.toggle("hidden-scrolling");
}



const filterContainer = document.querySelector('.filter'),
properties = document.querySelector('.property-item-cards'),
propertyItems = document.querySelectorAll('.property-card'),
closeBtn = document.querySelectorAll(".prop-card-close i");

// filter property items
filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");

        // activate new 'filter-items'
        event.target.classList.add("active");
        const target = event.target.getAttribute("data-target");
        propertyItems.forEach((item) =>{
            if (target === item.getAttribute("data-category") || target === "all"){
                item.classList.remove("hide");
                item.classList.add("show");

            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
})

properties.addEventListener("click", (event) =>{
    if(event.target.closest(".property-card-inner") && event.target.classList.contains("prop-img")){
        const property = event.target.closest(".property-card-inner").parentElement;

        // get the property index
        itemIndex = Array.from(property.parentElement.children).indexOf(property);

        if (propertyItems[itemIndex].querySelector(".purchase")) {
            propertyItems[itemIndex].querySelector(".purchase").classList.add("active");
        }

        closeBtn.forEach(btn => {
            btn.addEventListener("click", ()=>{
                propertyItems[itemIndex].querySelector(".purchase").classList.remove("active");
                bodyScrollToggle();
            })
        });

        bodyScrollToggle();

    }
})
