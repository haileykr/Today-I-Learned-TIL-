const marketItem = {
    productName: 'soup',
    price: 3.99,
    fullInfo1: function() {
        return `${this.productName} +${this.price}`
    },
    // this works as expected
    fullInfo2: () => {
        return `${this.productName} +${this.price}`
    },
    // this does not, because the keyword "this" here refers to window, the scope that the function is created
    shoutName: function () {
        setTimeout(function() {
            console.log(this.fullInfo())
        },  2000)
    },
    // this does not work neither, because setTimeout is a window function
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullInfo())
        }, 3000)
    }
    // this works as expected, because the keyword "this" inside setTimeout is the same as the keyword "this" in the function above
}