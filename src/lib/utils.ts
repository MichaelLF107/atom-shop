export function convertPrice(price: number) {
    const priceString = price.toString()
    const priceParts = priceString.split('.')
    if (priceParts.length === 1) {
        return `${priceString}.00`
    }
    if (priceParts.length === 2) {
        if (priceParts[1].length === 1) {
            return `${priceString}0`
        }
        if (priceParts[1].length === 2) {
            return priceString
        }
    }
    return '0.00'
}