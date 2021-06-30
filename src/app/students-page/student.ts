import { Marks } from "./marks";

export class Student {
    constructor(public id: number,public name: string, public address: string, public email: string, public imgUrl: string, public marks: Marks){

    }

}