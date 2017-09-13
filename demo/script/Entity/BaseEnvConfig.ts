export class BaseEnvConfig {
    private _systemName: string = '';
    private _regions = null;

    constructor(protected name: string = '') {
        this._systemName = this.name.toLowerCase();
    }

    set regions(regions) {
        this._regions = regions;
    }

    get regions(): any {
        return this._regions;
    }

    get systemName(): string {
        return this._systemName;
    }

    set systemName(value: string) {
        this._systemName = value;
    }
}