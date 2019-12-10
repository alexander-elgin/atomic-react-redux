/* eslint-disable */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;

var _printValue = _interopRequireDefault(require("yup/lib/util/printValue"));

var mixed = {
  default: 'Поле ${path} имеет некорректное значение',
  required: 'Поле ${path} не может быть пустым',
  oneOf: 'Значение поля ${path} должно быть одним из следующих значений: ${values}',
  notOneOf: 'Значение поля ${path} не может быть ни одним из следующих значений: ${values}',
  notType: function notType(_ref) {
    var path = _ref.path,
      type = _ref.type,
      value = _ref.value,
      originalValue = _ref.originalValue;
    var isCast = originalValue != null && originalValue !== value;
    var msg = "Поле " + path + " должно быть `" + type + "` типа, " + ("но конечное значение: `" +
      (0, _printValue.default)(value, true) + "`") + (isCast ? " (преобразовано от значения `" +
      (0, _printValue.default)(originalValue, true) + "`)." : '.');

    if (value === null) {
      msg += "\n Если \"null\" должно быть пустым значением, отметьте схему как `.nullable()`";
    }

    return msg;
  }
};
exports.mixed = mixed;
var string = {
  length: 'Значение поля ${path} должно состоять из ${length} символов',
  min: 'Значение поля ${path} должно состоять хотя бы из ${min} символов',
  max: 'Значение поля ${path} должно состоять не более чем из ${max} символов',
  matches: 'Значение поля ${path} должно совпадать с регулярным выражением: "${regex}"',
  email: '${path} не является правильным адресом электронной почты',
  url: '${path} не является правильным URL',
  trim: 'Значение поля ${path} не должно содержать пробельные символы в начале или конце строки',
  lowercase: 'Значение поля ${path} не может содержать заглавные буквы',
  uppercase: 'Значение поля ${path} не может содержать строчные буквы'
};
exports.string = string;
var number = {
  min: 'Значение поля ${path} должно быть не меньше ${min}',
  max: 'Значение поля ${path} должно быть не больше ${max}',
  lessThan: 'Значение поля ${path} должно быть меньше ${less}',
  moreThan: 'Значение поля ${path} должно быть больше ${more}',
  notEqual: 'Значение поля ${path} не должно быть равно ${notEqual}',
  positive: 'Значение поля ${path} должно быть положительным',
  negative: 'Значение поля ${path} должно быть отрицательным',
  integer: 'Значение поля ${path} должно быть целым'
};
exports.number = number;
var date = {
  min: 'Значение поля ${path} должно быть позднее ${min}',
  max: 'Значение поля ${path} должно быть ранее ${max}'
};
exports.date = date;
var boolean = {};
exports.boolean = boolean;
var object = {
  noUnknown: 'Значение поля ${path} не моет содержать полей не описанных в объекте'
};
exports.object = object;
var array = {
  min: 'Значение поля ${path} должно содержать хотя бы ${min} элементов',
  max: 'Значение поля ${path} не более ${max} элементов'
};
exports.array = array;
var _default = {
  mixed: mixed,
  string: string,
  number: number,
  date: date,
  object: object,
  array: array,
  boolean: boolean
};
exports.default = _default;

