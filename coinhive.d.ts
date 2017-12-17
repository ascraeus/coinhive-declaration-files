export declare namespace CoinHive {
    class Miner {
        params: {
            [key: string]: any;
        };
        private _siteKey;
        private _user;
        private _threads;
        private _hashes;
        private _currentJob;
        private _autoReconnect;
        private _reconnectRetry;
        private _tokenFromServer;
        private _goal;
        private _totalHashesFromDeadThreads;
        private _throttle;
        private _stopOnInvalidOptIn;
        private _waitingForAuth;
        private _autoThreads;
        private _tab;
        private _bc;
        private _auth;
        private _eventListeners;
        private _targetNumThreads;
        private _useWASM;
        private _asmjsStatus;
        private _onTargetMetBound;
        private _onVerifiedBound;
        private _optInToken;
        private _socket;
        verifyThread: CoinHive.JobThread;
        constructor(siteKey: string, params?: any);
        start(mode?: TabMode, optInToken?: any): void;
        stop(mode?: TabMode | string): void;
        getHashesPerSecond(): any;
        getTotalHashes(estimate?: boolean): number;
        getAcceptedHashes(): number;
        getToken(): any;
        on(type: string, callback: Function): void;
        getAutoThreadsEnabled(enabled: boolean): any;
        setAutoThreadsEnabled(enabled: boolean): void;
        getThrottle(): number;
        setThrottle(throttle: number): void;
        getNumThreads(): number;
        setNumThreads(num: number): void;
        hasWASMSupport(): boolean;
        isRunning(): boolean;
        isMobile(): boolean;
        didOptOut(seconds: number): boolean;
        private _startNow();
        private _otherTabRunning();
        private _updateTabs();
        private _adjustThreads();
        private _emit(type, params?);
        private _hashString(s);
        private _connect();
        private _onOpen(ev);
        private _onError(ev);
        private _onClose(ev);
        private _onMessage(ev);
        private _setJob(job);
        private _onTargetMet(result);
        private _onVerified(verifyResult);
        private _send(type, params);
    }
    class JobThread {
        worker: Worker;
        currentJob: any;
        jobCallback: Function;
        verifyCallback: Function;
        private _isReady;
        hashesPerSecond: number;
        hashesTotal: number;
        running: boolean;
        lastMessageTimestamp: number;
        constructor();
        onReady(msg: any): void;
        onReceiveMsg(msg: any): void;
        setJob(job: any, callback: Function): void;
        verify(job: any, callback: Function): void;
        stop(): void;
    }
    enum TabMode {
        IF_EXCLUSIVE_TAB = "ifExclusiveTab",
        FORCE_EXCLUSIVE_TAB = "forceExclusiveTab",
        FORCE_MULTI_TAB = "forceMultiTab",
    }
    const IF_EXCLUSIVE_TAB: TabMode;
    const FORCE_EXCLUSIVE_TAB: TabMode;
    const FORCE_MULTI_TAB: TabMode;
    let CONFIG: {
        LIB_URL: string;
        ASMJS_NAME: string;
        REQUIRES_AUTH: boolean;
        WEBSOCKET_SHARDS: string[][];
        CAPTCHA_URL: string;
        MINER_URL: string;
        AUTH_URL: string;
    };
    let CRYPTONIGHT_WORKER_BLOB: string;
    class Auth extends Miner {
        constructor(siteKey: string, params?: {
            [key: string]: any;
        });
        getOptOutTime(): number;
        auth(func: (token: any) => void): void;
        reset(): void;
    }
    class Token extends Miner {
        constructor(siteKey: string, goal?: number, params?: {
            [key: string]: any;
        });
    }
    class User extends Miner {
        constructor(siteKey: string, user: string, params?: {
            [key: string]: any;
        });
    }
    class Anonymous extends Miner {
        constructor(siteKey: string, params?: {
            [key: string]: any;
        });
    }
}
