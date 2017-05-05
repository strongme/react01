/**
 * Created by Walter on 2017/5/5.
 */

import add from './add';

it('sum numbers', () => {

    expect(add(3, 4)).toBe(7);
    expect(add(3, 14)).toBe(17);
    expect(add(23, 4)).toBe(27);
    expect(add(33, 4)).toBe(37);
    expect(add(3, 44)).toBe(47);

});