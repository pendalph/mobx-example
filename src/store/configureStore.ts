import {configure} from 'mobx';

type Options = Parameters<typeof configure>[0];

export function configureStore(overrrideOptions?: Options) {
  const options: Options = {
    // Require state to always be changed through actions (including it's creation).
    enforceActions: 'always',

    // Require computed values to be only accessed from an action or reaction.
    computedRequiresReaction: true,

    // Warn when observables are accessed without a "MobX context" - reports missing observer HOC wrappers
    observableRequiresReaction: false,

    // Warn when a reaction (e.g. observer HOC) is used without accessing any observables.
    reactionRequiresObservable: true,

    // Enable MobX error handling/recovery. Exceptions won't be propagated to our try/catch.
    disableErrorBoundaries: false,

    safeDescriptors: true,

    ...overrrideOptions,
  };

  configure(options);
}
