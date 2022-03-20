/*const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((e) => {
    let attVal = e.getAttribute('data-target');
    counterFunc();
    function counterFunc(){
        for(let i = 0; i <= attVal; i++ ){
            document.write(i);
        }
    }
})
*/

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})



