export function configureSpy(obj: any, methodName: string, returnValue: any = null): jasmine.Spy {
  obj[methodName] = jasmine.createSpy(methodName).and.returnValue(returnValue);
  return obj[methodName];
}
