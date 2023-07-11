class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(percent) {
        const discountAmount = this.price * (percent / 100)
        return this.price - discountAmount
    }
}

const product = new Product('Tênis', ' Hocks cinza', 220.00)

product.addToStock(20)

const discountedPrice = product.calculateDiscount(15)

console.log(product)
console.log('Preço com desconto:', discountedPrice)

