import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class USERS {
  readonly id: string;
  readonly username?: string;
  readonly email?: string;
  readonly phone_number?: string;
  readonly address?: string;
  constructor(init: ModelInit<USERS>);
  static copyOf(source: USERS, mutator: (draft: MutableModel<USERS>) => MutableModel<USERS> | void): USERS;
}