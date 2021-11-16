export class Question {

    token: string;
    questionType: string;
    questionAsk: string;
    questionAnswer: string;

    constructor(
        token: string,questionType: string,questionAsk: string, questionAnswer: string) {
        
            this.token=token;
            this.questionType=questionType;
            this.questionAsk=questionAsk;
            this.questionAnswer=questionAnswer;
    }





}