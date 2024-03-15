import moment from "moment-timezone";
import { BaseHandler } from "../common/handler";
import { BaseArguments } from "../common/interfaces/base-arguments";

export class DateParser extends BaseHandler<BaseArguments> {
    run(): void {
        console.log("Date Parser");
        const momentDate = moment(new Date());
        console.log("momentDate", momentDate);
                
    }
}

const parser = new DateParser();

parser.execute();
