import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
    private subject = new Subject<any>();

    update(message: string) {
        this.subject.next({ text: message });
    }

    get(): Observable<any> {
        return this.subject.asObservable();
    }
}
