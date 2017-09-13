export class Notification {
    private _id: string = '';
    private _systemName: string = '';
    private _regionName: string = '';

    private _status: string = 'DRAFT';
    private _title: string = null;
    private _body: string = '';
    private _criteria: { channels: Array<string> } = {
        channels: [
            ''
        ]
    };
    private _data = {
        link: ''
    };

    private _timeToLive: Number = null;

    private _badge: boolean = null;
    private _icon: string = null;
    private _color: string = null;
    private _sound: string = null;

    private _createBy: string = '';
    private _createTime: string = '';
    private _scheduleTime: Date = null;
    private _startingTimezone: string = '';

    private _userEstimate: Number = 0;
    private _userSent: Number = 0;
    private _deviceSent: Number = 0;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get systemName(): string {
        return this._systemName;
    }

    set systemName(value: string) {
        this._systemName = value;
    }

    get regionName(): string {
        return this._regionName;
    }

    set regionName(value: string) {
        this._regionName = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get criteria(): {channels: Array<string>} {
        return this._criteria;
    }

    set criteria(value: {channels: Array<string>}) {
        this._criteria = value;
    }

    get data(): {link: string} {
        return this._data;
    }

    set data(value: {link: string}) {
        this._data = value;
    }

    get timeToLive(): Number {
        return this._timeToLive;
    }

    set timeToLive(value: Number) {
        this._timeToLive = value;
    }

    get badge(): boolean {
        return this._badge;
    }

    set badge(value: boolean) {
        this._badge = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get sound(): string {
        return this._sound;
    }

    set sound(value: string) {
        this._sound = value;
    }

    get createBy(): string {
        return this._createBy;
    }

    set createBy(value: string) {
        this._createBy = value;
    }

    get createTime(): string {
        return this._createTime;
    }

    set createTime(value: string) {
        this._createTime = value;
    }

    get scheduleTime(): any {
        return this._scheduleTime;
    }

    set scheduleTime(value: any) {
        this._scheduleTime = value;
    }

    get startingTimezone(): string {
        return this._startingTimezone;
    }

    set startingTimezone(value: string) {
        this._startingTimezone = value;
    }

    get userEstimate(): Number {
        return this._userEstimate;
    }

    set userEstimate(value: Number) {
        this._userEstimate = value;
    }

    get userSent(): Number {
        return this._userSent;
    }

    set userSent(value: Number) {
        this._userSent = value;
    }

    get deviceSent(): Number {
        return this._deviceSent;
    }

    set deviceSent(value: Number) {
        this._deviceSent = value;
    }
}
