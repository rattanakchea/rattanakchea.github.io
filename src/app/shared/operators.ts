import { Observable, Subject, defer } from 'rxjs';
import { delay, finalize, map } from 'rxjs/operators';

export const prepare = <T>(callback: () => void) => {
  return (source: Observable<T>): Observable<T> =>
    defer(() => {
      callback();
      return source;
    });
};

export const indicate = <T>(indicator: Subject<boolean>) => {
  return (source: Observable<T>): Observable<T> =>
    source.pipe(
      prepare(() => indicator.next(true)),
      finalize(() => indicator.next(false))
    );
};

export const toClass =
  <T>(ClassType: { new (): T }) =>
  (source: Observable<T>) =>
    source.pipe(map((val) => Object.assign(new ClassType(), val)));
