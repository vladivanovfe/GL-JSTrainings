function some(array, test) {
    for (i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}

function every(array, test) {
    for (i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}
