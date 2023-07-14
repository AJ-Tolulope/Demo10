

function bodyScrollToggle(){
    document.body.classList.toggle("hidden-scrolling");
    console.log('clicked btn')
}



const filterContainer = document.querySelector('.filter'),
properties = document.querySelector('.property-item-cards'),
propertyItems = document.querySelectorAll('.property-card'),
closeBtn = document.querySelector(".popup-close .back-btn"),
propertyPopups = document.querySelector(".property-popups");

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

        console.log('image clicked ' + property)

        // get the property index
        itemIndex = Array.from(property.parentElement.children).indexOf(property);

        if (propertyItems[itemIndex].querySelector(".purchase")) {
            const purchaseContent = propertyItems[itemIndex].querySelector(".purchase").innerHTML;

            propertyPopups.querySelector(".main-popup").innerHTML = purchaseContent;
            propertyPopups.classList.toggle("active");
        }
        bodyScrollToggle();

    }
})

closeBtn.addEventListener("click", ()=>{
    propertyPopups.classList.toggle("active")

    bodyScrollToggle();
});












