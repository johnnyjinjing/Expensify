import selecExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if not expenses', () => {
  const res = selecExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selecExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const res = selecExpensesTotal(expenses);
  expect(res).toBe(114195);
});
