 /*
You need to design a Vending Machine which
Accepts coins of 1,5,10,25 Cents i.e. penny, nickel, dime, and quarter.
Allow user to select products Coke(25), Pepsi(35), Sprite(45)
Refund the user if they cancel the request. Cancellation can only happen before product is disbursed.
Upon purchase, disburse the selected product and remaining change if any
Allow reset operation for vending machine supplier.
*/

// Requirements = new instance 
// vendingMachine()
// insertCoin(10)
// selectProduct('coke')
// cancelRequest()

class VendingMachines{
    constructor(){
        this.products =[
            {name:'Coke' , price:25},
            {name:'Pepsi' , price:35},
            {name:'Sprite' , price:45}
        ]
        this.coins = [1,5,10,25]
        this.currentAmount = 0
        this.selectedProduct = null 
    }
    
    insertCoin(coin) {
        if(this.coins.includes(coin)){
            this.currentAmount += coin 
        }
        else {
            console.log("we can't accept this coin")
        }
    }
    dispatchChanges(change){
        const result = []
        for(let coin of this.coins ){
            while(change >= coin){
                result.push(coin)
                change -= coin 
            }
        }
        console.log(`need to dispatch this amount of coins ${result}`)
        return result 
    }

    selectProduct(productName){
        const product = this.products.find(p => p.name === productName)
        
        if(product){
            if(this.currentAmount >= product.price){
                this.selectProduct = product
                const change = this.currentAmount - product.price 
                // 
                this.dispatchChanges(change)
                 console.log(`your product is selected and this is the change you get ${change} `)
                
            }
            else{
                console.log("your fund is not enough to purchase this product ")
            }

        }
        else{
            console.log("wrong selection")
        }
    }

    cancelRes
    this.reset

   


}