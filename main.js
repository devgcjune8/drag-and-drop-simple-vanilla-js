const FILLED_BOX = document.querySelector('.fill');
const EMPTY_BOXES = document.querySelectorAll('.empty');

FILLED_BOX.addEventListener('dragstart', dragStart);
FILLED_BOX.addEventListener('dragend', dragEnd);

for(const EMPTY_BOX of EMPTY_BOXES) {
    EMPTY_BOX.addEventListener('dragover', dragOver);
    EMPTY_BOX.addEventListener('dragenter', dragEnter);
    EMPTY_BOX.addEventListener('dragleave', dragLeave);
    EMPTY_BOX.addEventListener('drop', dragNDrop)
}

function dragStart() {
    this.className += ' dragging';
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.className += ' hovering';
}

function dragLeave() {
    this.className = 'empty';
}

function dragNDrop() {
    this.className = 'empty';
    this.append(FILLED_BOX)
}