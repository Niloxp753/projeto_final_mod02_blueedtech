
    let toggle = false
    const img = document.querySelector(".btn_modal")
    const nav = document.querySelector(".menu-items")
    const main = document.querySelector("main")
    
    img.addEventListener('click', () => {
        handleModal()
        if (toggle) {
            main.style.opacity = '0.5'
            nav.style.display = 'block'
            nav.style.zIndex = '1'
            img.style.zIndex = '2'
        } else {
            nav.style.display = 'none'
            main.style.opacity = '1'
        }
    })

    function handleModal() {
        toggle = !toggle
        
    }
