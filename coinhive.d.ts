interface MinerMode{

}

interface Miner{
    start(mode?:MinerMode, optInToken?:any)
    stop(mode?:MinerMode)
    getHashesPerSecond():number
    getTotalHashes():number
    getAcceptedHashes():number
    getToken():string
    on(type:string, callback:Function)
    getAutoThreadsEnabled(enabled:boolean):boolean
    setAutoThreadsEnabled(enabled:boolean):boolean
    getThrottle():number
    setThrottle(throttle:number)
    getNumThreads():number
    setNumThreads(num:number)
    hasWASMSupport():boolean
    isRunning():boolean
    isMobile():boolean
    didOptOut(seconds:number):boolean
    _startNow()
    _otherTabRunning():any
    _updateTabs()
    _adjustThreads():any
    _emit(type:any, params:any)
    _hashString(s:any):any
    _onOpen(ev:any)
    _onError(ev:any)
    _onClose(ev:any)
    _onMessage(ev:any)
    _setJob(job:any)
    _onTargetMet(result:any)
    _onVerified(verifyResult:any)
    _send(type:any, params:any)

}

interface CoinHive{
}

interface CoinHiveStatic{
    IF_EXCLUSIVE_TAB:MinerMode     // 'ifExclusiveTab'
    FORCE_EXCLUSIVE_TAB:MinerMode  // 'forceExclusiveTab'
    FORCE_MULTI_TAB:MinerMode      // 'forceMultiTab'
    Token?(siteKey:string, goal:number, params?:any):Miner
    //User?(siteKey:string, user:string, params:any):Miner
    User?(siteKey:string, user?:string, params?:any) : Miner
    Anonymous?(siteKey:string, params?:any):Miner
}

//declare var CoinHive:CoinHiveStatic;
declare let CoinHive:CoinHiveStatic;