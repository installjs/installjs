/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from "node:child_process";
/**
 * InstallJS and its functions.
 * @requires The latest version of Node and npm
 * @example
 * ```js
 * import InstallJS from "installjs";
 *
 * InstallJS.installPackage("react", { devDependency: true });
 * InstallJS.removePackage("react", { devDependency: true });
 * ```
 */
declare namespace InstallJS {
    interface InstalledPackage extends ChildProcessWithoutNullStreams {
    }
    interface RemovedPackage extends ChildProcessWithoutNullStreams {
    }
    /**
     * Installs a package via `npm i`.
     * @param packages The package(s) to install.
     * @param options *Optional* Choose whether or not the dependency/dependencies should be global, and choose whether or not the dependency/dependencies should be (a) dev dependency/dependencies.
     * @requires The latest version of Node and npm
     * @example
     * ```js
     * import { installPackage } from "installjs";
     *
     * installPackage("react", { devDependency: true });
     * ```
     */
    function installPackage(packages: string | string[], options?: {
        global?: boolean;
        devDependency?: boolean;
    }): InstalledPackage;
    /**
     * Removes a package via `npm rm`.
     * @param packages The package(s) to remove.
     * @param options *Optional* Give information for whether or not the dependency/dependencies to remove are/is global and choose whether or not the dependency/dependencies are/is (a) dev dependency/dependencies.
     * @requires The latest version of Node and npm
     * @example
     * ```js
     * import { removePackage } from "installjs";
     *
     * removePackage("react", { devDependency: true });
     * ```
     */
    function removePackage(packages: string | string[], options?: {
        global?: boolean;
        devDependency?: boolean;
    }): RemovedPackage;
}
export default InstallJS;
