try {
    const a = 1;
    if (a == 0) {
        throw 'abc'
    } else {
        throw 123
    }
} catch (e) {
    console.log(e)
}