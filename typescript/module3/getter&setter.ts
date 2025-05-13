{
    //getter and setter

    
        class BankAccount  {
            public readonly id: number;
            public name:string;
            // private _balance:number;
            protected _balance:number;
    
    
    
            constructor (id:number,name:string,balance:number){
                this.id = id;
                this.name = name;
                this._balance = balance
            }
    
            // addDeposit (amount: number){
            //     this._balance = this._balance + amount
            // }
            // getBalance (){
            //     return this._balance
            // }

            //setter
            set deposit (amount: number){
                this._balance = this._balance + amount
            }

            //getter
            get balance (){
                return this._balance
            }


        
        }
    
        const accountNo1 = new BankAccount(111,"Mr.X", 2300)
        // accountNo1.addDeposit(300)
        // const myBalance = accountNo1.getBalance()
        accountNo1.deposit = 500

        const myBalance = accountNo1.balance
        console.log(myBalance);
        
        
    
        
    
}