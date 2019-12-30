/* eslint-disable */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;

var _printValue = _interopRequireDefault(require("yup/lib/util/printValue"));

var mixed = {
  default: '${path} ist ungültig',
  required: '${path} ist ein Pflichtfeld',
  oneOf: '${path} muss einer der folgenden Werte sein: ${values}',
  notOneOf: '${path} darf keiner der folgenden Werte sein: ${values}',
  notType: function notType(_ref) {
    var path = _ref.path,
      type = _ref.type,
      value = _ref.value,
      originalValue = _ref.originalValue;
    var isCast = originalValue != null && originalValue !== value;
    var msg = path + " muss ein `" + type + "` Typ sein, " + ("aber der endgültige Wert war: `" +
      (0, _printValue.default)(value, true) + "`") + (isCast ? " (aber der endgültige Wert war `" +
      (0, _printValue.default)(originalValue, true) + "`)." : '.');

    if (value === null) {
      msg += "\n Wenn \"null\" als leerer Wert vorgesehen ist, müssen Sie das Schema als `.nullable ()` kennzeichnen";
    }

    return msg;
  }
};
exports.mixed = mixed;
var string = {
  length: '${path} muss genau ${length} Zeichen sein',
  min: '${path} muss mindestens ${min} Zeichen enthalten',
  max: '${path} darf höchstens ${max} Zeichen enthalten',
  matches: '${path} muss mit folgendem übereinstimmen: "${regex}"',
  email: '${path} muss eine gültige E-Mail-Adresse sein',
  url: '${path} muss eine gültige URL sein',
  trim: '${path} muss eine gekürzte Zeichenfolge sein',
  lowercase: '${path} muss ein Kleinbuchstabe sein',
  uppercase: '${path} muss ein Großbuchstabe sein'
};
exports.string = string;
var number = {
  min: '${path} muss größer oder gleich ${min} sein',
  max: '${path} muss kleiner oder gleich ${max} sein',
  lessThan: '${path} muss kleiner als ${less} sein',
  moreThan: '${path} muss größer als ${more} sein',
  notEqual: '${path} darf nicht gleich ${notEqual} sein',
  positive: '${path} muss eine positive Zahl sein',
  negative: '${path} muss eine negative Zahl sein',
  integer: '${path} muss eine ganze Zahl sein'
};
exports.number = number;
var date = {
  min: '${path} Feld muss später als ${min} sein',
  max: '${path} Feld muss vor ${max} liegen'
};
exports.date = date;
var boolean = {};
exports.boolean = boolean;
var object = {
  noUnknown: 'Das Feld ${path} darf keine Schlüssel enthalten, die nicht in der Objektform angegeben sind'
};
exports.object = object;
var array = {
  min: 'Das Feld ${path} muss mindestens ${min} Elemente enthalten',
  max: 'Das Feld ${path} darf höchstens ${max} Elemente enthalten'
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
