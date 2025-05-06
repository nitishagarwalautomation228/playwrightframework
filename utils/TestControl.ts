import * as fs from 'fs';


interface TestRun {
    testCaseName: string;
    run: boolean;
    data: { [key: string]: string };  
}



export class TestRunner {
    data:any;    
    position:number= 0;
    constructor(){
        const file = fs.readFileSync("C:\\Nitish\\Playwright Framework\\datasources\\TestControl.json", "utf-8");
        this.data = JSON.parse(file);
    }

    public shouldRun(testCaseName:string):boolean{
        for (let index = 0; index < this.data.length; index++) {
            const element = this.data[index];
            if(element.testCaseName == testCaseName){
                this.position=index;
                return element.run;
            }
        }
        return false;
    }

    public getTestCaseName():any{
        return this.data[this.position]["testCaseName"];
    }

    public getTestData(data:string):string{
        let Storage= this.data[this.position]["data"];
        return Storage[data] ?? "";
    }
}