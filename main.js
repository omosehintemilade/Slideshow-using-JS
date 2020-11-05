let container = document.getElementsByClassName('container')
n = 0
container[n].style.display = 'block'

function slideLeft() {
    if (n == 0) {
        n += 2
        container[n].style.display = 'block'
        container[0].style.display = 'none'
    } else {
        n--
        container[n].style.display = 'block'
        container[n + 1].style.display = 'none'
    }



}

function slideRight() {
    // console.log(n, container.length - 1);
    if (n >= container.length - 1) {
        n = 0
        container[0].style.display = 'block'
        container[n + 1].style.display = 'none'
        container[n + 2].style.display = 'none'
    } else {
        n++
        container[n].style.display = 'block'
        container[n - 1].style.display = 'none'
        container[0].style.display = 'none'

    }
}