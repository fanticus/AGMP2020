import { Subject } from 'rxjs';
import { Input, Directive, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl } from '@angular/forms';

@Directive()
export class AbstractFieldComponent implements ControlValueAccessor, OnDestroy {

    public value: any;

    @Input()
    public control: FormControl;
    @Input()
    public type: string;
    @Input()
    public title: string;
    @Input()
    public placeholder: string;

    protected unsubscribe$ = new Subject<void>();

    constructor() { }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public onChange: any = () => {};
    public onTouched: any = () => {};

    get isRequired(): boolean {
        if ( !this.control.validator ) {
            return false;
        }
        const validator = this.control.validator( {} as AbstractControl );
        return !!( validator && validator.required );
    }

    @Input()
    public writeValue( value: any ): void {
        this.value = value;
    }

    public registerOnChange( fn: any ): void {
        this.onChange = fn;
    }

    public registerOnTouched( fn: any ): void {
        this.onTouched = fn;
    }

    public updateValue( value: any ): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
    }
}
