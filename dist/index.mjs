import { spawn } from "node:child_process";
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
var InstallJS;
(function (InstallJS) {
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
    function installPackage(packages, options) {
        if (typeof packages === "string") {
            return spawn("npm", ["i", packages, options?.global ? "-G" : options?.devDependency ? "-D" : ""]);
        }
        else if (Array.isArray(packages)) {
            return spawn("npm", ["i", ...packages, options?.global ? "-G" : options?.devDependency ? "-D" : ""]);
        }
        else {
            throw new TypeError("Incorrect type for argument `packages`; `packages` must be a string or an array of strings representing the packages you want to install");
        }
    }
    InstallJS.installPackage = installPackage;
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
    function removePackage(packages, options) {
        if (typeof packages === "string") {
            return spawn("npm", ["rm", packages, options?.global ? "-G" : options?.devDependency ? "-D" : ""]);
        }
        else if (Array.isArray(packages)) {
            return spawn("npm", ["rm", ...packages, options?.global ? "-G" : options?.devDependency ? "-D" : ""]);
        }
        else {
            throw new TypeError("Incorrect type for argument `packages`; `packages` must be a string or an array of strings representing the packages you want to remove");
        }
    }
    InstallJS.removePackage = removePackage;
})(InstallJS || (InstallJS = {}));
export default InstallJS;
