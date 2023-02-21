import { Injectable } from '@rxdi/core';
import { Observable, of } from 'rxjs';

import { PaymentProvidersEntries } from './providers';

@Injectable()
export class ApiService {
  getProviders(): Observable<typeof PaymentProvidersEntries> {
    return of(PaymentProvidersEntries);
  }
}
