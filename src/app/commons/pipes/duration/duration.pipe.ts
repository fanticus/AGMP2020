import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform( value: number ): string {
        return this.getDuration( value );
    }

    private getDuration( value: number ): string {
        if ( !this.checkNumber( value ) ) {
            return '--';
        }
        const hours: number = Math.floor( value / 60 );
        const minutes: number = value % 60;
        return `${ this.getHours( hours ) }
            ${ this.getMinutes( minutes ) }`;
    }

    private getHours( hours: number ): string {
        return hours ? `${ hours }h ` : '';
    }

    private getMinutes( value: number ): string {
        const minutes: string | number = value < 10 ? `0${ value }` : value;
        return `${ minutes }min`;
    }

    private checkNumber( value: number ): boolean {
        return value >= 0 && value < ( 60 * 24 );
    }
}
