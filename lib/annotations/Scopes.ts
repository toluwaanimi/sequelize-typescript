import 'reflect-metadata';
import {DefineScopeOptions} from "sequelize";
import {addOptions} from "../utils/models";

/**
 * Sets scopes for annotated class
 */
export function Scopes(scopes: DefineScopeOptions): Function {

  return (target: any) => {

    addOptions(target.prototype, {scopes});
  };
}
