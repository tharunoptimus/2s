if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((reg) => {
                console.debug('Success: ', reg.scope)
                if(localStorage.getItem("offline") != null) return
                localStorage.setItem("offline", "true")
                stat("This page can now run offline!")
            })
            .catch((err) => console.debug('Failure: ', err))
    })
}