import { accounting } from 'accounting';

function barStyle(valueA, valueB) {
  const percentage = valueA < valueB ? `${(valueA / valueB) * 100}%` : '100%';
  return {
    width: percentage,
  };
}

function formatMoney(value) {
  return accounting.formatMoney(value);
}

export { barStyle, formatMoney };
