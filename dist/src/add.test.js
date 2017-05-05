'use strict';

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('sum numbers', function () {

    expect((0, _add2.default)(3, 4)).toBe(7);
    expect((0, _add2.default)(3, 14)).toBe(17);
    expect((0, _add2.default)(23, 4)).toBe(27);
    expect((0, _add2.default)(33, 4)).toBe(37);
    expect((0, _add2.default)(3, 44)).toBe(47);
}); /**
     * Created by Walter on 2017/5/5.
     */
//# sourceMappingURL=add.test.js.map