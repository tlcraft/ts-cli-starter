import moment from 'moment-timezone';
import { BaseHandler } from '../../common/handlers/base-handler';
import { BaseArguments } from '../../common/interfaces/base-arguments.interface';

export class DateParser extends BaseHandler<BaseArguments> {
    run(): void {
        console.log('Date Parser');
        const momentCurrentDate = moment(new Date());
        console.log('momentCurrentDate', momentCurrentDate);

        const eastern = moment.tz(momentCurrentDate, 'America/New_York');
        console.log('eastern', eastern);

        const dateString = '03/16/2024, 00:00:00';
        const momentFromDateString = moment(dateString, 'MM/DD/YYYY, HH:mm:ss').tz('America/New_York');
        console.log('momentFromDateString', momentFromDateString);

        moment.tz.setDefault('America/New_York');
        const momentWithDefaultFromDateString = moment(dateString, 'MM/DD/YYYY, HH:mm:ss');
        console.log('momentWithDefaultFromDateString', momentWithDefaultFromDateString);
    }
}

const parser = new DateParser();

parser.execute();
