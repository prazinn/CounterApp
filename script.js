let count = 0;

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

function updateCount() {
    document.getElementById('count').innerText = count;
}
