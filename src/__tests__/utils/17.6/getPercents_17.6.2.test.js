import { getPercents } from "../../../utils/17.6/getPercents_17.6.2";
describe ('Test get persent', () => {
    it('20% of 100', () => {
      const result = getPercents(20, 100);
  
      expect(result).toBe('20% от 100 = 20');
    }),
    it('percent argument is string', () => {
      const result = getPercents('blabla', 100);
  
      expect(result).toBe('blabla is not a number');
    })
    it('percent argument is null', () => {
      const result = getPercents(null, 100);
  
      expect(result).toBe('Can`t count null%');
    })
  });