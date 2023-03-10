import { createTest, destroyVM } from '../util';
import Dialogb from 'packages/dialogb';

describe('Dialogb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Dialogb, true);
    expect(vm.$el).to.exist;
  });
});

