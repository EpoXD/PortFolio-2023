let linkPage1 = document.querySelector(`a[href="#page-1"]`) as HTMLDivElement


linkPage1.addEventListener("click", function(e : Event) {
    e.preventDefault();

    
    let page2Top = document.getElementById(`page-1`)?.getBoundingClientRect().top ||     0
    
    
    window.scrollBy({
        top: page2Top - 50,
        left: 0,
        behavior: `smooth`
    })
})


let linkPage2 = document.querySelector(`a[href="#page-2"]`) as HTMLDivElement


linkPage2.addEventListener("click", function(e : Event) {
    e.preventDefault();

    
    let page2Top = document.getElementById(`page-2`)?.getBoundingClientRect().top ||     0
    
    
    window.scrollBy({
        top: page2Top - 50,
        left: 0,
        behavior: `smooth`
    })
})


let linkPage3 = document.querySelector(`a[href="#page-3"]`) as HTMLDivElement


linkPage3.addEventListener("click", function(e : Event) {
    e.preventDefault();

    
    let page2Top = document.getElementById(`page-3`)?.getBoundingClientRect().top ||     0
    
    
    window.scrollBy({
        top: page2Top - 50,
        left: 0,
        behavior: `smooth`
    })
})


let linkPage4 = document.querySelector(`a[href="#page-4"]`) as HTMLDivElement


linkPage4.addEventListener("click", function(e : Event) {
    e.preventDefault();

    
    let page2Top = document.getElementById(`page-4`)?.getBoundingClientRect().top ||     0
    
    
    window.scrollBy({
        top: page2Top - 50,
        left: 0,
        behavior: `smooth`
    })    
})    


