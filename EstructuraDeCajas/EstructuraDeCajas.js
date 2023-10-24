
var accordionButtons = document.querySelectorAll(".accordion-btn");
accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


// Función para aumentar la cantidad
function increaseQuantity(articleId) {
    const quantityInput = document.getElementById(`quantity${articleId}`);
    const currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

// Función para disminuir la cantidad
function decreaseQuantity(articleId) {
    const quantityInput = document.getElementById(`quantity${articleId}`);
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

Array.from = Array.from || function (a) {
    return Array.prototype.slice.call(a);
};

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

class Slider {
    constructor(element) {
        this.element = element;
        this.animation = {};
        this.reset();

        let dragging = false;
        let pointer = {
            start: 0,
            last: 0,
        };
        let offset = 0;
        let time = 0;

        const startDrag = (e) => {
            this.animation.playing = false;
            dragging = true;
            pointer.start = e.touches ? e.touches[0].pageX : e.pageX;
            pointer.last = e.touches ? e.touches[0].pageX : e.pageX;
            offset = this.offset;
            time = Date.now();
        };

        const drag = (e) => {
            if (!dragging) return;
            pointer.last = (e.touches ? e.touches[0].pageX : e.pageX);
            this.move(offset + pointer.last - pointer.start);
            e.preventDefault();
        };

        const release = (e) => {
            if (!dragging) return;
            dragging = false;

            const delta = pointer.last - pointer.start;
            if (delta === 0) return;

            const distance = Math.abs(delta);
            const velocity = distance / (Date.now() - time);

            if (velocity > 0.5) {
                if (delta < 0) {
                    this.next();
                } else {
                    this.prev();
                }
            } else {
                this.snap(this.offset);
            }
            e.preventDefault();
        };

        element.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        element.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', release);

        element.addEventListener('touchstart', startDrag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', release);
    }

    reset() {
        this.contents = Array.from(this.element.children);
        this.pivot = this.contents[0];
        this.visible = 3;
        this.width = this.element.clientWidth;;
        this.contents.width = this.width / this.visible;
        this.pace = 1;
        this.offset = 0;
        this.animation.playing = false;
        this.animation.duration = 300;

        const extras = this.element.querySelectorAll('[extra]');
        Array.from(extras).forEach((element) => element.remove());
        for (let i = 0; i < this.visible; i++) {
            const extra = this.contents[i].cloneNode(true);
            extra.setAttribute('extra', '');
            this.element.appendChild(extra);
        }
    }

    slide(value) {
        const offset = this.offset;
        const delta = value - offset;
        const start = Date.now();

        const update = _ => {
            const time = (Date.now() - start) / this.animation.duration;

            if (time < 1) {
                this.move(offset + easeInOutQuad(time) * delta);
            } else {
                this.animation.playing = false;
                this.move(value);
            }

            if (this.animation.playing) requestAnimationFrame(update);
        };

        this.animation.playing = false;
        requestAnimationFrame(_ => {
            this.animation.playing = true;
            update();
        });
    }

    snap(offset) {
        if (offset % this.contents.width != 0) {
            offset = Math.round(offset / this.contents.width) * this.contents.width;
        }
        this.slide(offset);
    }

    move(offset) {
        if (offset > 0) {
            offset = offset - this.contents.width * this.contents.length;
        } else if (offset < this.contents.width * this.contents.length * -1) {
            offset = offset + this.contents.width * this.contents.length;
        }
        this.offset = Math.round(offset);
        this.pivot.style.marginLeft = `${this.offset}px`;
    }

    next() {
        this.snap(this.offset - this.pace * this.contents.width);
    }

    prev() {
        this.snap(this.offset + this.pace * this.contents.width);
    }
}

const slider = new Slider(document.querySelector('.slider'));

document.querySelector('.prev').addEventListener('click', (e) => slider.prev());
document.querySelector('.next').addEventListener('click', (e) => slider.next());


