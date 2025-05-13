{
    // Encaptulation in OOP

    class BankAccount  {
        public readonly id: number;
        public name:string;
        // private _balance:number;
        private _balance:number;



        constructor (id:number,name:string,balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        addDeposit (amount: number){
            this._balance = this._balance + amount
        }
        getBalance (){
            return this._balance
        }
    }

    const accountNo1 = new BankAccount(111,"Mr.X", 2300)
    accountNo1.addDeposit(300)
    const myBalance = accountNo1.getBalance()
    console.log(myBalance);
    
    
    

    
}