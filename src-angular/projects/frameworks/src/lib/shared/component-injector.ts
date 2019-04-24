import { Injector, Type, InjectionToken, InjectFlags } from '@angular/core';

export class ComponentInjector implements Injector {
  constructor(private _parentInjector: Injector, private _additionalTokens: WeakMap<any, any>) {}

  get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T;

  get(token: any, notFoundValue?: any);

  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this._additionalTokens.get(token);
    return value ? value : this._parentInjector.get<any>(token, notFoundValue);
  }
}
